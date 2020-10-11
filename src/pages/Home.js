import React, { Component } from 'react';
import NavigationBar from '../components/Navbar/NavigationBar';
import Courouser from '../components/Courosel/Courosel';
import CourouserCategory from '../components/Courosel/CoroselCategory';
import ItemList from '../components/ItemList/ItemList';
import {connect} from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container,Grid } from '@material-ui/core'

import newItemsAction from '../redux/action/newItems'
import listCategoryAction from '../redux/action/listCategory'
import popularAction from '../redux/action/popularProduct'


class Home extends Component {
  componentDidMount() {
    this.props.getItems()
    this.props.getCategory()
    this.props.getPopular()
  }
  
  render() {
    const {data:newProduct,isLoading:loadingNewProduct} = this.props.item
    const {data:category,isLoading:loadingCategory} = this.props.category
    const {data:popular,isLoading:loadingPopular} = this.props.popular
    console.log("ok",this.props.category.data)
    return (
      <>
      {loadingNewProduct === true || loadingPopular === true || loadingCategory === true ? (
       <>
       <Container style={{display:"flex",justifyContent:"center",position:"relative"}}>
       <CircularProgress style={{marginTop:"25%"}} />
       </Container>
       </>
      ):(
        <>
        <NavigationBar />
        <Courouser />
        <CourouserCategory data={category}/>
        <ItemList data={newProduct} popular={popular}/>
        </>
      )}
       
      </>
    );
  }
}


const mapStateToProps = state => ({
  item: state.newItems,
  category:state.listCategory,
  popular:state.popularProduct
})

const mapDispatchToProps = {
  getItems: newItemsAction.getData,
  getCategory:listCategoryAction.getCategory,
  getPopular:popularAction.getPopular
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
