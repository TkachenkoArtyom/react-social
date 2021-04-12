import React from "react";
import styles from "./ProfileInfo/ProfileInfo.module.css";

class Status extends React.Component {
    state = {
        isEdited: false,
        status: this.props.status
    }

    deActivateStatusEdit = () => {
        this.setState({ isEdited: false });
        this.props.setStatus(this.state.status);
    }

    activateStatusEdit = () => {
        this.setState({ isEdited: true });
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                {
                    !this.state.isEdited
                        ? <div
                            onDoubleClick={this.activateStatusEdit}
                            className={styles.status}>
                            {this.state.status}
                        </div>
                        : <input
                            autoFocus='true'
                            onBlur={this.deActivateStatusEdit}
                            onChange={this.onStatusChange}
                            type='text'
                            value={this.state.status}
                        />
                }
            </>
        )
    }
}

export default Status;