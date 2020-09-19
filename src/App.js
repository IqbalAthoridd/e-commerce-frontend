import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dasboard from './pages/Dasboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Dasboard" component={Dasboard} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
