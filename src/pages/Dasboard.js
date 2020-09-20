import React, { Component } from 'react';
import NavigationBar from '../components/Navbar/NavigationBar';
import { Container } from 'reactstrap';
import CardList from '../components/CardList';
import { fetchItem } from '../components/api/items';

class Dasbord extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      pageInfo: {},
    };
  }

  async componentDidMount() {
    const { data, pageInfo } = await fetchItem();
    this.setState({
      data,
      pageInfo,
    });
  }

  handleUrl = async () => {
    const { data, pageInfo } = await fetchItem(this.state.pageInfo.nextLink);
    this.setState({ data, pageInfo });
  };

  render() {
    return (
      <>
        <NavigationBar />
        <Container>
          <CardList handleUrl={this.handleUrl} />
        </Container>
      </>
    );
  }
}

export default Dasbord;
