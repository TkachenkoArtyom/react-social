import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

function Profile(props) {
    return (
        <div>
            main content
            <div>
                <img className={styles.img} src="https://www.fgdc.gov/img/slider/slider-bg-network.jpg/image"/>
            </div>

            <div>
                ava
            </div>

            <MyPosts/>

        </div>
    );
}

export default Profile;