import React from 'react';
import styles from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogsItem from "./DialogsItem/DialogsItem";

function Dialogs(props) {
    const dialogElements = props.state.dialogs.map(dialog =>
        <DialogsItem
            name={dialog.name}
            id={dialog.id}/>
    )
    const messageElement = props.state.messages.map(item =>
        <Message
            message={item.message}
            id={item.id}/>
    )
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogElements}
            </div>
            <div className={styles.messages}>
                {messageElement}
            </div>
        </div>
    );
}

export default Dialogs;