import React, { Component } from 'react';
import httpClient from '../httpClient';
import Card from '../components/card';

class Feed extends Component {
  state = {
    location: '',
    bars: []
  };

  componentDidMount() {
    // if (this.props.location.props) {
    //   localStorage.setItem('part', this.props.location.props.location);
    // }
    // const cityLocation = localStorage.getItem('part');
    httpClient.getBars(this.props.part).then(response => {
      console.log(response);
      this.setState({
        bars: response.data,
        location: this.props.part
      });
    });
  }

  cardMap = () => {
    return this.state.bars.map((bar, i) => {
      return <Card key={i} bar={bar} location={this.props.location} />;
    });
  };

  render() {
    return (
      <div className="feed">
        <h1 className="feed__title">{this.state.location}</h1>
        <div className="feed__map">
          <div className="feed__lights">
            <div className="card__dot card__green feed__light" /> = MORE THAN
            ONE HOUR LEFT!
          </div>
          <div className="feed__lights">
            <div className="card__dot card__yellow feed__light" /> = LESS THAN
            ONE HOUR LEFT!
          </div>
          <div className="feed__lights">
            <div className="card__dot card__red feed__light" /> = NO HAPPY HOUR
            RIGHT NOW!
          </div>
        </div>
        <div className="feed__bars">{this.cardMap()}</div>
      </div>
    );
  }
}

export default Feed;
