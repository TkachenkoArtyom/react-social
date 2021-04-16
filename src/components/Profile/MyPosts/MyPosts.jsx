import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, Form} from 'react-final-form';
import {validators} from "../../../utils/validators/validators";
import {FormControlElement} from "../../common/FormControls/FormControls";

const MyPosts = React.memo((props) => {
    let state = props.profilePage;
    const postsElements = state.posts.map(post => {
        return <Post
            key={post.key}
            id={post.id}
            text={post.text}
            likesCount={post.likesCount}/>
    })
    const addPost = (value) => {
        props.addPost(value);
    }
    return (
        <div className={styles.postsBlock}>
            <h3> My Posts </h3>
            <FormAddPost addPost={addPost}/>
            <div className={styles.posts}>{postsElements}</div>
        </div>
    );
})

const FormAddPost = props => {
    const TextArea = FormControlElement('textarea');
    return (
        <Form
            onSubmit={values => {
                props.addPost(values.post)
            }}
            validate={() => {

            }}
        >
            {({handleSubmit, pristine, form, submitting}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name={'post'}
                               component={TextArea}
                               placeholder={'Enter post text..'}
                               validate={validators.maxLength(50)}
                        />
                    </div>
                    <div>
                        <div>
                            <button type="submit"
                                    disabled={submitting}
                            > Add post
                            </button>
                            <button type="button"
                                    disabled={pristine || submitting}
                                    onClick={form.reset}
                            > Clear
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </Form>
    )
}

export default MyPosts;