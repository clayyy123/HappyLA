import React, { Component } from 'react';

class Home extends Component {
  state = {
    menu: ['downtown', 'central', 'west'],
    toggle: false
  };

  menu() {
    if (this.state.toggle) {
      return (
        <ul className="dropdown">
          <li onClick={this.listHandler.bind(this)} className="dropdown__item">
            downtown
          </li>
          <li className="dropdown__item">central</li>
          <li className="dropdown__item">west</li>
        </ul>
      );
    }
  }

  menuHandler() {
    if (!this.state.toggle) {
      this.setState({
        toggle: true
      });
    } else if (this.state.toggle) {
      this.setState({
        toggle: false
      });
    }
  }

  listHandler(e) {
    console.log(e.target.innerText);
  }

  render() {
    return (
      <div className="home">
        <h1 className="home__title">
          BINGE<span className="home__title2">L.A.</span>
        </h1>
        <h2 className="home__slogan">find your next spot</h2>
        <div className="home__search">
          <div className="home__menu">
            <div className="home__location">
              Which part of LA?
              <span onClick={this.menuHandler.bind(this)}>icon</span>
            </div>
            {this.menu()}
          </div>
          <button className="home__button">Start Binging!</button>
        </div>
      </div>
    );
  }
}

export default Home;
