import React, { Component } from 'react';
import NavigationBar from '../components/Navbar/NavigationBar';
import Courouser from '../components/Courosel/Courosel';
import CourouserCategory from '../components/Courosel/CoroselCategory';
import ItemList from '../components/ItemList/ItemList';
import {connect} from 'react-redux'

import newItemsAction from '../redux/action/newItems'


class Home extends Component {
  componentDidMount() {
    this.props.getItems()
  }
  
  render() {
    const {data} = this.props.item
    return (
      <>
        <NavigationBar />
        <Courouser />
        <CourouserCategory />
        <ItemList data={data}/>
      </>
    );
  }
}


const mapStateToProps = state => ({
  item: state.newItems
})

const mapDispatchToProps = {
  getItems: newItemsAction.getData
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
