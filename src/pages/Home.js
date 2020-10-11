import React, { Component } from 'react';
import NavigationBar from '../components/Navbar/NavigationBar';
import Courouser from '../components/Courosel/Courosel';
import CourouserCategory from '../components/Courosel/CoroselCategory';
import ItemList from '../components/ItemList/ItemList';
import {connect} from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container,Grid } from '@material-ui/core'

import newItemsAction from '../redux/action/newItems'


class Home extends Component {
  componentDidMount() {
    this.props.getItems()
  }
  
  render() {
    const {data,isError,isLoading} = this.props.item
    console.log(isError)
    return (
      <>
      {isLoading=== true ? (
       <>
       <Container style={{display:"flex",justifyContent:"center",position:"relative"}}>
       <CircularProgress style={{marginTop:"25%"}} />
       </Container>
       </>
      ):(
        <>
        <NavigationBar />
        <Courouser />
        <CourouserCategory />
        <ItemList data={data}/>
        </>
      )}
       
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
