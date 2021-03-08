import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { additionalFeatures } from '../data'
import Feature from './Feature';
import MovingCar from '../styles/images/moving-car.gif'
class ShowCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [],
      addedFeatures: []
    }
  }

  handleFeatures(feature) {
    this.setState({
      additionalFeatures: [...this.state.addedFeatures, feature]
    })
  }

  componentDidMount() {
    this.setState({
      features: additionalFeatures
    })
    localStorage.setItem('features', JSON.stringify(additionalFeatures))
  }
  render() {
    const { id } = this.props.match.params;
    console.log('id>>>>>', id)
    const storedCars = JSON.parse(localStorage.getItem("cars")) || [];
    console.log('stored cars>>>>>>', storedCars)
    const car = storedCars.length > 0 && storedCars.filter( car => +(car.id) === +(id))[0];
    console.log('stored car>>xxxx>>>', car)
    console.log('car>>>', car)
    return (
      <div className="container-flex">
        <div className="additional-feature">
          <h2>Customize Details</h2>
          {
            this.state.features.map((item) => {
              return(
                <Feature feature={item} key={item.id} />
              )
            })
          }
        </div>      
        <div className="container show-car">
          <div className="basic-feature">
            <p>
              <Link to="/cars">
                <button 
                  className="btn btn-info"
                >
                Previous page
                </button>
              </Link>
            </p>
            <h1>{car.make} details</h1>
            <img src={ MovingCar } alt="moving-car" width="auto" height="250" />
            <div className="basic-details">
              <p>Model: {car.model}</p>
              <p>Year: {car.year}</p>
              <p>Base price: {car.price}</p>
            </div>
          </div> 
          <div className="purchased-features">
            {
              this.state.addedFeatures.length ===0 ? 
              <p>Please purchase items form in house store.</p> :
              null               
            }

          </div>      
        </div>
      </div>
    );
  }
}

export default ShowCar;