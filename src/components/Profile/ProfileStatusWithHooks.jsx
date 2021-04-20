import React from "react";
import styles from "./ProfileInfo/ProfileInfo.module.css";

const ProfileStatusWithHooks = ({status, setStatus}) => {
    const [editMode, setEditMode] = React.useState(false);
    const [currStatus, setCurrStatus] = React.useState(status);

    React.useEffect( () => {
        setCurrStatus(status);
    }, [status]);

    const activatedEditMode = () => {
        setEditMode(true);
    }

    const deActivatedEditMode = () => {
        setEditMode(false);
        setStatus(currStatus);
    }

    const onStatusChange = (e) => {
        setCurrStatus(e.currentTarget.value)
    }

    return (
        <>
            {
                !editMode
                    ? <div
                        onDoubleClick={activatedEditMode}
                        className={styles.status}>
                        {currStatus}
                    </div>
                    : <input
                        autoFocus='true'
                        onBlur={deActivatedEditMode}
                        onChange={onStatusChange}
                        type='text'
                        value={currStatus}
                    />
            }
        </>
    )
}

export default ProfileStatusWithHooks;