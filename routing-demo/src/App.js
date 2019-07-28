import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Person from './Person';
import Header from './Header';
import TestModal from './ModalTest';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  state = {
    num: 0
  };

  updateNum = (event) => {
    this.setState({
      num: event.target.value
    });
  }

  render() {
    return (
      <Router>
        <h1>Main App Title</h1>
        <TestModal />
        <Header />
        {/* <Route render={props =>
          <div>
            <input type="number" onChange={this.updateNum} value={this.state.num} />
            <button onClick={ () => props.history.push('/person/666') } >Show</button>
          </div>
        } /> */}

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to={'/person/' + this.state.num}>Person</Link></li>
        </ul>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/person/:id" exact component={PersonFn} />
      </Router >
    );
  }
}

function PersonFn({ match }) {
  return <Person id={match.params.id} />
}

export default App;
