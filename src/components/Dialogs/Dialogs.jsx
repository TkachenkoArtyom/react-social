import React from 'react';
import styles from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogsItem from "./DialogsItem/DialogsItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

function Dialogs(props) {

    let state = props.store.getState().dialogsPage

    const dialogElements = state.dialogs.map(dialog =>
        <DialogsItem
            name={dialog.name}
            id={dialog.id}/>
    )
    const messageElement = state.messages.map(item =>
        <Message
            message={item.message}
            id={item.id}/>
    )
    const newMessageBody = state.newMessageBody;
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogElements}
            </div>
            <div className={styles.messages}>
                <div>{messageElement}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder='Enter your message'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;