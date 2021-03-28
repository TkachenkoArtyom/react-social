import React from 'react';
import styles from './ProfileInfo.module.css'

function ProfileInfo(props) {
    return (
        <div>
            <div>
                <img
                    className={styles.img}
                    src="https://www.fgdc.gov/img/slider/slider-bg-network.jpg/image"
                    alt="Avatar"
                />
            </div>
            <div className={styles.descriptionBlock}>
                ava
            </div>
        </div>
    );
}

export default ProfileInfo;