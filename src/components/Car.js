import React, { Component } from 'react';

class Car extends Component {
  
  render() {
    const { car } = this.props;
    return (
      <div className="card">
        {/* <img src="img_avatar.png" alt="Avatar" style="width:100%" /> */}
        <div className=" ">
          <h1><b>{car.make}</b></h1>
          <h2>{car.model}</h2>
          <p>{car.year}</p>
          <p>{car.id}</p>
        </div>
      </div>
    );
  }
}

export default Car;