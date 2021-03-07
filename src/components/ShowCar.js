import React, { Component } from 'react';

class ShowCar extends Component {
  render() {
    const { id } = this.props.match.params;
    console.log('id>>>>>', id)
    return (
      <div>
        <h1>showing car now</h1>
      </div>
    );
  }
}

export default ShowCar;