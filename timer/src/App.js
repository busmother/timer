import React, { Component } from 'react'
import './App.css';
import Timer from './timer.js'
import Reset from './reset.js'
import Control from './control.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { timer: 0, paused: true}
  };

  tick = () => {
    this.setState({timer : this.state.timer +1})
  }

  startTimer = () => {
    this.interval = setInterval(this.tick,1000);
    this.setState({paused : false})
  }

  pauseTimer = () => {
    clearInterval( this.interval );
    this.setState({paused : true})
  }

  reset = () => {
    this.setState({timer : 0, paused : true });
    clearInterval( this.interval )
  }

  render() {
      return (
      <div className="App">
        <Timer time={this.state.timer}/>
        <Control 
          paused={this.state.paused}
          start={this.startTimer}
          pause={this.pauseTimer}
          />
        <Reset onClickReset={this.reset}/>
      </div>
    );
  }
  
}

export default App;
