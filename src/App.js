import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import './css/grid.css';
import axios from 'axios';
import Modal from './modal.js';

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
        isModalOpen:false
      });
    });
}

componentDidMount(){
  this.api();
  this.closeModal();
}

openModal() {
  this.setState({
    isModalOpen: true
  })
}

closeModal() {
  this.setState({
    isModalOpen: false
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
            <br></br>
            <button className="button my-button" onClick={()=>this.openModal()}>BOOK NOW</button>
            <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
              <p>You have sucessfully booked for this Activity</p>
              <br></br>
              <br></br>
              <p><button className = "button" onClick={() => this.closeModal()}>Close</button></p>
            </Modal>
            <br></br>
          <p>
            {(isBooked===true) && (
              <p>You have been Successfully Booked for this Activity</p>
            )}
          </p>
          </div>
        </div>

      <div className="info-section">
        {(data!=null) && (
          <div className="row">
            <div className="col span-4-of-12 down-left">
              <p><span className="icon left icon--pin"> </span> <span> {data.street}, {data.region}, {data.city}, {data.country} </span></p>
            </div>
            <div className="col span-4-of-12 down-middle">
              <p>Reservation Email: {data.reservationEmail}</p>
            </div>
            <div className="col span-4-of-12 down-middle">
              <p>{data.partner.className}: {data.partner.name}</p>
            </div>
          </div>)}
        </div>
    </div>
  </div>
    )
  }
}

export default App;
