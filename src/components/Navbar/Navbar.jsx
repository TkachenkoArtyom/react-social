import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

function Navbar() {
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
                    <a href="/users">Users</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;