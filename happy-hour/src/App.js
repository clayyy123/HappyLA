import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <Switch>
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
