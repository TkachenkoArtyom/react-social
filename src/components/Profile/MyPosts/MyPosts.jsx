import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts(props) {

    let state = props.profilePage

    const postsElements = state.posts.map(post => {
        return <Post text={post.text} id={post.id} likesCount={post.likesCount}/>
    })

    const newPostElement = React.createRef()

    const addPost = () => {
        props.addPost();
    }
    const onPostChange = () => {
        let text = newPostElement.current.value
        props.onPostChange(text);
    }
    return (
        <div className={styles.postsBlock}>
            <h3>
                My Posts
            </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={state.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                    <button>Remove post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;