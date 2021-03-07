import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { cars } from '../data/'
import Car from './Car';

class Cars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carsList: []
    }
  }

  componentDidMount() {
     this.setState({
      carsList: cars
     })
  }
  render() {
    const { url } = this.props.match;
    console.log('cars list>>>>>>', this.state.cars)
    console.log('url>>>>', url)
    return (
      <div className="cards-container">
        {
          this.state.carsList.map( (car) => {
            return (
              <div key={car.id}>
                <Link to={ `${url}/${car.id}` }>
                  <Car car={car}  />
                </Link>
              </div>
              
            )
          })
        }
      </div>
    );
  }
}

export default Cars;