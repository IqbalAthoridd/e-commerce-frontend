import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dasbord from './pages/Dasbord';
import Home from './pages/Home';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/Dasbord" component={Dasbord} />
          <Route path="/" component={Home} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
