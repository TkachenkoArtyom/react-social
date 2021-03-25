import React from 'react';
import styles from './Header.module.css'

function Header(props) {
    return (
        <header className={styles.header}>
            <img
                className={styles.header__img}
                src="https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg"/>
        </header>
    );
}

export default Header;