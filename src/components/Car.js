import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from '../styles/images/car-image.png';

class Car extends Component {
  
  render() {
    const { car, linkUrl } = this.props;
    console.log('propssss>>>>', this.props)
    return (
      <div className="card">
        {/* <img src="img_avatar.png" alt="Avatar" style="width:100%" /> */}
        <div className=" ">
          <p>Serial Number: {car.id}</p>
          <h3>Car Make: <b>{car.make}</b></h3>
          <h5>Car Model: {car.model}</h5>
          <h5>Car Price: {car.price}</h5>
          <h5>Year: {car.year}</h5>
          <img src={image} alt="car" width="120" height="80" />
          <div className="car-card">
            <Link to={linkUrl}>
              <button>Buy Now !!!</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Car;