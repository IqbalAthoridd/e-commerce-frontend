import React, { Component } from 'react';
import FormLogin from '../components/Form/Login';
import NavigationBar from '../components/Navbar/NavigationBar';
import { Container } from 'reactstrap';
class Login extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <FormLogin />
      </>
    );
  }
}

export default Login;
