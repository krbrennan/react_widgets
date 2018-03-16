import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock.js';



class Root extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='clock-div'>
        <Clock />
      </div>
  )};
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});
