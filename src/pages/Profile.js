import React, { Component } from 'react'
import Profiles from '../components/Profile Custommer/Profile'
import {Grid} from '@material-ui/core'
import NavigationBar from '../components/Navbar/NavigationBar'
import styles from './pages.module.css'

class Profile extends Component {
    render() {
        return (
           <>
           <NavigationBar/>
           <Grid container >
               <Profiles/>
           </Grid>
           </>
        )
    }
}

export default Profile
