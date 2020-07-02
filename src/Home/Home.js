import React, { Component } from 'react'
import axios from 'axios';

class Home extends Component {
  render() {
    return (

      <div >

        <button type="button" class="btn btn-primary" onClick={this.onClick}>Send GET /products </button>
      </div>
    );

  }

  onClick(ev) {
    console.log("Sending a GET API Call !!!");
    axios.get('/flights ')
      .then(res => {
        console.log(res)
      }).then(response => {
        console.log(JSON.stringify(response));

      })
  }



}

export default Home;
