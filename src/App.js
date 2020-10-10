import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dasboard from './pages/Dasboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart'
import { Provider } from 'react-redux'
import store from './redux/strore'
import Profile from './pages/Profile'
import Details from './pages/Details'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" render={()=><Home/>} exact />
          <Route path="/dasboard" component={Dasboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/cart" render={()=><Cart/>} />
          <Route path="/profile" render={()=><Profile/>}></Route>
          <Route path="/details" render={()=><Details/>}/>
        </Switch>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
