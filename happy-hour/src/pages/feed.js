import React, { Component } from 'react';
import httpClient from '../httpClient';

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
    date: new Date(),
    image: '',
    price: '',
    rating: '',
    count: '',
    location: '',
    number: ''
  };

  componentDidMount() {
    console.log('hi');
    httpClient.getInfo('Boulevard 574').then(response => {
      console.log(response);
      this.setState({
        image: response.data.data.image_url,
        price: response.data.data.price,
        rating: '4.5',
        count: response.data.data.review_count,
        location: response.data.data.location.address1,
        number: response.data.data.display_phone
      });
    });
  }

  render() {
    return (
      <div className="card">
        {this.lightHandler()}
        <div className="card__info">
          <div className="card__image-holder">
            <img
              className="card__image"
              src={this.state.image}
              alt="restaurant"
            />
          </div>
          <div className="card__left">
            <h1 className="card__title">{this.state.restaurant.name}</h1>
            <div className="card__ratingCount">
              {this.ratingHandler()}
              <span className="card__count">{this.state.count}</span> reviews
            </div>
            {this.priceHandler()}
            <h2>
              {this.currentName()}:{' '}
              {this.state.restaurant[this.currentDay()][0]}
              pm -
              {
                this.state.restaurant[this.currentDay()][
                  this.state.restaurant[this.currentDay()].length - 1
                ]
              }
              pm
            </h2>
          </div>
          <div className="card__right">
            <h3>{this.state.location}</h3>
            <h3>{this.state.number}</h3>
          </div>
        </div>
      </div>
    );
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

  ratingHandler() {
    let ratingSplit = `${this.state.rating}`.split('.');
    if (ratingSplit[0] === '3' && ratingSplit[1]) {
      return (
        <div className="card__stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half" />
        </div>
      );
    } else if (ratingSplit[0] === '3') {
      return (
        <div className="card__stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </div>
      );
    } else if (ratingSplit[0] === '4' && ratingSplit[1]) {
      return (
        <div className="card__stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half" />
        </div>
      );
    } else if (ratingSplit[0] === '4') {
      return (
        <div className="card__stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half" />
        </div>
      );
    } else if (ratingSplit[0] === '5' && ratingSplit[1]) {
      return (
        <div className="card__stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half" />
        </div>
      );
    } else if (ratingSplit[0] === '5') {
      return (
        <div className="card__stars">
          <i class="fas fa-star" />
          <i class="fas fa-star" />
          <i class="fas fa-star" />
          <i class="fas fa-star" />
          <i class="fas fa-star" />
        </div>
      );
    }
  }

  priceHandler() {
    if (this.state.price.length === 1) {
      return (
        <div className="card__price">
          <i className="fas fa-dollar-sign" />
        </div>
      );
    } else if (this.state.price.length === 2) {
      return (
        <div className="card__price">
          <i className="fas fa-dollar-sign" />
          <i className="fas fa-dollar-sign" />
        </div>
      );
    } else if (this.state.price.length === 3) {
      return (
        <div className="card__price">
          <i className="fas fa-dollar-sign" />
          <i className="fas fa-dollar-sign" />
          <i className="fas fa-dollar-sign" />
        </div>
      );
    }
  }
}

export default Feed;
