import React from 'react';
import styles from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogsItem from "./DialogsItem/DialogsItem";
import {Form, Field} from 'react-final-form';
import {validators} from "../../utils/validators/validators";
import {FormControlElement} from "../common/FormControls/FormControls";

function Dialogs(props) {
    let state = props.dialogsPage;
    const dialogElements = state.dialogs.map(dialog =>
        <DialogsItem
            key={dialog.id}
            id={dialog.id}
            name={dialog.name}
        />
    )
    const messageElement = state.messages.map(item =>
        <Message
            key={item.id}
            id={item.id}
            message={item.message}
        />
    )
    const addNewMessage = (message) => {
        props.sendMessage(message);
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogElements}
            </div>
            <div className={styles.messages}>
                <div>{messageElement}</div>
                <AddMessageForm addNewMessage={addNewMessage}/>
            </div>
        </div>
    );
}

const AddMessageForm = (props) => {
    const TextArea = FormControlElement('textarea');

    return (
        <Form onSubmit={values => {
            props.addNewMessage(values.message);
        }}
          validate={values => {

          }}
        >
            {({handleSubmit, pristine, form, submitting}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field
                            name='message'
                            component={TextArea}
                            validate={validators.maxLength(50)}
                            placeholder='Enter your message'
                        />
                    </div>
                    <div>
                        <button
                            type='submit'
                            disabled={submitting}
                        > Send
                        </button>
                        <button
                            type="button"
                            disabled={pristine || submitting}
                            onClick={form.reset}
                        > Clear
                        </button>
                    </div>
                </form>
            )}
        </Form>
    )
}

export default Dialogs;