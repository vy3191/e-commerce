import React, { Component } from 'react';
import MovingCar from '../styles/images/moving-car.gif'
class ShowCar extends Component {
  render() {
    const { id } = this.props.match.params;
    console.log('id>>>>>', id)
    const storedCars = JSON.parse(localStorage.getItem("cars")) || [];
    console.log('stored cars>>>>>>', storedCars)
    const car = storedCars.length > 0 && storedCars.filter( car => +(car.id) === +(id))[0];
    console.log('stored car>>xxxx>>>', car)
    console.log('car>>>', car)
    return (
      <div className="container show-car">
        <p>You have chose the following car to purchase. You can add an additional features to it.</p>
        <h1>{car.make} details</h1>
        <img src={ MovingCar } alt="moving-car" width="auto" height="300" />
      </div>
    );
  }
}

export default ShowCar;