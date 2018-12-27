import React, { Component } from 'react';
import httpClient from '../httpClient';

class Create extends Component {
  state = {
    fields: {
      name: '',
      weekdayOnly: '',
      weekendOnly: '',
      everyday: '',
      onlyHours: '',
      0: '',
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: ''
    }
  };

  onInputChange(evt) {
    this.setState({
      fields: {
        ...this.state.fields,
        [evt.target.name]: evt.target.value
      }
    });
  }

  onSubmit(evt) {
    evt.preventDefault();
    httpClient.submitInfo(this.state.fields).then(response => {
      console.log(response);
      this.setState({
        fields: {
          name: '',
          weekdayOnly: '',
          weekendOnly: '',
          everyday: '',
          onlyHours: '',
          0: '',
          1: '',
          2: '',
          3: '',
          4: '',
          5: '',
          6: ''
        }
      });
    });
  }

  render() {
    const { name } = this.state.fields;
    return (
      <form
        onChange={this.onInputChange.bind(this)}
        onSubmit={this.onSubmit.bind(this)}
      >
        <input name="name" placeholder="name" value={name} />
        <input
          type="text"
          name="weekdayOnly"
          placeholder="weekday only?"
          value={this.state.fields.weekdayOnly}
        />
        <input
          type="text"
          name="weekendOnly"
          placeholder="weekend only?"
          value={this.state.fields.weekendOnly}
        />
        <input
          type="text"
          name="everyday"
          placeholder="everyday?"
          value={this.state.fields.everyday}
        />
        <input
          type="text"
          name="onlyHours"
          placeholder="only hours?"
          value={this.state.fields.onlyHours}
        />
        <input
          type="text"
          name="0"
          placeholder="sunday"
          value={this.state.fields[0]}
        />
        <input
          type="text"
          name="1"
          placeholder="monday"
          value={this.state.fields[1]}
        />
        <input
          type="text"
          name="2"
          placeholder="tue"
          value={this.state.fields[2]}
        />
        <input
          type="text"
          name="3"
          placeholder="wed"
          value={this.state.fields[3]}
        />
        <input
          type="text"
          name="4"
          placeholder="thur"
          value={this.state.fields[4]}
        />
        <input
          type="text"
          name="5"
          placeholder="fri"
          value={this.state.fields[5]}
        />
        <input
          type="text"
          name="6"
          placeholder="sat"
          value={this.state.fields[6]}
        />
        <button>submit</button>
      </form>
    );
  }
}

export default Create;
