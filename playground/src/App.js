import React, { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Joel',
      showTitle: true
    };
  }

  handleClick = () => {
    this.setState({
      showTitle: !this.state.showTitle
    });
  }

  render() {
    return (
      <div>
        <p>App is working [{this.state.firstName}]</p>
        <button onClick={this.handleClick}>Show / Hide</button>
        { this.state.showTitle && (<h1>Some Title</h1>) }
      </div>
    );
  }
}
