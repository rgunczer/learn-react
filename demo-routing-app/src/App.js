import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Home() {
  return <div>Home Here</div>
}

function About(props) {
  console.log('About::props ->', props);
  return <div>About here</div>
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to={{ pathname:"/about", search:"?sort=name&age=32" }}>About</Link>
      </li>
    </ul>
  )
}

function Banner() {
  return (
    <h1>Router Test</h1>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Router>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Router>
      </div>
    );
  }
}

export default App;
