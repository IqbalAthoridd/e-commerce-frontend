import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import styles from './pages.module.css';
import NavigationBar from '../components/Navbar/NavigationBar';
import ProductDetails from '../components/Produk Details/Details/ProductDetails';
import RecomenList from '../components/Produk Details/Product Recomen/RecomenList';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import {profileStyle} from './profileStyles'


function Details() {
  const classes = profileStyle()

    const isLoading = useSelector(state=>state.details.isLoading)
    const location = useLocation()

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[location])

  return (
    <>
        <NavigationBar />
        <Grid container className={classes.container2}>
          <ProductDetails />
          <RecomenList />
        </Grid>
    </>
  );
}

export default Details;
