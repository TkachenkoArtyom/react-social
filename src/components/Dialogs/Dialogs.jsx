import React from 'react';
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

function Dialogs(props) {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog + ' ' + styles.active}>
                    <NavLink to='/dialogs/1'>Dimych</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/2'>Pasha</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/3'>Misha</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/4'>Artem</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/5'>Kirill</NavLink>
                </div>
            </div>
            <div className={styles.messages}>
                <div className="message">Hi Artyom, My Name is!</div>
                <div className="message">Let's go</div>
                <div className="message">How much it cost?</div>
                <div className="message">How are you</div>
                <div className="message">I love you</div>
            </div>
        </div>
    );
}

export default Dialogs;