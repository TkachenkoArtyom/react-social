import React from 'react';
import {Form, Field} from 'react-final-form';
import {FormControlElement} from "../common/FormControls/FormControls";
import {validators} from "../../utils/validators/validators";

const Login = () => {

    const Input = FormControlElement('input');

    return (
        <Form
            onSubmit={values => {
                console.log(values)
            }}
            validate={values => {

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

export default Login;