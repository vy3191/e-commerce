import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import checkout from '../styles/images/checkout.png'

class Checkout extends Component {
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
        <li>
          <Link to="/additional-features">
            <img src={ checkout } alt="checkout" height={40} width={40} />
          </Link>
        </li>
        </ul>
      </div>
    );
  }
}

export default Checkout;