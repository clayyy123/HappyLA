import React, { Component } from 'react';

class Feed extends Component {
  state = {
    restaurant: {
      name: 'Boulevard574',
      add: '574 N. DIAMOND BAR BLVD.',
      mon: '4-7',
      tue: '4-7',
      wed: '4-7',
      thursday: '4-7',
      friday: '4-7',
      everyday: [true, '4-7'],
      food: true,
      alk: true
    }
  };
  render() {
    return (
      <div className="card">
        <h1 className="card__title">{this.state.restaurant.name}</h1>
      </div>
    );
  }
}

export default Feed;
