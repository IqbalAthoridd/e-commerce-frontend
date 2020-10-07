import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dasboard from './pages/Dasboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Provider } from 'react-redux'
import store from './redux/strore'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" render={()=><Home/>} exact />
          <Route path="/Dasboard" component={Dasboard} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
        </Switch>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
