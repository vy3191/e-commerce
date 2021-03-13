import React from 'react'

function CreditCard() {
  return (
    <div className="credit-card">
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
    </div>   
  )
}

export default CreditCard

