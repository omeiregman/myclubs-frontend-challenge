import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './api/data.js';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:null
    }
  }

api=()=>{
  const EVENT_URL = 'https://frontend-challenge-190ff.firebaseio.com/activities/coding-activity.json';
  axios.get (EVENT_URL).then(
    (response) => {
      this.setState({
        data:response.data
      });
    });
}

componentWillMount(){
  this.api();
}

  render() {
  debugger;
  let data = this.state.data;
    return (
      <div className="sitecontainer">
        {(data!=null) && (<header className="App-header">
          <img src={logo} className="App-logo" alt="myClubs" />
            <ul className = "navigation__main">
              <li>Sport partners</li>
              <li>Sports Search</li>
              <li>Corporate Fitness</li>
              <li>Select Tariff</li>
              <li>{data.reservationEmail}</li>
            </ul>
          <div className="hero-box">
            <h1>Crossfit</h1>
            <p>
              High intensity fitness programme incorporating <br></br>elements from several sports and types of excercise
            </p>
          </div>
        </header>)}
      </div>
    )
  }
}

export default App;
