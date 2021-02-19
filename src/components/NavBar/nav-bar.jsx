import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav-bar.scss';
import menu from '../../img/icon-hamburger.svg';
import logo from '../../img/logo.svg';

class NavBar extends Component {

    render() {

        const { openModal } = this.props;

        return (
            <div className="nav-bar__container">
                <div className="nav-bar__links">
                    <img className="nav-bar__logo" src={logo} alt="logo"/>
                    <Link className="nav-bar__link" to="/">home</Link>
                    <Link className="nav-bar__link" to="/about">about</Link>
                </div>
                <img onClick={openModal} className="nav-bar__hamburger-menu" src={menu} alt="hamburger menu"/>
                <Link className="hide-mobile" to="/contact"><button className="nav-bar__contact-button">contact us</button></Link>
            </div>
        )
    }
}

export default NavBar;