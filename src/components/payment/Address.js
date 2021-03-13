import React from 'react'

function Address() {
  return (
    <div className="address">
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
  
      <label htmlFor="zip">Zip</label>
      <input 
        type="text" 
        id="zip" 
        name="zip" 
        placeholder="Enter zip" 
      />    
  </div>  
  )
}

export default Address
