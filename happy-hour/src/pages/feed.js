import React, { Component } from 'react';
import httpClient from '../httpClient.js';

class Feed extends Component {
  state = {
    days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    restaurant: {
      name: 'Boulevard 574',
      add: '574 N. DIAMOND BAR BLVD.',
      0: '',
      1: [4, 5, 6, 7],
      2: [7, 8, 9, 10],
      3: [4, 5, 6, 7],
      4: [4, 5, 6, 7],
      5: [4, 5, 6, 7],
      6: '',
      everyday: [true, [4, 5, 6, 7]],
      food: true,
      alk: true
    },
    date: new Date()
  };

  componentDidMount() {
    httpClient.getInfo('Boulevard 574').then(response => {
      console.log(response);
    });
  }

  currentDay() {
    return this.state.date.getDay();
  }

  currentName() {
    return this.state.days[this.currentDay()];
  }

  lightHandler() {
    let hour = this.state.date.getHours();
    let end = this.state.restaurant[this.currentDay()][
      this.state.restaurant[this.currentDay()].length - 1
    ];
    console.log(this.state.restaurant[this.currentDay()].indexOf(hour));
    if (hour > 12) {
      hour = hour - 12;
      console.log('what');
    }
    if (this.state.restaurant[this.currentDay()].indexOf(hour) !== -1) {
      if (end - hour <= 1) {
        return (
          <div className="card__light">
            <div className="card__dot" />
            <div className="card__dot card__yellow" />
            <div className="card__dot" />
          </div>
        );
      } else if (end - hour > 1) {
        return (
          <div className="card__light">
            <div className="card__dot" />
            <div className="card__dot" />
            <div className="card__dot card__green" />
          </div>
        );
      }
    } else {
      return (
        <div className="card__light">
          <div className="card__dot card__red" />
          <div className="card__dot" />
          <div className="card__dot" />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="card">
        <div className="card__info">
          <h1 className="card__title">{this.state.restaurant.name}</h1>
          <h2>
            Today: {this.state.restaurant[this.currentDay()][0]}pm -
            {
              this.state.restaurant[this.currentDay()][
                this.state.restaurant[this.currentDay()].length - 1
              ]
            }
            pm
          </h2>
        </div>
        {this.lightHandler()}
      </div>
    );
  }
}

export default Feed;
