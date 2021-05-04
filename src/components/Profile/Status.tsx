import React, {ChangeEvent} from "react";
import styles from "./ProfileInfo/ProfileInfo.module.css";

type PropsType = {
    status: string
    setStatus: (newStatus:string) => void
}

type StateType = {
    isEdited: boolean
    status: string
}

class Status extends React.Component<PropsType, StateType> {
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

    onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: event.currentTarget.value
        })
    }

    componentDidUpdate = (prevProps: PropsType, prevState: StateType) => {
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
                            autoFocus={true}
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