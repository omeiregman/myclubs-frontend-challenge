import React, { Component } from 'react';
import axios from 'axios';
const EVENT_URL = 'https://frontend-challenge-190ff.firebaseio.com/activities/coding-activity.json';


function getData(){
  axios.get (EVENT_URL).then(
    function(response){
      return response.data.email;
      //console.log(response.data.name);
    });
  }

getData();
