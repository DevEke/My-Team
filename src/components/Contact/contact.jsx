import React, { Component } from 'react';
import person from '../../img/icon-person.svg';
import cog from '../../img/icon-cog.svg';
import chart from '../../img/icon-chart.svg';
import './contact.scss';

class ContactView extends Component {
    render() {
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
                    <label className="form__label" htmlFor="email">Email Address</label>
                    <input className="form__input" type="text" placeholder="Email Address" id="email" />
                    <label className="form__label" htmlFor="company">Company Name</label>
                    <input className="form__input" type="text" placeholder="Company Name" id="company" />
                    <label className="form__label" htmlFor="title">Title</label>
                    <input className="form__input" type="text" placeholder="Title" id="title" />
                    <label className="form__label" htmlFor="title">Message</label>
                    <textarea className="form__textarea" type="text" placeholder="Message" id="title" />
                    <button className="form__submit">submit</button>
                </form>
            </div>
        )
    }
}

export default ContactView;