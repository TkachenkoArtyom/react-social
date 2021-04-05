import React from 'react';
import Users from './User';
import {connect} from 'react-redux';
import {followAC, setCurrentPageAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setPage: (pageNum) => {
            dispatch(setCurrentPageAC(pageNum));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);