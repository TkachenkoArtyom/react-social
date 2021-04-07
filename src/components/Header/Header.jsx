import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={styles.header}>
            <img
                className={styles.header__img}
                src="https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg"
                alt='HeaderImg'
            />
            <div className={styles.loginBlock}>
                {
                    props.isAuth ?
                        props.login
                        : <NavLink to={'/login'}> Login </NavLink>
                }

            </div>
        </header>
    );
}

export default Header;