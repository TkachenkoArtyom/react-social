import React from 'react';
import styles from './Navbar.module.css'

function Navbar(props) {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={`${styles.item} ${styles.active}`}>
                    <a href="#">Profile</a>
                </li>
                <li className={styles.item}>
                    <a href="#">News</a>
                </li>
                <li className={styles.item}>
                    <a href="#">Messages</a>
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