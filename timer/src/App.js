import React, { Component } from 'react'
import './App.css';
import Timer from './timer.js'
import Reset from './reset.js'
import Control from './control.js'

class App extends Component {

  render() {
      return (
      <div className="App">
        <Timer/>
        <Reset/>
      </div>
    );
  }
  
}

export default App;
