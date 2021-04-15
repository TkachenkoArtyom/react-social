import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {getStatus, setProfile, setStatus} from "../../redux/profile-reducer";
import {compose} from "redux";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }

        this.props.setProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.profilePage.status,
        profile: state.profilePage.profile,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps, {setProfile, getStatus, setStatus}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);