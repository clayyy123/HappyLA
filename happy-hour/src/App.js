import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Feed from './pages/feed';
import Create from './pages/create';

class App extends Component {
  state = {
    location: 'Which part of LA?',
    latitude: 0,
    longitude: 0
  };

  locationHandler(loc) {
    this.setState({
      location: loc
    });
  }

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
              return (
                <Feed
                  {...props}
                  location={this.state}
                  part={this.state.location}
                />
              );
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
              return (
                <Home
                  {...props}
                  changeLocation={this.locationHandler.bind(this)}
                  part={this.state.location}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
