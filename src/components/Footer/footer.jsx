import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';
import logo from '../../img/logo.svg';
import facebook from '../../img/icon-facebook.svg';
import pinterest from '../../img/icon-pinterest.svg';
import twitter from '../../img/icon-twitter.svg';

class Footer extends Component {
    render() {
        return (
            <div className="footer__container">
                <div className="footer__links-logo">
                    <img className="footer__logo" src={logo} alt="logo"/>
                    <div className="footer__links">
                        <Link className="footer__link" to="/"><a>home</a></Link>
                        <Link className="footer__link" to="/about"><a>about</a></Link>
                    </div>
                </div>
                <p className="footer__address">
                    987 Hillcrest Lane<br/>
                    Irvine, CA<br/>
                    California 92714<br/>
                    Call Us: 949-833-7432
                </p>
                <div className="footer__copyright-social">
                    <div className="footer__social-icons">
                        <img className="footer__social-icon" src={facebook} alt="facebook icon"/>
                        <img className="footer__social-icon" src={pinterest} alt="pinterest icon"/>
                        <img className="footer__social-icon" src={twitter} alt="twitter icon"/>
                    </div>
                    <p className="footer__copyright">Copyright 2020. All Rights Reserved</p>
                </div>
            </div>
        )
    }
}

export default Footer;