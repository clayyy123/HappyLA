import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Feed from './pages/feed';
import Create from './pages/create';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <Switch>
          <Route
            path="/feed"
            render={props => {
              return <Feed {...props} />;
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
