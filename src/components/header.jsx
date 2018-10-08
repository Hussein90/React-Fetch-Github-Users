import React, { Component } from 'react';
import github from '../images/github.svg';
import '../styles/App.css';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={github} className="App-logo" alt="logo" />
          <h1 className="App-title">Github Users</h1>
          <ul className="menu">
              <li>
              <Link to="/">Home</Link></li>
              <li><Link to="/users">Users</Link></li>
                <li><Link to="/about">About</Link></li>

          </ul>
        
        </header>
       
      </div>
    );
  }
}





export default Header;
