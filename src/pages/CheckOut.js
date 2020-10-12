import React from 'react'
import styles from './pages.module.css'
import {Grid} from '@material-ui/core'
import CheckOuts from '../components/CheckOut/CheckOut'
import NavigationBar from '../components/Navbar/NavigationBar'

export default function CheckOut() {
    return (
        <>
        <NavigationBar/>
        <Grid container className={styles.container}>
        <CheckOuts/>
        </Grid>
        </>
    )
}
