import React from 'react';
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, setStatus, isOwner, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = React.useState(false);

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

                {
                    editMode
                    ? <ProfileDataForm profile={profile} saveProfile={saveProfile} leaveEditMode={() => setEditMode(false)}/>
                        : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>
                }

                <ProfileStatusWithHooks
                    status={status}
                    setStatus={setStatus}
                />

            </div>
        </div>
    );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {
                isOwner && <button onClick={goToEditMode}>Edit</button>
            }
            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>My professional skills:</b> {profile.lookingForAJobDescription}
            </div>
            }

            <div>
                <b>About me:</b> {profile.aboutMe}
            </div>

            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={styles.contact}>
            <b>{contactTitle}</b>:{contactValue}
        </div>
    )
}

export default ProfileInfo;