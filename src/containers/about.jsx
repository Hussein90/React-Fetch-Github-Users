import React, { Component } from 'react';
import '../styles/App.css';
import { Helmet } from 'react-helmet';


class About extends Component {
  render() {
    return (
      <div className="App">
      <Helmet>
      <title>about</title>
    </Helmet>
       <header >
         <h1 className="title"> About</h1>
        </header>
       <p>this app is  fetch user's data from github </p>
      </div>
    );
  }
}





export default About;
