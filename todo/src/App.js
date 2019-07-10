import React, { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Joel'
    };
  }

  render() {
    return (
      <div>
        main app here [{ this.state.name }]
      </div>
    );
  }

}
