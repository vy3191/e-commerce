import React, { Component } from 'react';
import Address from './Address';
import CreditCard from './CreditCard';
import './Payment.css';

class Payment extends Component {
  render() {
    return (     
      <form className="payment">
        <Address />
        <CreditCard />
      </form>
    )
  }
}

export default Payment;
