import React, { Component } from 'react';
import httpClient from '../httpClient';

class Create extends Component {
  state = {
    fields: {
      name: '',
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
    console.log(evt.target.name);
    console.log(evt.target.value);
  }

  onSubmit() {
    httpClient.submitInfo(this.state.fields).then(response => {
      console.log(response);
      this.setState({
        fields: {
          name: '',
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
      <form onChange={this.onInputChange.bind(this)}>
        <input name="name" placeholder="name" value={name} />
        <input name="0" placeholder="sunday" value={this.state.fields[0]} />
        <input name="1" placeholder="monday" value={this.state.fields[1]} />
        <input name="2" placeholder="tue" value={this.state.fields[2]} />
        <input name="3" placeholder="wed" value={this.state.fields[3]} />
        <input name="4" placeholder="thur" value={this.state.fields[4]} />
        <input name="5" placeholder="fri" value={this.state.fields[5]} />
        <input name="6" placeholder="sat" value={this.state.fields[6]} />
        <button onClick={this.onSubmit.bind(this)}>submit</button>
      </form>
    );
  }
}

export default Create;
