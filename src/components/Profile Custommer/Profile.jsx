import React from 'react'
import {Grid,Box} from '@material-ui/core'
import styles from './profile.module.css'
import Avatar from '@material-ui/core/Avatar';

function Profile() {
    return (
        <>
        <Grid item lg={3} alignItems="stretch"  style={{border:"1px solid black"}}>
            <div className={styles.sideContainer}>
                    <div className={styles.userInfo}>
                        <div>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </div>
                    </div>
            </div>
       </Grid>
        </>
    )
}

export default Profile
