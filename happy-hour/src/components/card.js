import React, { Component } from 'react';
import httpClient from '../httpClient';

class Card extends Component {
  state = {
    days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    restaurant: {
      name: this.props.props.name,
      add: '',
      weekdayOnly: this.props.props.weekdayOnly,
      weekendOnly: this.props.props.weekendOnly,
      everyday: this.props.props.everyday,
      onlyHours: this.props.props.onlyHours,
      0: '',
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
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
              <h1 className="card__title">{this.props.props.name}</h1>
            </a>
            <div className="card__stats">
              <h3>STATS:</h3>
              <ul>
                <li className="card__stat">
                  <i class="fas fa-beer card__list-style" />
                  RATING: {this.ratingHandler()}
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
            {this.hourHandler()}
          </div>
          <div className="card__right">
            <a
              target="_blank"
              href={
                'http://maps.google.com/?q=' +
                this.state.location +
                'los angeles,CA'
              }
              className="card__address"
            >
              <h3>{this.state.location}</h3>
            </a>
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

  hourHandler() {
    const {
      weekendOnly,
      weekdayOnly,
      everyday,
      onlyHours
    } = this.state.restaurant;

    if (weekdayOnly || weekendOnly || everyday) {
      var timeArray = onlyHours.split('-');
      var newHours;
      if (timeArray[0] > 12) {
        timeArray[0] = timeArray[0] - 12 + 'pm';
        timeArray[1] = timeArray[1] - 12 + 'pm';
        newHours = timeArray.join('-');
        return (
          <h2 className="card__hH">
            {this.currentName()}: {newHours}
          </h2>
        );
      } else {
        return (
          <h2 className="card__hH">
            {this.currentName()}: {onlyHours}
          </h2>
        );
      }
    }
  }

  lightHandler() {
    const {
      weekendOnly,
      weekdayOnly,
      everyday,
      onlyHours
    } = this.state.restaurant;

    let hour = this.state.date.getHours();
    let minutes = this.state.date.getMinutes();
    var timeArray;

    if (weekendOnly || weekdayOnly || everyday) {
      timeArray = onlyHours.split('-');
      let start = parseInt(timeArray[0]);
      let end = parseInt(timeArray[1]);
      if (start > 12 && hour > 12) {
        start = start - 12;
        end = end - 12;
        hour = hour - 12;
        console.log(start, end, hour, minutes);
      }
      if (hour >= start && hour <= end && end !== hour && minutes <= 59) {
        console.log('yellow');
        return (
          <div className="card__light">
            <div className="card__dot card__yellow" />
          </div>
        );
      } else if (hour >= start && hour <= end && end - hour > 1) {
        console.log('green');
        return (
          <div className="card__light">
            <div className="card__dot card__green" />
          </div>
        );
      } else {
        console.log('red');
        return (
          <div className="card__light">
            <div className="card__dot card__red" />
          </div>
        );
      }
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
    if (this.state.price) {
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
}

export default Card;
