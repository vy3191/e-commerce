import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse" style={{backgroundColor: '#3C4089', color: 'white'}}>
      <div className="container-fluid px-5">
        <div className="navbar-header">
          <NavLink 
            to="/"
            className="navbar-brand"
            style={{color: 'white'}}
          >
            Car Sales
          </NavLink>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <NavLink 
              to="/about"
              className="navbar-brand"
              style={{color: 'white'}}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact"
              className="navbar-brand"
              style={{color: 'white'}}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
      
    );
  }
}

export default Header;