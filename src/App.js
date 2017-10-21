import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import './css/grid.css';
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
        data:response.data,
        isBooked:false
      });
    });
}

componentDidMount(){
  this.api();
}

bookButton() {
  this.setState({
    isBooked: true
  })
}
  render() {
  let data = this.state.data;
  let isBooked = this.state.isBooked;
    return (
      <div>

      <div className="sitecontainer">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="myClubs" />

          <div className="category-header-poition category__header__content">
            <div className="category__header__title category__header__title--initialized">
              <h1 className = "hero-text-box">Crossfit</h1>
            </div>
            <p className="hero-desc">
              High intensity fitness programme incorporating <br></br>elements from several sports and types of excercise
            </p>
          </div>
        </div>

      <div className="info-section">
        <div className="row">
          {(data!=null) && (<div className="col span-1-of-3 down-left">
            <p><span className="icon left icon--pin"> </span> <span> {data.street}, {data.region} <br></br>{data.city}, {data.country} </span></p>
            <br></br>
            <br></br>
            <p>Reservation Email: {data.reservationEmail} </p>
          </div>)}
          <div className="col span-1-of-3 down-middle">
            <br></br>
            <br></br>
            <button className="button" onClick={()=>this.bookButton()}>BOOK NOW</button>
            <br></br>
            <br></br>
          <p>
            {(isBooked===true) && (
              <p>You have been Successfully Booked for this Activity</p>
            )}
          </p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>

        <div className="col span-1-of-3 down-right">
          <p></p>
          <br></br>
          <br></br>
          <br></br>

        </div>
        </div>
      </div>

    </div>
    </div>
    )
  }
}

export default App;
