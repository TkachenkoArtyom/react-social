import React from 'react';
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";

function ProfileInfo({profile, status, setStatus, isOwner, savePhoto}) {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = e => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={styles.descriptionBlock}>
                <img className={styles.profileImage}
                     src={profile.photos.large ||
                     'https://image.freepik.com/free-vector/illustration-of-a-stylish-young-man-avatar-of-a-man-for-profile_15870-706.jpg'}
                     alt="Avatar"
                />
                <div className={styles.fullName}>{profile.fullName}</div>
                <div className={styles.aboutMe}>{profile.aboutMe || 'Empty'}</div>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

                <ProfileStatusWithHooks
                    status={status}
                    setStatus={setStatus}

                />
            </div>
        </div>
    );
}

export default ProfileInfo;