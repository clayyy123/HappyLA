import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  state = {
    // location: 'which part of LA?',
    icon: <i className="fas fa-caret-down fa-lg" />,
    toggle: false
  };

  menu() {
    if (this.state.toggle) {
      return (
        <ul className="dropdown">
          <li onClick={this.listHandler.bind(this)} className="dropdown__item">
            downtown
          </li>
          <li onClick={this.listHandler.bind(this)} className="dropdown__item">
            central
          </li>
          <li onClick={this.listHandler.bind(this)} className="dropdown__item">
            west
          </li>
        </ul>
      );
    }
  }

  menuHandler() {
    if (!this.state.toggle) {
      this.setState({
        toggle: true,
        icon: <i class="fas fa-caret-up fa-lg" />
      });
    } else if (this.state.toggle) {
      this.setState({
        toggle: false,
        icon: <i className="fas fa-caret-down fa-lg" />
      });
    }
  }

  listHandler(e) {
    console.log(e.target.innerText);
    this.props.changeLocation(e.target.innerText);
    this.setState({
      toggle: false,
      icon: <i className="fas fa-caret-down fa-lg" />
    });
  }

  render() {
    const toNew = {
      pathname: '/feed',
      props: this.state
    };
    return (
      <div className="home">
        <h1 className="home__title">
          happy<span className="home__title2">L.A.</span>
        </h1>
        <h2 className="home__slogan">find your next spot</h2>
        <div className="home__search">
          <div className="home__menu">
            <div className="home__location">
              {this.props.part}
              <span
                className="home__icon"
                onClick={this.menuHandler.bind(this)}
              >
                {this.state.icon}
              </span>
            </div>
            {this.menu()}
          </div>
          <button className="home__button">
            <Link className="home__link" to="/feed">
              Start Binging!
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
