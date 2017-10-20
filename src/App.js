import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './api/data.js';
import axios from 'axios';
//import Link from 'react-router';

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

componentDidMount(){
  this.api();
}

  render() {
  let data = this.state.data;
    return (
      <div className="sitecontainer">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="myClubs" />
            <ul className = "navigation__main">
              <li><a href="#">Sport partners</a></li>
              <li><a href="#">Sports Search</a></li>
              <li><a href="#">Corporate Fitness</a></li>
              <li><a className="button" href="#">Select Tariff</a></li>
              <li className="loginpoint"><a className="btn_login" href="#">Login
                <span className="icon icon--profile"></span></a></li>

            </ul>
          <div className="category-header-poition category__header__content">
            <div className="category__header__title category__header__title--initialized">
            <h1>Crossfit</h1>
            </div>
            <p>
              High intensity fitness programme incorporating <br></br>elements from several sports and types of excercise
            </p>
          </div>
        </div>

      {data && (
        <div className="side-pane">
          <div>
            <h4>Address: {data.address}</h4>
          </div>
        </div>
      )}
      </div>
    )
  }
}

export default App;
