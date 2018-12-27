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
        {this.state.bars.map(bar => {
          return <Card props={bar} />;
        })}
      </div>
    );
  }
}

export default Feed;
