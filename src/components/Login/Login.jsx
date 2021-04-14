import React from 'react';
import {Form, Field} from 'react-final-form';
import {FormControlElement} from "../common/FormControls/FormControls";
import {validators} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from './../common/FormControls/FormControls.module.css';

const Login = (props) => {
    const Input = FormControlElement('input');

    if (props.isAuth === true) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <Form
            onSubmit={values => {
                props.login(values.email, values.password, values.rememberMe);
            }}
        >
            {({handleSubmit, pristine, form, submitting}) => (
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div>
                        <Field
                            name="email"
                            component={Input}
                            type="text"
                            validate={validators.maxLength(20)}
                            placeholder="email"
                        />
                    </div>
                    <div>
                        <Field
                            name="password"
                            component={Input}
                            type="password"
                            validate={validators.maxLength(20)}
                            placeholder="password"
                        />
                    </div>
                    <div>
                        <Field
                            name="rememberMe"
                            component={'input'}
                            type="checkbox"
                            validate={validators.maxLength(20)}
                        />
                    </div>
                    {props.error.show && <div className={styles.formSummaryError}>
                        {props.error.message}
                    </div>}
                    <div>
                        <button type="submit" disabled={submitting}>
                            Submit
                        </button>
                        <button
                            type="button"
                            disabled={pristine || submitting}
                            onClick={form.reset}
                        >
                            Clear Values
                        </button>
                    </div>

                </form>
            )}
        </Form>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        error: state.auth.error
    }
};

export default connect(mapStateToProps, {login})(Login);