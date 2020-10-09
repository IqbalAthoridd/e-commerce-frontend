import React, { Component } from 'react'
import {Grid, Container} from '@material-ui/core'
import Carts from '../components/Cart/Cart.jsx'
import NavigationBar from '../components/Navbar/NavigationBar'
import styles from './pages.module.css'

class Cart extends Component {
    render() {
        return (
            <>
            <NavigationBar/>
            <Grid container className={styles.container}>
                <Carts/>
            </Grid>
            </>
        )
    }
}

export default Cart
