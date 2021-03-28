import React from 'react';
import styles from '../Dialogs.module.css'

function Message(props) {
    return (
        <div className={styles.dialog}>{props.message}</div>
    );
}

export default Message;