import React, { Component } from 'react';
import Parent from './Parent';
import Button from './Button';
import Layout from './Layout';
import Navbar from './Navbar';
import Content from './Content';
import Sidebar from './Sidebar';

class App extends Component {

  clickHandler = () => {
    alert('here from button in app');
  }

  render() {
    return (
      <div>
        app is here
        <Parent>
          <Button text="Btn1" click={this.clickHandler} />
          <Button text="Btn2" click={this.clickHandler} />
        </Parent>
        <hr />
        <Layout top={<Navbar />} left={<Sidebar />} center={<Content />} />
      </div>
    );
  }

}

export default App;
