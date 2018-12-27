import React, { Component } from 'react';
import httpClient from '../httpClient';

class Card extends Component {
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
      6: ''
    },
    date: new Date(),
    image: '',
    price: '',
    rating: '',
    count: '',
    location: '',
    number: '',
    link: ''
  };

  componentDidMount() {
    httpClient.getInfo(this.state.restaurant.name).then(response => {
      console.log(response);
      this.setState({
        image: response.data.data.image_url,
        price: response.data.data.price,
        rating: response.data.data.rating,
        count: response.data.data.review_count,
        location: response.data.data.location.address1,
        number: response.data.data.display_phone,
        link: response.data.data.url
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
            <a
              className="card__link"
              target="_blank"
              rel="noopener noreferrer"
              href={this.state.link}
            >
              <h1 className="card__title">{this.state.restaurant.name}</h1>
            </a>
            <div className="card__stats">
              <h3>STATS:</h3>
              <ul>
                <li className="card__stat">
                  <i class="fas fa-beer card__list-style" /> RATING:{' '}
                  {this.ratingHandler()}
                </li>
                <li className="card__stat">
                  <i class="fas fa-beer card__list-style" />
                  REVIEWS:{' '}
                  <span className="card__count">{this.state.count}</span>
                </li>
                <li className="card__stat">
                  <i class="fas fa-beer card__list-style" />
                  PRICE: {this.priceHandler()}
                </li>
              </ul>
            </div>
            <h2 className="card__hH">
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
            <div className="card__dot card__yellow" />
          </div>
        );
      } else if (end - hour > 1) {
        return (
          <div className="card__light">
            <div className="card__dot card__green" />
          </div>
        );
      }
    } else {
      return (
        <div className="card__light">
          <div className="card__dot card__red" />
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
          <i class="fas fa-star-half-alt" />
          <i class="far fa-star" />
        </div>
      );
    } else if (ratingSplit[0] === '3') {
      return (
        <div className="card__stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i class="far fa-star" />
          <i class="far fa-star" />
        </div>
      );
    } else if (ratingSplit[0] === '4' && ratingSplit[1]) {
      return (
        <div className="card__stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i class="fas fa-star-half-alt" />
        </div>
      );
    } else if (ratingSplit[0] === '4') {
      return (
        <div className="card__stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i class="far fa-star" />
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

export default Card;
