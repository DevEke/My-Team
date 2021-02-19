import React, { Component } from 'react';
import NavBar from './components/NavBar/nav-bar';
import HomeView from './components/Home/home';
import AboutView from './components/About/about';
import ContactView from './components/Contact/contact';
import Footer from './components/Footer/footer';
import MobileMenu from './components/MobileMenu/mobile-menu';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './_library.scss';
import './MediaQueries/tablet.scss';
import './MediaQueries/mobile.scss';


class MyTeamSite extends Component {

  closeModal = () => {
    document.querySelector('.mobile-menu__overlay-container').style.display = 'none';
  }

  openModal = () => {
    document.querySelector('.mobile-menu__overlay-container').style.display = 'block';
  }

  render() {
    return (
      <Router>
        {/* <MobileMenu closeModal={this.closeModal}/> */}
        <NavBar openModal={this.openModal} />
        <Route exact path="/" render={() => <HomeView />} />
        <Route path="/about" render={() => <AboutView />} />
        <Route path="/contact" render={() => <ContactView />} />
        <Footer />
      </Router>
    )
  }
}

export default MyTeamSite;