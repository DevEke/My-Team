import React, { Component } from 'react';
import NavBar from './components/NavBar/nav-bar';
import HomeView from './components/Home/home';
import AboutView from './components/About/about';
import ContactView from './components/Contact/contact';
import Footer from './components/Footer/footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './_library.scss';

class MyTeamSite extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Route exact path="/" render={() => <HomeView />} />
        <Route path="/about" render={() => <AboutView />} />
        <Route path="/contact" render={() => <ContactView />} />
        <Footer />
      </Router>
    )
  }
}

export default MyTeamSite;