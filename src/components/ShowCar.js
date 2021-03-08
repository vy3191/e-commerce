import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Feature from './Feature';
import PurchasedItem from './PurchasedItem';
import { additionalFeatures } from '../data'
import MovingCar from '../styles/images/moving-car.gif'
class ShowCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [],
      addedFeatures: []
    }
    this.addFeatures = this.addFeatures.bind(this);
    this.removeFeature = this.removeFeature.bind(this);
  }

  addFeatures(feature) {
    this.setState({
      addedFeatures: [...this.state.addedFeatures, feature]
    })
  }

  removeFeature(item) {
    const filteredFeatures = this.state.addedFeatures.filter( feature => feature.id !== item.id)
    console.log('filtered feature items>>>>>>>>', item)
    this.setState( {
      addedFeatures: [ ...filteredFeatures ]
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
    const storedCars = JSON.parse(localStorage.getItem("cars")) || [];
    const car = storedCars.length > 0 && storedCars.filter( car => +(car.id) === +(id))[0];
    const { addedFeatures } = this.state;
    console.table({ addedFeatures })
    return (
      <div className="container-flex">
        <div className="additional-feature">
          <h2>Customize Details</h2>
          {
            this.state.features.map((item) => {
              return(
                <Feature 
                  key={item.id} 
                  feature={item} 
                  add={ this.addFeatures }
                />
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
             addedFeatures.length > 0 ? 
             (
               <div>
                 {addedFeatures.map( item => (
                   <PurchasedItem 
                    item={ item } 
                    key={item.id} 
                    remove={ this.removeFeature }
                  />
                 ))}
               </div>
             ) :
             (
               <p>You can purchase items from in the in-house store.</p>
             )
           }       

          </div>      
        </div>
      </div>
    );
  }
}

export default ShowCar;