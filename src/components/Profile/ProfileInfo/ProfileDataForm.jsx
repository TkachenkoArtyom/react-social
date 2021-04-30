import React from 'react';
import {Form, Field} from 'react-final-form';
import {FormControlElement} from "../../common/FormControls/FormControls";
import styles from './ProfileInfo.module.css';

const ProfileDataForm = ({profile, leaveEditMode, saveProfile}) => {

    const Input = FormControlElement('input');
    const TextArea = FormControlElement('textarea');

    return (
        <Form
            onSubmit={async values => {
                await saveProfile(values);
                leaveEditMode();
            }}
            initialValues={profile}
        >
            {({handleSubmit, pristine, form, submitting}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor={'fullName'}>
                            <b>Full Name:</b>
                            <Field
                                name={'fullName'}
                                component={Input}
                                type={'text'}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor={'lookingForAJob'}>
                            <b>Looking for a job:</b>
                            <Field
                                name={'lookingForAJob'}
                                component={Input}
                                type={'checkbox'}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor={'lookingForAJobDescription'}>
                            <b>Looking for a job description:</b>
                            <Field name={'lookingForAJobDescription'}
                                   component={TextArea}
                                   placeholder={'Type something here..'}
                            />
                        </label>
                    </div>

                    <div>
                        <label htmlFor={'aboutMe'}>
                            <b>About me:</b>
                            <Field name={'aboutMe'}
                                   component={TextArea}
                                   placeholder={'Type something here..'}
                            />
                        </label>
                    </div>
                    <div>
                        <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                         return <div key={key} className={styles.contact}>
                                     <b>{key}</b>:
                                     <Field
                                        name={'contacts.' + key}
                                        component={Input}
                                        type={'text'}
                                        placeholder={'Enter contact..'}
                                     />
                                </div>
                    })}
                    </div>


                    <div>
                        <button type={'submit'} disabled={submitting}>
                            Save changes
                        </button>
                        {/*<button*/}
                        {/*    type="button"*/}
                        {/*    disabled={pristine || submitting}*/}
                        {/*    onClick={form.reset}*/}
                        {/*>*/}
                        {/*    Clear Values*/}
                        {/*</button>*/}
                    </div>
                </form>
            )}
        </Form>
    )
}

export default ProfileDataForm;