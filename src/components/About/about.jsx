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
import twitter from '../../img/icon-twitter.svg';
import linkedin from '../../img/icon-linkedin.svg';
import './about.scss';

class AboutView extends Component {

    toggleNikita = () => {
        document.getElementById('nikita').classList.toggle('hide');
        document.getElementById('nikita-button').classList.toggle('on');
    }
    toggleCristian = () => {
        document.getElementById('cristian').classList.toggle('hide');
        document.getElementById('cristian-button').classList.toggle('on');
    }
    toggleCruz = () => {
        document.getElementById('cruz').classList.toggle('hide');
        document.getElementById('cruz-button').classList.toggle('on');
    }
    toggleDrake = () => {
        document.getElementById('drake').classList.toggle('hide');
        document.getElementById('drake-button').classList.toggle('on');
    }
    toggleGriffin = () => {
        document.getElementById('griffin').classList.toggle('hide');
        document.getElementById('griffin-button').classList.toggle('on');
    }
    toggleAden = () => {
        document.getElementById('aden').classList.toggle('hide');
        document.getElementById('aden-button').classList.toggle('on');
    }

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
                            <div className="directors__item-container">
                                <div id="nikita" className="directors__item-clipper">
                                    <div className="directors__item-1">
                                        <img className="directors__avatar" src={nikita} alt="avatar"/>
                                        <p className="directors__name">Nikita Marks</p>
                                        <p className="directors__job">Founder & CEO</p>
                                    </div>
                                    <div className="directors__item-2">
                                        <p className="directors__name">Nikita Marks</p>
                                        <p className="directors__quote">
                                            "Distributed teams required unique processes. 
                                            You need to approach work in a new way."
                                        </p>
                                        <div className="directors__social-icons">
                                            <img className="directors__social-icon" src={twitter} alt="twitter" />
                                            <img className="directors__social-icon" src={linkedin} alt="linkedin"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button onClick={this.toggleNikita} id="nikita-button" className="directors__button"></button>
                        </div>
                        <div className="directors__grid-item">
                            <div className="directors__item-container">
                                <div id="cristian" className="directors__item-clipper">
                                    <div className="directors__item-1">
                                        <img className="directors__avatar" src={cristian} alt="avatar"/>
                                        <p className="directors__name">Cristian Duncan</p>
                                        <p className="directors__job">Co-founder & COO</p>
                                    </div>
                                    <div className="directors__item-2">
                                        <p className="directors__name">Cristian Duncan</p>
                                        <p className="directors__quote">
                                            “Technology is at the forefront of enabling distributed teams. 
                                            That's where we come in.”
                                        </p>
                                        <div className="directors__social-icons">
                                            <img className="directors__social-icon" src={twitter} alt="twitter" />
                                            <img className="directors__social-icon" src={linkedin} alt="linkedin"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button onClick={this.toggleCristian} id="cristian-button" className="directors__button"></button>
                        </div>
                        <div className="directors__grid-item">
                            <div className="directors__item-container">
                                <div id="cruz" className="directors__item-clipper">
                                    <div className="directors__item-1">
                                        <img className="directors__avatar" src={cruz} alt="avatar"/>
                                        <p className="directors__name">Cruz Hamer</p>
                                        <p className="directors__job">Co-founder & CTO</p>
                                    </div>
                                    <div className="directors__item-2">
                                        <p className="directors__name">Cruz Hamer</p>
                                        <p className="directors__quote">
                                            “Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”
                                        </p>
                                        <div className="directors__social-icons">
                                            <img className="directors__social-icon" src={twitter} alt="twitter" />
                                            <img className="directors__social-icon" src={linkedin} alt="linkedin"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button onClick={this.toggleCruz} id="cruz-button" className="directors__button"></button>
                        </div>
                        <div className="directors__grid-item">
                            <div className="directors__item-container">
                                <div id="drake" className="directors__item-clipper">
                                    <div className="directors__item-1">
                                        <img className="directors__avatar" src={drake} alt="avatar"/>
                                        <p className="directors__name">Drake Heaton</p>
                                        <p className="directors__job">Business Development Lead</p>
                                    </div>
                                    <div className="directors__item-2">
                                        <p className="directors__name">Drake Heaton</p>
                                        <p className="directors__quote">
                                            “Unique perspectives shape unique products, which is what you need to survive these days.”
                                        </p>
                                        <div className="directors__social-icons">
                                            <img className="directors__social-icon" src={twitter} alt="twitter" />
                                            <img className="directors__social-icon" src={linkedin} alt="linkedin"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button onClick={this.toggleDrake} id="drake-button" className="directors__button"></button>
                        </div>
                        <div className="directors__grid-item">
                            <div className="directors__item-container">
                                <div id="griffin" className="directors__item-clipper">
                                    <div className="directors__item-1">
                                        <img className="directors__avatar" src={griffin} alt="avatar"/>
                                        <p className="directors__name">Griffin Wise</p>
                                        <p className="directors__job">Lead Marketing</p>
                                    </div>
                                    <div className="directors__item-2">
                                        <p className="directors__name">Griffin Wise</p>
                                        <p className="directors__quote">
                                            “Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”
                                        </p>
                                        <div className="directors__social-icons">
                                            <img className="directors__social-icon" src={twitter} alt="twitter" />
                                            <img className="directors__social-icon" src={linkedin} alt="linkedin"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button onClick={this.toggleGriffin} id="griffin-button" className="directors__button"></button>
                        </div>
                        <div className="directors__grid-item">
                            <div className="directors__item-container">
                                <div id="aden" className="directors__item-clipper">
                                    <div className="directors__item-1">
                                        <img className="directors__avatar" src={cruz} alt="avatar"/>
                                        <p className="directors__name">Aden Allen</p>
                                        <p className="directors__job">Head of Talent</p>
                                    </div>
                                    <div className="directors__item-2">
                                        <p className="directors__name">Aden Allen</p>
                                        <p className="directors__quote">
                                            “Empowered teams create truly amazing products. 
                                            Set the north star and let them follow it.”
                                        </p>
                                        <div className="directors__social-icons">
                                            <img className="directors__social-icon" src={twitter} alt="twitter" />
                                            <img className="directors__social-icon" src={linkedin} alt="linkedin"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button onClick={this.toggleAden} id="aden-button" className="directors__button"></button>
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