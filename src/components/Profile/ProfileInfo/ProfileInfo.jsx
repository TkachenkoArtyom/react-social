import React from 'react';
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import Status from "../Status";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                {/*<img*/}
                {/*    alt="Avatar"*/}
                {/*    className={styles.img}*/}
                {/*    src="https://www.fgdc.gov/img/slider/slider-bg-network.jpg/image"*/}
                {/*/>*/}
            </div>
            <div className={styles.descriptionBlock}>
                <img className={styles.profileImage}
                     src={props.profile.photos.large ||
                     'https://image.freepik.com/free-vector/illustration-of-a-stylish-young-man-avatar-of-a-man-for-profile_15870-706.jpg'}
                     alt="Avatar"
                />
                <div className={styles.fullName}>{props.profile.fullName}</div>
                <div className={styles.aboutMe}>{props.profile.aboutMe || 'Empty'}</div>
                <ProfileStatusWithHooks {...props}/>
            </div>
        </div>
    );
}

export default ProfileInfo;