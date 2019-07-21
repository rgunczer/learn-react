import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      color: '',
      bgColor: 'white'
    };
  }

  colorValue = (e) => {
    this.setState({
      color: e.target.value
    });
  }

  setNewColor = (e) => {
    this.setState({
      bgColor: this.state.color,
      color: ''
    });

    this._input.focus();

    e.preventDefault();
  }

  render() {
    const self = this;
    const squareStyle = {
      backgroundColor: this.state.bgColor
    };

    return (
      <div className="colorArea">
        <div style={squareStyle} className="colorSquare"></div>
        <form onSubmit={this.setNewColor}>
          <input onChange={this.colorValue}
            placeholder="Enter a color value"
            value={this.state.color}
            ref={
              function(el) {
                self._input = el;
              }
            }></input>
          <button type="submit">go</button>
        </form>
      </div>
    );
  }
}

export default App;
