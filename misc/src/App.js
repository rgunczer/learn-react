import React from 'react';
import './App.css';
import SimpleButton from './SimpleButton';
import Greet from './Greet';

class App extends React.Component {
  state = {
    buttonText: 'click',
    buttonAge: 32
  };
  render() {
    return (
      <>
        <p>App Here</p>
        <SimpleButton state={this.state} />
        <Greet name="Diana" heroName="Wonder Woman"/>
      </>
    );
  }
}

export default App;
