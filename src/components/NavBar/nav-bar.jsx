import React, { Component } from 'react';
import './nav-bar.scss';
import logo from '../../img/logo.svg';

class NavBar extends Component {
    render() {
        return (
            <div className="nav-bar__container">
                <div className="nav-bar__links">
                    <img className="nav-bar__logo" src={logo} alt="logo"/>
                    <a className="nav-bar__link">home</a>
                    <a className="nav-bar__link">about</a>
                </div>
                <button className="nav-bar__contact-button">contact us</button>
            </div>
        )
    }
}

export default NavBar;