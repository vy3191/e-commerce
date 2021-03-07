import React, { Component } from 'react';

class Car extends Component {
  
  render() {
    const { car } = this.props;
    return (
      <div className="card">
        {/* <img src="img_avatar.png" alt="Avatar" style="width:100%" /> */}
        <div className=" ">
          <p>Serial Number: {car.id}</p>
          <h3>Car Make: <b>{car.make}</b></h3>
          <h5>Car Model: {car.model}</h5>
          <h5>Year: {car.year}</h5>
        </div>
      </div>
    );
  }
}

export default Car;