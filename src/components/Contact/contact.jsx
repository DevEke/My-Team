import React, { useState } from 'react';
import person from '../../img/icon-person.svg';
import cog from '../../img/icon-cog.svg';
import chart from '../../img/icon-chart.svg';
import './contact.scss';

function ContactView(props) {
    const [nameValidation, checkName] = useState({});
    const [emailValidation, checkEmail] = useState({});
    const [companyValidation, checkCompany] = useState({});
    const [titleValidation, checkTitle] = useState({});
    const [messageValidation, checkMessage] = useState({});

    const formValidation = () => {
        const nameValidation = {};
        const emailValidation = {};
        const companyValidation = {};
        const titleValidation = {};
        const messageValidation = {};
        let isValid = true;
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let company = document.getElementById('company').value;
        let title = document.getElementById('title').value;
        let message = document.getElementById('message').value;
        if ( name.length <= 0 ) {
            document.getElementById('name').classList.add('error');
            nameValidation.noName = "This field is required";
            isValid = false;
        }
        if ( !email.includes(".") && !email.includes("@") ) {
            document.getElementById('email').classList.add('error');
            emailValidation.emailInvalid = "Enter a valid email address";
            isValid = false;
        }
        if ( email.length <= 0 ) {
            document.getElementById('email').classList.add('error');
            emailValidation.noEmail = "This field is required";
            isValid = false;
        }
        if ( company.length <= 0 ) {
            document.getElementById('company').classList.add('error');
            companyValidation.noCompany = "This field is required";
            isValid = false;
        }
        if ( title.length <= 0 ) {
            document.getElementById('title').classList.add('error');
            titleValidation.noTitle = "This field is required";
            isValid = false;
        }
        if ( message.length <= 0 ) {
            document.getElementById('message').classList.add('error');
            messageValidation.noMessage = "This field is required";
            isValid = false;
        }

        checkName(nameValidation);
        checkEmail(emailValidation);
        checkCompany(companyValidation);
        checkTitle(titleValidation);
        checkMessage(messageValidation);
        return isValid;
    };

    const submitForm = (e) => {
        e.preventDefault();
        const isValid = formValidation();
        if (isValid) {
            document.getElementById('name').classList.remove('error');
            document.getElementById('email').classList.remove('error');
            document.getElementById('company').classList.remove('error');
            document.getElementById('title').classList.remove('error');
            document.getElementById('message').classList.remove('error');
            alert('Message has been sent')
        }
    }

        return (
            <div className="contact-page__container">
                <div className="contact-page__details">
                    <h1 className="contact-page__title">Contact</h1>
                    <h2 className="contact-page__sub-title">Ask us about</h2>
                    <div className="contact-page__data">
                        <img className="contact-page__image" src={person} alt="person icon" />
                        <p className="contact-page__text">The quality of our talent network</p>
                    </div>
                    <div className="contact-page__data">
                        <img className="contact-page__image" src={cog} alt="cong icon" />
                        <p className="contact-page__text">Usage & implementation of our software</p>
                    </div>
                    <div className="contact-page__data">
                        <img className="contact-page__image" src={chart} alt="chart icon" />
                        <p className="contact-page__text">How we help drive innovation</p>
                    </div>
                </div>
                <form className="contact-page__form">
                    <label className="form__label" htmlFor="name">Name</label>
                    <input className="form__input" type="text" placeholder="Name" id="name" />
                    {Object.keys(nameValidation).map((key) => {
                        return (
                            <small className="form__error-message">{nameValidation[key]}</small>
                        )
                    })}
                    <label className="form__label" htmlFor="email">Email Address</label>
                    <input className="form__input" type="text" placeholder="Email Address" id="email" />
                    {Object.keys(emailValidation).map((key) => {
                        return (
                            <small className="form__error-message">{emailValidation[key]}</small>
                        )
                    })}
                    <label className="form__label" htmlFor="company">Company Name</label>
                    <input className="form__input" type="text" placeholder="Company Name" id="company" />
                    {Object.keys(companyValidation).map((key) => {
                        return (
                            <small className="form__error-message">{companyValidation[key]}</small>
                        )
                    })}
                    <label className="form__label" htmlFor="title">Title</label>
                    <input className="form__input" type="text" placeholder="Title" id="title" />
                    {Object.keys(titleValidation).map((key) => {
                        return (
                            <small className="form__error-message">{titleValidation[key]}</small>
                        )
                    })}
                    <label className="form__label" htmlFor="title">Message</label>
                    <textarea className="form__textarea" type="text" placeholder="Message" id="message" />
                    {Object.keys(messageValidation).map((key) => {
                        return (
                            <small className="form__error-message">{messageValidation[key]}</small>
                        )
                    })}
                    <button onClick={submitForm} className="form__submit">submit</button>
                </form>
            </div>
        )
}

export default ContactView;