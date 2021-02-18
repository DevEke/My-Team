import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav-bar.scss';
import logo from '../../img/logo.svg';

class NavBar extends Component {
    render() {
        return (
            <div className="nav-bar__container">
                <div className="nav-bar__links">
                    <img className="nav-bar__logo" src={logo} alt="logo"/>
                    <Link className="nav-bar__link" to="/"><a>home</a></Link>
                    <Link className="nav-bar__link" to="/about"><a>about</a></Link>
                </div>
                <Link to="/contact"><button className="nav-bar__contact-button">contact us</button></Link>
            </div>
        )
    }
}

export default NavBar;