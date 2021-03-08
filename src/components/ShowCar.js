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
      addedFeatures: {},
      total: 0
    }
    this.addFeatures = this.addFeatures.bind(this);
    this.removeFeature = this.removeFeature.bind(this);
  }

  addFeatures(feature) {
    const { addedFeatures, total } = this.state;
    let updatedTotal = total;
    if ( !addedFeatures[feature.id]) {
      addedFeatures[feature.id] = feature
      updatedTotal += Number(feature.price)
    }
  
    this.setState({
      addedFeatures,
      total: updatedTotal
    })
  }

  removeFeature(item) {
    const filteredFeatures = this.state.addedFeatures.filter( feature => feature.id !== item.id)
    console.log('filtered feature items>>>>>>>>', item)
    this.setState( {
      addedFeatures: [ ...filteredFeatures ],
      total: this.state.total - Number(item.price)
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
    const { addedFeatures, total } = this.state;
    console.table({ state: this.state })
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
                  addPrice={ this.addPrice }
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
              <p className="total-price">Total Price: ${ car.price + total }</p>
            </div>
          </div> 
          <div className="purchased-features">
           {
             Object.keys(addedFeatures).length > 0 ? 
             (
               <div>
                 {Object.values(addedFeatures).map( item => (
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