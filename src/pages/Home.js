import React, { Component } from 'react';
import NavigationBar from '../components/Navbar/NavigationBar';
import Courouser from '../components/Courosel/Courosel';
import CourouserCategory from '../components/Courosel/CoroselCategory';

import { Grid } from '@material-ui/core';

class Home extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <Courouser />
        <CourouserCategory />
      </>
    );
  }
}

export default Home;
