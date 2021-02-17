import React, { Component } from 'react';
import NavBar from './components/NavBar/nav-bar';
import './_library.scss';

class MyTeamSite extends Component {
  render() {
    return (
      <div class="app-container">
        <NavBar />
      </div>
    )
  }
}

export default MyTeamSite;