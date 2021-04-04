import React from 'react';
import styles from './users.module.css';
import * as axios from "axios";

function Users(props) {

    if (props.users.length === 0) {

        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
               props.setUsers(response.data.items)
            })

    }

    return (
        <div>
            {
                props.users.map(user =>
                    <div key={user.id}>
                            <span>
                                <div>
                                    <img
                                        className={styles.avatar}
                                        src={user.photos.small !== null ? user.photos.small : user.userPhoto}
                                        alt="img"
                                    />
                                </div>
                                <div>
                                    {user.followed
                                        ? <button onClick={() => {
                                            props.unfollow(user.id)
                                        }}>Follow</button>
                                        : <button onClick={() => {
                                            props.follow(user.id)
                                        }}>Unfollow</button>
                                    }
                                </div>
                            </span>
                        <span>
                                <span>
                                    <div>{user.fullName}</div>
                                    <div>{user.status}</div>
                                </span>
                                <span>
                                    <div>{'user.location.country'}</div>
                                    <div>{'user.location.city'}</div>
                                </span>
                            </span>
                    </div>
                )
            }
        </div>
    );
}

export default Users;