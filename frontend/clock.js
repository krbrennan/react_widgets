import React, { Component } from 'react';
import ReactDOM from 'react';


class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  tick() {
    this.setState({time: new Date()});
  }

  render() {
    console.log(this.state.time);
    let hours = this.state.time.getHours();
    let mins = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    let ampm = " ";

    hours > 12 ? ampm="  pm" : ampm="  am";
    hours > 12 ? hours -= 12 : hours;
    mins < 10 ? mins=`0${mins}` : mins;
    seconds < 10 ? seconds=`0${seconds}` : seconds

    return(
      <div>
        <h1>MindBlowing Clock</h1>
          <div className='clock'>
            <p>{hours}:</p>
            <p>{mins}:</p>
            <p>{seconds}</p>
            <p>  {ampm}</p>
          </div>
      </div>
  )};
}

export default Clock;
