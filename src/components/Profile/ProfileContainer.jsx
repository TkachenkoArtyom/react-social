import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {getStatus, savePhoto, saveProfile, setProfile, setStatus} from "../../redux/profile-reducer";
import {compose} from "redux";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";

class ProfileContainer extends React.Component {

    refreshProfile() {
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

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile
                {...this.props}
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                savePhoto={this.props.savePhoto}
                saveProfile={this.props.saveProfile}
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
    connect(mapStateToProps, {setProfile, getStatus, setStatus, savePhoto, saveProfile}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);