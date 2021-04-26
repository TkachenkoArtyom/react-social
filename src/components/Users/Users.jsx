import React from 'react';
import styles from './users.module.css';
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

let Users = ({currentPage, onChangePage, usersCount, pageSize, portionSize, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage}
                       onChangePage={onChangePage}
                       usersCount={usersCount}
                       pageSize={pageSize}
                       portionSize={portionSize}
            />
            {
                props.users.map(user =>
                    <div key={user.id}>
                            <span>
                                <div>
                                    <NavLink to={'/profile/' + user.id}>
                                      <img
                                          className={styles.avatar}
                                          src={user.photos.small != null ? user.photos.small : 'https://image.freepik.com/free-vector/businessman-avatar-character_24877-18284.jpg'}
                                          alt="img"
                                      />
                                    </NavLink>
                                </div>
                                <div>
                                    { user.followed
                                        ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                                  onClick={() => {
                                                      props.unfollow(user.id);
                                                  }}>Unfollow</button>
                                        : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                                  onClick={() => {
                                                      props.follow(user.id);
                                                  }}>Follow</button>
                                    }
                                </div>
                            </span>
                        <span>
                                <span>
                                    <div>{user.name}</div>
                                    <div>{user.status}</div>
                                </span>
                                <span>
                                    {/*<div>{user.location.country}</div>*/}
                                    {/*<div>{user.location.city}</div>*/}
                                </span>
                            </span>
                    </div>
                )
            }
        </div>
    );
}

export default Users;