import React, { Component } from 'react';
import NavigationBar from '../components/Navbar/NavigationBar';
import { Container } from 'reactstrap';
import CardList from '../components/CardList';

class Dasbord extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <Container>
          <CardList />
        </Container>
      </>
    );
  }
}

export default Dasbord;
