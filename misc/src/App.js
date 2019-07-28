import React from 'react';
import './App.css';
import SimpleButton from './SimpleButton';
import Greet from './Greet';
import Dummy from './Dummy';

class App extends React.Component {
  state = {
    buttonText: 'click',
    buttonAge: 32,
    dummyText: 'some text'
  };

  handleUpdate = () => {
    this.setState({
      dummyText: Math.random()
    });
  }

  render() {
    return (
      <>
        <p>App Here</p>
        <SimpleButton state={this.state} />
        <Greet name="Diana" heroName="Wonder Woman"/>
        <Dummy text={this.state.dummyText}/>
        <button onClick={this.handleUpdate}>Set</button>
      </>
    );
  }
}

export default App;
