import React, { Component } from 'react'
import {Grid} from '@material-ui/core'
import styles from './pages.module.css'
import NavigationBar from '../components/Navbar/NavigationBar'
import ProductDetails from '../components/Produk Details/Details/ProductDetails'


class Details extends Component {
    render() {
        return (
            <>
            <NavigationBar/>
            <Grid container className={styles.container}>
                <ProductDetails/>
            </Grid>
            </>
        )
    }
}

export default Details
