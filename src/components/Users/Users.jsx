import React from 'react';
import styles from './users.module.css';

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
                                    <img
                                        className={styles.avatar}
                                        src={user.photos.small != null ? user.photos.small : 'https://image.freepik.com/free-vector/businessman-avatar-character_24877-18284.jpg'}
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