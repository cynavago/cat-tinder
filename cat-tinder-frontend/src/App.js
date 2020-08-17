import React, { Component } from 'react';
import './App.css';
import catData from './mockCats.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: catData
    }
  }
  render(){
    return (
      <React.Fragment>
        <h1>Cat-tinder</h1>
      </React.Fragment>
    )
  }
}

export default App;
