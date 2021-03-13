import React from 'react'

function CreditCard() {
  return (
    <div className="credit-card">
      <h3>Payment</h3>
      <label htmlFor="firstName">Accepted Cards</label>
      <div className="icon-container">
        <i className="fa fa-cc-visa" style={{color:"navy", marginRight: '5px'}} ></i>
        <i className="fa fa-cc-amex" style={{color:"blue", marginRight: '5px'}} ></i>
        <i className="fa fa-cc-mastercard" style={{color:"red", marginRight: '5px'}} ></i>
        <i className="fa fa-cc-discover" style={{color:"orange", marginRight: '5px'}} ></i>
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
      <label htmlFor="expYear">Exp Year</label>
      <input 
        type="text" 
        id="expYear" 
        name="expYear" 
        placeholder="Enter exp year" 
      />
  
      <label htmlFor="cvv">CVV</label>
      <input 
        type="text" 
        id="cvv" 
        name="cvv" 
        placeholder="Enter cvv number" 
      />     
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

