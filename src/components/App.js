import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>USED CAR SALES</h1>
          <h2>Find a Great Price on the Vehicle You Want.</h2>
          <h3>
          <Link to="/cars">
            Shop Now
          </Link>
        </h3>
        </div>
      </div>
    );
  }
}

export default App;
