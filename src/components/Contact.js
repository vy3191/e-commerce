import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      subject: ''
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const { firstName, lastName, email, subject } = this.state;
    const personalDetails = {
      firstName, 
      lastName, 
      email, 
      subject
    }
    console.log('personalObject', personalDetails);
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      subject: ''
    })
  }
  render() {
    const { firstName, lastName, email, subject } = this.state;
    const isValid = !firstName || !lastName || !email || !subject;
    console.log('state>>', this.state)
    return (
        <div className="container">
          <h1 className="text-center">Contact Details</h1>
          <form onSubmit={ this.handleSubmit }>
            <label htmlFor="fname">First Name</label>
            <input 
              type="text" 
              id="fname" 
              name="firstName" 
              value={ firstName }
              onChange={ this.handleInput}
              placeholder="Your name.." 
            />
            <label htmlFor="lname">Last Name</label>
            <input 
              type="text" 
              id="lname"
              name="lastName" 
              value={ lastName }
              onChange={ this.handleInput}
              placeholder="Your last name.." 
            />
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
              name="email" 
              value={ email }
              onChange={ this.handleInput}
              placeholder="Your email.." 
            />
            <label htmlFor="subject">Subject</label>
            <textarea 
              id="subject" 
              name="subject" 
              value={ subject }
              onChange={ this.handleInput}
              placeholder="Write something.." 
              style={{height:"200px"}} />
            <div className="submit">
               <button 
                disabled={ isValid }
               className="btn btn-lg btn-success"
              >
                Submit
              </button>
            </div>            
          </form>
        </div>
    )
  }
}

export default Contact;
