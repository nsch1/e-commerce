import React, { Component } from 'react';
import logo from './logo.svg';
import ProductsList from './components/ProductsList'
import ProductDetails from './components/ProductDetails'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/products" component={ProductsList} />
          <Route exact path="/products/:id" component={ProductDetails} />
          <Route exact path="/" render={ () => <Redirect to="/products" /> } />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
        </div>
      </Router>
    )
  }
}

export default App;
