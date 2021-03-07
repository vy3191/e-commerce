import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <NavLink  
              activeClassName="selected"
              className="navbar-brand"
            >CAR SALES
            </NavLink>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <NavLink  
                activeClassName="selected"
                className="navbar-brand"
              >About
              </NavLink>
            </li>
            <li>
              <NavLink  
                activeClassName="selected"
                className="navbar-brand"
              >Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;