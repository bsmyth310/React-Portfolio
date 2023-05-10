import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { validateEmail } from '../utils/helpers';
require('dotenv').config()

//Contact Form with fields for
//Name
//Email Address
//Message

function Contact() {
    const [state, handleSubmit] = useForm(process.env.REACT_APP_FORM_ID);
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;


        if (state.succeeded) {
        return (
            <div>
                <p>Thank you for reaching out! I will get back to you ASAP</p>
                <button className="button is-medium is-primary is-half m-6" onClick={()=> window.open("/#contact")}>Back to About</button>
            </div>
        );
        }

        const handleChange = (e) => {
        if (e.target.value.length === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            }   else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`A ${e.target.name} is required.`);
            }   else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setErrorMessage({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
        };

        return (
        <div>
            <p className="content is-medium">Contact Me</p>
            <hr />
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label" htmlFor="name">Name</label>
                    <label className="input" type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div className="field">
                    <label className="label" htmlFor="email">Email Address</label>
                    <label className="input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div className="field">
                    <label className="label" htmlFor="message">Message</label>
                    <label className="textarea" type="message" rows="4" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="is-danger">{errorMessage}</p>
                    </div>
                )}
                <button className="button is-medium is-primary is-fullwidth" data-testid="button" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;