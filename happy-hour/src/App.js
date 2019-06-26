import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Feed from './pages/feed';
import Create from './pages/create';

class App extends Component {
  state = {
    latitude: 0,
    longitude: 0
  };

  success = position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    this.setState({
      latitude,
      longitude
    });
  };

  error = () => {
    console.log('Unable to retrieve your location');
  };

  componentDidMount() {
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
    } else {
      console.log('location supported');
      navigator.geolocation.getCurrentPosition(this.success, this.error);
    }
  }

  render() {
    return (
      <div className="container">
        <Switch>
          <Route
            path="/feed"
            render={props => {
              return <Feed {...props} location={this.state} />;
            }}
          />

          <Route
            path="/create"
            render={props => {
              return <Create {...props} />;
            }}
          />

          <Route
            path="/"
            render={props => {
              return <Home {...props} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
