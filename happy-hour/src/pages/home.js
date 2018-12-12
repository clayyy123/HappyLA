import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1 className="home__title">Binge</h1>
        <h2 className="home__slogan">Happy Hour Finder</h2>
        <input className="home__location" placeholder="Enter Location" />
        <button className="home__button">Search</button>
      </div>
    );
  }
}

export default Home;
