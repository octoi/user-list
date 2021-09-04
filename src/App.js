import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// pages
import Home from './pages/Home';
import Specific from './pages/Specific';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/user/:userId' component={Specific} />
      </Switch>
    </Router>
  )
}
