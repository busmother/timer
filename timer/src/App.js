import React, { Component } from 'react'
import './App.css';
import Timer from './timer.js'

class App extends Component {

  render() {
      return (
      <div className="App">
        <Timer/>
      </div>
    );
  }
  
}

export default App;