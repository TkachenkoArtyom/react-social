import React from 'react';
import {connect} from 'react-redux';
import {
    follow, getUsers,
    setCurrentPage,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {compose} from "redux";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onChangePage = (pageNum) => {
        this.props.getUsers(pageNum, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> :
                <Users
                    onChangePage={this.onChangePage}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    usersCount={this.props.usersCount}
                    pageSize={this.props.pageSize}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    isFetching={this.props.isFetching}
                    followingInProgress={this.props.followingInProgress}
                />}
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers}),
    WithAuthRedirect
)(UsersContainer);

