import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Person from './Person';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div>
        <p>App title here</p>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/person?q=appleboss&a=stevejobs">Person</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/person" component={Person}/>
        <Route component={NotFound} />
      </Switch>

    </Router>
  );
}

export default App;
