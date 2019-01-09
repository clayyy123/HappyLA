import React, { Component } from 'react';
import httpClient from '../httpClient';
import Card from '../components/card';

class Feed extends Component {
  state = {
    bars: []
  };

  componentDidMount() {
    httpClient.getBars().then(response => {
      this.setState({
        bars: response.data
      });
    });
  }

  render() {
    return (
      <div className="feed">
        <h1 className="feed__title">HAPPY HOUR FEED</h1>
        <div className="feed__map">
          <div className="card__dot card__green feed__light" /> = MORE THAN ONE
          HOUR LEFT!
          <div className="card__dot card__yellow feed__light" /> = LESS THAN ONE
          HOUR LEFT!
          <div className="card__dot card__red feed__light" /> = NO HAPPY HOUR
          RIGHT NOW!
        </div>
        <div className="feed__bars">
          {this.state.bars.map(bar => {
            return <Card props={bar} />;
          })}
        </div>
      </div>
    );
  }
}

export default Feed;
