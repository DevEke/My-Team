import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import close from '../../img/icon-close.svg';
import './mobile-menu.scss'

class MobileMenu extends Component {
    render() {
        return (
            <div className="mobile-menu__overlay-container">
                <div className="mobile-menu__overlay">
                    <div className="mobile-menu__modal">
                        <img className="mobile-menu__close-button" src={close} alt="close icon"/>
                        <Link className="mobile-menu__link" to="/"><a>home</a></Link>
                        <Link className="mobile-menu__link" to="/about"><a>about</a></Link>
                        <Link to="/contact"><button className="mobile-menu__button">contact us</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default MobileMenu;