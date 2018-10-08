import React, { Component } from 'react';
import '../styles/App.css';
import Header from '../components/header';
import {  Route, Switch, Redirect } from "react-router-dom";
import About from '../containers/about';
import Users from '../containers/users';
import { Helmet } from 'react-helmet';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/> 
        <Switch>
         <Redirect from='/home' to='/'/>
          <Route exact path="/" component={Home} />
          
          <Route path="/users" component={Users} />

          <Redirect from='/home/' to='/about'/>
          <Route exact path="/about" component={About} />
        
          <Route component={Home}/>
        </Switch>
      </div>
    );
  }
}


const Home = props => (
  <div>
  <Helmet>
      <title>Home</title>
    </Helmet>
    <h1>Home</h1>
    <p>this is the home page of the github fetch users React-App</p>
  </div>
);





export default App;
