import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>Contact Details</h1>
        <div className="container">
          <form>
            <label htmlFor="fname">First Name</label>
            <input 
              type="text" 
              id="fname" 
              name="firstName" 
              placeholder="Your name.." 
            />
            <label htmlFor="lname">Last Name</label>
            <input 
              type="text" 
              id="lname"
              name="lastName" 
              placeholder="Your last name.." 
            />
            <label htmlFor="country">Country</label>
            <input 
              type="email" 
              id="email"
              name="email" 
              placeholder="Your email.." 
            />
            <label htmlFor="subject">Subject</label>
            <textarea 
              id="subject" 
              name="subject" 
              placeholder="Write something.." 
              style={{height:"200px"}} />

            <input 
              type="button" 
              value="Submit"               
            />
          </form>
        </div>
      </div>
    )
  }
}

export default Contact;
