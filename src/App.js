import React, { Component, PropTypes } from 'react';
import './App.css';
import HomePage from './components/home/HomePage';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <HomePage />
      </div>
    );
  }
}

export default App;
