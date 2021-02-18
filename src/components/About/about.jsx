import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import verge from '../../img/logo-the-verge.png';
import jakarta from '../../img/logo-jakarta-post.png';
import guardian from '../../img/logo-the-guardian.png';
import techradar from '../../img/logo-tech-radar.png';
import gadgets from '../../img/logo-gadgets-now.png';
import nikita from '../../img/avatar-nikita.jpg';
import cristian from '../../img/avatar-christian.jpg';
import cruz from '../../img/avatar-cruz.jpg';
import drake from '../../img/avatar-drake.jpg';
import griffin from '../../img/avatar-griffin.jpg';
import aden from '../../img/avatar-aden.jpg';
import './about.scss';

class AboutView extends Component {
    render() {
        return (
            <div className="about-page__container">
                <section className="about-page__introduction">
                    <h1 className="introduction__title">About</h1>
                    <p className="introduction__text">
                        <div className="line coral"></div>
                        We help companies build dynamic teams made up of top global talent. 
                        Using our network of passionate professionals we drive innovation 
                        and deliver incredible outcomes. Talented, diverse teams shape the 
                        best products and experiences. We’ll bring those teams to you.
                    </p>
                </section>
                <section className="about-page__directors">
                    <h2 className="directors__title">Meet the directors</h2>
                    <div className="directors__grid">
                        <div className="directors__grid-item">
                            <img className="directors__avatar" src={nikita} alt="nikitas avatar"/>
                            <p className="directors__name">Nikita Marks</p>
                            <p className="directors__position">Founder & CEO</p>
                            <button className="directors__switch"></button>
                        </div>
                        <div className="directors__grid-item">
                            <img className="directors__avatar" src={cristian} alt="cristians avatar"/>
                            <p className="directors__name">Cristian Duncan</p>
                            <p className="directors__position">Co-founder & COO</p>
                            <button className="directors__switch"></button>
                        </div>
                        <div className="directors__grid-item">
                            <img className="directors__avatar" src={cruz} alt="cruzs avatar"/>
                            <p className="directors__name">Cruz Hamer</p>
                            <p className="directors__position">Co-founder & CTO</p>
                            <button className="directors__switch"></button>
                        </div>
                        <div className="directors__grid-item">
                            <img className="directors__avatar" src={drake} alt="drakes avatar"/>
                            <p className="directors__name">Drake Heaton</p>
                            <p className="directors__position">Business Development Lead</p>
                            <button className="directors__switch"></button>
                        </div>
                        <div className="directors__grid-item">
                            <img className="directors__avatar" src={griffin} alt="griffins avatar"/>
                            <p className="directors__name">Griffin Wise</p>
                            <p className="directors__position">Lead Marketing</p>
                            <button className="directors__switch"></button>
                        </div>
                        <div className="directors__grid-item">
                            <img className="directors__avatar" src={aden} alt="nikitas avatar"/>
                            <p className="directors__name">Aden Allen</p>
                            <p className="directors__position">Head of Talent</p>
                            <button className="directors__switch"></button>
                        </div>
                    </div>
                </section>
                <section className="about-page__clients">
                    <h2 className="clients__title">Some of our clients</h2>
                    <div className="clients__logos">
                        <img className="clients__logo" src={verge} alt="verge logo" />
                        <img className="clients__logo" src={jakarta} alt="jakarta logo" />
                        <img className="clients__logo" src={guardian} alt="guardian logo" />
                        <img className="clients__logo" src={techradar} alt="tech radar logo" />
                        <img className="clients__logo" src={gadgets} alt="gadgets now logo" />
                    </div>
                </section>
                <section className="about-page__contact-us">
                    <h2 className="contact__title">Ready to get started?</h2>
                    <Link to="/contact"><button className="contact__button">contact us</button></Link>
                </section>
            </div>
        )
    }
}

export default AboutView;