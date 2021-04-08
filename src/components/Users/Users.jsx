import React from 'react';
import styles from './users.module.css';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.usersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {
                    pages.map(page => {
                        return <span
                            key={page}
                            className={props.currentpage == page ? styles.selectedPage : styles.defaultPage}
                            onClick={() => {
                                props.onChangePage(page)
                            }}
                        >{page}</span>
                    })
                }
            </div>
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
                                    {user.followed
                                        ? <button onClick={() => {
                                            axios
                                                .delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                                    withCredentials: true,
                                                    // headers: {
                                                    //     'API-KEY': '2a0aa385-8fb8-470d-af2f-73ac894466a9'
                                                    // }
                                                })
                                                .then(response => {
                                                    if (response.data.resultCode == 0) {
                                                        props.unfollow(user.id);
                                                    }
                                                })

                                        }}>Follow</button>
                                        : <button onClick={() => {
                                            axios
                                                .post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                                    withCredentials: true,
                                                    // headers: {
                                                    //     'API-KEY': '2a0aa385-8fb8-470d-af2f-73ac894466a9'
                                                    // }
                                                })
                                                .then(response => {
                                                    if (response.data.resultCode == 0) {
                                                        props.follow(user.id);
                                                    }
                                                })
                                        }}>Unfollow</button>
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