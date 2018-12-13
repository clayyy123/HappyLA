import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      // <div className="home-wrapper">
      <div className="home">
        <h1 className="home__title">BINGE</h1>
        <h2 className="home__slogan">FIND YOUR NEXT BAR</h2>
        <div className="home__search">
          <input className="home__location" placeholder="Enter Location" />
          <button className="home__button">Start Binging!</button>
        </div>
      </div>
      // </div>
    );
  }
}

export default Home;
