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
     localStorage.setItem("cars", cars)
  }
  render() {
    const { url } = this.props.match;
    console.log('cars list>>>>>>', this.state.carsList)
    console.log('url>>>>', url)
    return (
      <div className="cards-container">
        {
          this.state.carsList.map( (car) => {
            return (
              <div key={car.id}>        
                <Car car={car} linkUrl={ `${url}/${car.id}`} />               
              </div>
              
            )
          })
        }
      </div>
    );
  }
}

export default Cars;