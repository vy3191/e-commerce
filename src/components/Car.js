import React, { Component } from 'react';

class Car extends Component {
  
  render() {
    return (
      <div className="card">
        <img src="img_avatar.png" alt="Avatar" style="width:100%" />
        <div className="container">
          <h4><b>John Doe</b></h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    );
  }
}

export default Car;