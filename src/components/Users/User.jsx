import React from 'react';
import styles from './users.module.css';
import * as axios from "axios";

class User extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {
                        pages.map(page => {
                            return <span
                                className={this.props.currentPage === page && styles.selectedPage}
                                onClick={() => {this.props.setPage(page)}}
                                >{page}</span>
                        })
                    }
                </div>
                {
                    this.props.users.map(user =>
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
                                            this.props.unfollow(user.id)
                                        }}>Follow</button>
                                        : <button onClick={() => {
                                            this.props.follow(user.id)
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
        )
    }
}

export default User;