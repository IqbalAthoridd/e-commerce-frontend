import React, { Component } from 'react';
import NavigationBar from '../components/Navbar/NavigationBar';
import Courouser from '../components/Courosel/Courosel';
import CourouserCategory from '../components/Courosel/CoroselCategory';
import ItemList from '../components/ItemList/ItemList';

class Home extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <Courouser />
        <CourouserCategory />
        <ItemList />
      </>
    );
  }
}

export default Home;
