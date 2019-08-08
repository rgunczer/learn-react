import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div onClick={props.click}>
      This div was clicked {props.clickCount} times.
    </div>
  );
}

export default App;
