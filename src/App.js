import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './api/data.js';

class App extends Component {
  render() {
    return (
      <div className="sitecontainer">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Crossfit</h1>
          <p className="App-intro">
            High intensity fitness programme incorporating elements from several sports and types of excercise
          </p>
        </header>

      </div>
    );
  }
}

export default App;
