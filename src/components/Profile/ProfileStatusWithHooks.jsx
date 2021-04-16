import React from "react";
import styles from "./ProfileInfo/ProfileInfo.module.css";

const ProfileStatusWithHooks = props => {
    const [editMode, setEditMode] = React.useState(false);
    const [status, setStatus] = React.useState(props.status);

    React.useEffect( () => {
        setStatus(props.status);
    }, [props.status]);

    const activatedEditMode = () => {
        setEditMode(true);
    }

    const deActivatedEditMode = () => {
        setEditMode(false);
        props.setStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            {
                !editMode
                    ? <div
                        onDoubleClick={activatedEditMode}
                        className={styles.status}>
                        {status}
                    </div>
                    : <input
                        autoFocus='true'
                        onBlur={deActivatedEditMode}
                        onChange={onStatusChange}
                        type='text'
                        value={status}
                    />
            }
        </>
    )
}

export default ProfileStatusWithHooks;