import React, { Component } from 'react'
import {Grid} from '@material-ui/core'
import styles from './pages.module.css'
import NavigationBar from '../components/Navbar/NavigationBar'
import ProductDetails from '../components/Produk Details/Details/ProductDetails'
import ProductInformaton from '../components/Produk Details/Informasi Produk/ProductInformaton'



class Details extends Component {
    render() {
        return (
            <>
            <NavigationBar/>
            <Grid container className={styles.container}>
                <ProductDetails/>
                <ProductInformaton/>
            </Grid>
            </>
        )
    }
}

export default Details
