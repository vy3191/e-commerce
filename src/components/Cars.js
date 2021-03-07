import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { cars } from '../data/'

class Cars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
  }

  componentDidMount() {
     this.setState({
       cars: cars
     })
  }
  render() {
    const { url } = this.props.match;
    console.log('cars list>>>>>>', this.state.cars)
    return (
      <div>
        {
          this.state.cars.map( (car) => {
            return (
              <Link to={ `${url}/${car.id}` }>
              <Car car={car} key={car.id} />
            </Link>
            )
          })
        }
      </div>
    );
  }
}

export default Cars;