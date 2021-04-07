import React from 'react';
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }
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
                <img src={props.profile.photos.large} alt=""/>
                <div className={styles.aboutMe}>
                    {props.profile.aboutMe}
                </div>
                <div>{props.profile.fullName}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;