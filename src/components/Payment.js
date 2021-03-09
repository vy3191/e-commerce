import React, { Component } from 'react';

class Payment extends Component {
  render() {
    return (
      <div className="payment">
        <div className="row">
        <div className="col-75">
            <div className="container">
              <form>
                <div className="row">
                  <div className="col-50">
                    <h3>Billing Address</h3>
                    <label 
                      htmlFor="firstName">
                        <i className="fa fa-user"></i> 
                        Full Name
                    </label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      placeholder="Enter first name"
                    />
                    <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
                    <input 
                      type="text" 
                      id="email" 
                      name="email" 
                      placeholder="Enter email" 
                    />
                    <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
                    <input 
                      type="text" 
                      id="adr" 
                      name="address" 
                      placeholder="Enter address" 
                    />
                    <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
                    <input 
                      type="text" 
                      id="city" 
                      name="city" 
                      placeholder="Enter city" 
                    />
                    <div className="row">
                      <div className="col-50">
                        <label 
                          htmlFor="state"
                        >
                          State
                        </label>
                        <input 
                          type="text" 
                          id="state" 
                          name="state" 
                          placeholder="Enter state" 
                        />
                      </div>
                      <div className="col-50">
                        <label htmlFor="zip">Zip</label>
                        <input 
                          type="text" 
                          id="zip" 
                          name="zip" 
                          placeholder="Enter zip" 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-50">
                    <h3>Payment</h3>
                    <label htmlFor="firstName">Accepted Cards</label>
                    <div className="icon-container">
                      <i className="fa fa-cc-visa" style={{color:"navy"}} ></i>
                      <i className="fa fa-cc-amex" style={{color:"blue"}} ></i>
                      <i className="fa fa-cc-mastercard" style={{color:"red"}} ></i>
                      <i className="fa fa-cc-discover" style={{color:"orange"}} ></i>
                    </div>
                    <label htmlFor="cardName">Name on Card</label>
                    <input 
                      type="text" 
                      id="cardName" 
                      name="cardName" 
                      placeholder="Enter your name" 
                    />
                    <label htmlFor="cardNum">Credit card number</label>
                    <input 
                      type="text" 
                      id="cardNum" 
                      name="cardNumber" 
                      placeholder="Enter your card number" 
                    />
                    <label htmlFor="expMonth">Exp Month</label>
                    <input 
                      type="text" 
                      id="expMonth" 
                      name="expMonth" 
                      placeholder="Enter exp month" 
                    />
                    <div className="row">
                      <div className="col-50">
                        <label htmlFor="expYear">Exp Year</label>
                        <input 
                          type="text" 
                          id="expYear" 
                          name="expYear" 
                          placeholder="Enter exp year" 
                        />
                      </div>
                      <div className="col-50">
                        <label htmlFor="cvv">CVV</label>
                        <input 
                          type="text" 
                          id="cvv" 
                          name="cvv" 
                          placeholder="Enter cvv number" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <label>
                  <input 
                    type="checkbox" 
                    checked="checked" 
                    name="sameAdr"
                  />Shipping address same as billing
                </label>
                <input 
                  type="submit" 
                  value="Continue to checkout" className="btn" 
                />
              </form>
            </div>
          </div> 
        </div>        
      </div>
    );
  }
}

export default Payment;
