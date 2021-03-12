import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import checkout from '../styles/images/checkout.png'

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state ={
      cartItems: 0
    }
  }

  componentDidMount() {
    const purchasedItems = JSON.parse(localStorage.getItem('purchased-cars')) || []
    this.setState({
      cartItems: purchasedItems.length
    })
  }
  
  render() {
    return (
      <div className="container-fluid checkout">
        <ul class="nav navbar-nav">
        <li>
          <Link to="/cars">Buy Cars</Link>
          </li>
        <li>
          <Link to="/additional-features">Additional Features</Link>
        </li>
        </ul>
        <div className="text-right my-5">
          <Link 
            to="/proceed-to-payment">
            <img src={ checkout } alt="checkout" height={42} width={42} />
            <span class="cart-items">{this.state.cartItems}</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Checkout;