import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, P } from 'react-router-dom';
import Dasboard from './pages/Dasboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import { Provider } from 'react-redux';
import store from './redux/strore';
import Profile from './pages/Profile';
import Details from './pages/Details';
import PrivateRoute from './components/Private Route/PrivateRoute';
import ItemCategory from './pages/ItemCategory';
import CheckOut from './pages/CheckOut';
import EditProduct from './pages/EditProduct';
import ItemSearch from './pages/ItemSearch';
import { PersistGate } from 'redux-persist/integration/react';

class App extends Component {
  render() {
    return (
      <Provider store={store().store}>
        <PersistGate loading={null} persistor={store().persistore}>
          <BrowserRouter>
            <Switch>
              <Route path="/" render={() => <Home />} exact />
              <Route path="/dasboard" render={() => <Dasboard />} />
              <Route path="/login" render={() => <Login />} />
              <Route path="/register" render={() => <Register />} />
              <Route path="/search" render={() => <ItemSearch />} />
              <Route path="/product" render={() => <EditProduct />} />
              <Route path="/category" render={() => <ItemCategory />} />
              <Route path="/checkout" render={() => <CheckOut />} />
              <PrivateRoute path="/cart">
                <Cart />
              </PrivateRoute>
              <Route path="/profile" render={() => <Profile />}></Route>
              <Route path="/details/:id" render={() => <Details />} />
            </Switch>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
