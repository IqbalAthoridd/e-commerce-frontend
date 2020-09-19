import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dasboard from './pages/Dasboard';
import Home from './pages/Home';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Dasboard" component={Dasboard} />
          <Route path="/Login" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
