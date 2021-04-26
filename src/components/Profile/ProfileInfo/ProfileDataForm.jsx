import React from 'react';
import {Form, Field} from 'react-final-form';
import {FormControlElement} from "../../common/FormControls/FormControls";

const ProfileDataForm = ({profile, leaveEditMode}) => {

    const Select = FormControlElement('select');
    const TextArea = FormControlElement('textarea');

    return (
        <Form
            onSubmit={values => {
                console.log(values)

            }}
        >
            {({handleSubmit, pristine, form, submitting}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name={'lookingForAJob'}>
                        {props => (
                                <div>
                                    <b>Looking for a job:</b>
                                    <select {...props}>
                                        <option value="yes">yes</option>
                                        <option value="no">no</option>
                                    </select>
                                </div>
                            )}
                        </Field>
                    </div>

                    {/*<div>*/}
                    {/*    <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}*/}
                    {/*</div>*/}

                    <div>
                        <Field name={'aboutMe'}>
                            {props => (
                                <div>
                                    <b>About me:</b>
                                    <textarea {...props} placeholder={'Type something here..'}></textarea>
                                </div>
                            )}
                        </Field>
                    </div>

                    <div>
                        <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                        // return <Contact contactTitle={key} contactValue={profile.contacts[key]}/>
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