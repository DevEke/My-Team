import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import person from '../../img/icon-person.svg';
import cog from '../../img/icon-cog.svg';
import chart from '../../img/icon-chart.svg';
import kady from '../../img/avatar-kady.jpg';
import aiysha from '../../img/avatar-aiysha.jpg';
import arthur from '../../img/avatar-arthur.jpg';

class HomeView extends Component {
    render() {
        return (
            <div className="home-page__container">
                <section className="home-page__introduction">
                    <h1 className="home-introduction__title">
                        Find the best <span>talent</span>
                    </h1>
                    <p className="home-introduction__text">
                        <div className="line blue"/>
                        Finding the right people and building high 
                        performing teams can be hard. Most companies 
                        aren’t tapping into the abundance of global talent. 
                        We’re about to change that.
                    </p>
                </section>
                <section className="home-page__information">
                    <h2 className="information__title">
                        <div className="line coral"></div>
                        Build & manage distributed teams like no one else.
                    </h2>
                    <div className="information__data">
                        <div className="data-set">
                            <img className="data-set__img" src={person} alt="person icon"/>
                            <p className="data-set__title">Experienced Individuals</p>
                            <p className="data-set__text">
                                Our network is made up of highly experienced professionals 
                                who are passionate about what they do.
                            </p>
                        </div>
                        <div className="data-set">
                            <img className="data-set__img" src={cog} alt="cog icon"/>
                            <p className="data-set__title">Easy to Implement</p>
                            <p className="data-set__text">
                                Our processes have been refined over years of implementation 
                                meaning our teams always deliver.
                            </p>
                        </div>
                        <div className="data-set">
                            <img className="data-set__img" src={chart} alt="chart icon"/>
                            <p className="data-set__title">Enhanced Productivity</p>
                            <p className="data-set__text">
                                Our customized platform with in-built analytics helps 
                                you manage your distributed teams.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="home-page__testimonials">
                    <h2 className="testimonials__title">
                        Delivering real results for top companies. Some of our  
                        <span> success stories.</span>
                    </h2>
                    <div className="testimonials__data">
                        <div className="testimonial-data">
                            <p className="testimonial-data__quote">
                                "The team perfectly fit the specialized skill set required. 
                                They focused on the most essentail features helping us 
                                launch the platform eight months faster than planned."
                            </p>
                            <p className="testimonial-data__name">Kady Baker</p>
                            <p className="testimonial-data__occupation">Product Manager at Bookmark</p>
                            <img className="testimonial-data__avatar" src={kady} alt="avatar of testimony"/>
                        </div>
                        <div className="testimonial-data">
                            <p className="testimonial-data__quote">
                                "We needed to automate our entire onboarding process. The 
                                team came in and built out the whole journey. Since going live, 
                                user retention has gone through the roof!"
                            </p>
                            <p className="testimonial-data__name">Aiysha Reese</p>
                            <p className="testimonial-data__occupation">Founder of Manage</p>
                            <img className="testimonial-data__avatar" src={aiysha} alt="avatar of testimony"/>
                        </div>
                        <div className="testimonial-data">
                            <p className="testimonial-data__quote">
                                "Amazing. Our team helped us build an app that delivered a new
                                experience for hiring a physio. The launch was an instant success
                                with 100k downloads in the first month."
                            </p>
                            <p className="testimonial-data__name">Arthur Clarke</p>
                            <p className="testimonial-data__occupation">Co-founder of MyPhysio</p>
                            <img className="testimonial-data__avatar" src={arthur} alt="avatar of testimony"/>
                        </div>
                    </div>
                </section>
                <section className="home-page__contact-us">
                    <h2 className="contact__title">Ready to get started?</h2>
                    <Link to="/contact"><button className="contact__button">contact us</button></Link>
                </section>
            </div>
        )
    }
}

export default HomeView;