import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

function Navbar(props) {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={`${styles.item} ${styles.active}`}>
                    <NavLink to='/profile' activeClassName={styles.active}>Profile</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to='/dialogs' activeClassName={styles.active}>Dialogs</NavLink>
                </li>
                <li className={styles.item}>
                    <a href="#">News</a>
                </li>
                <li className={styles.item}>
                    <a href="#">Music</a>
                </li>
                <li className={styles.item}>
                    <a href="#">Settings</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;