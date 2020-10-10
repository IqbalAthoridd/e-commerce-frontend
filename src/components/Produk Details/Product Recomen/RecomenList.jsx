import React from 'react'
import {Grid} from '@material-ui/core'
import styles from './recomen.module.css'
import {recomenStyle} from './recomenStyle'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import image from '../../../assets/img/produk.jpg';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import Paper from '@material-ui/core/Paper'


function RecomenList() {
    const recomen = recomenStyle()
    return (
        <>
        <Grid item lg={12} className={recomen.labelSpacing}>
            <div>
                <span><h2>You can also like this</h2></span>
            </div>
            <div>
                <span>
                    <h6>You've never seen it before</h6>
                </span>
            </div>
        </Grid>
        <Grid item lg={12}>
        <div className={styles.Spacing}>
              <Paper elevation={5}>
            <Card >
              <CardActionArea className={recomen.actionArea}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={image}
                  title="Contemplative Reptile"
                />
                <CardContent className={recomen.cardContent}>
                  <Typography gutterBottom className="text-title">
          <span>T Shirt</span>
                  </Typography>
                  <Typography gutterBottom className="text-price">
          <span>$ 200000</span>
                  </Typography>
                  <Typography gutterBottom className="text-small">
          <span>T sirt</span>
                  </Typography>
                  <Box
                    component="fieldset"
                    mb={3}
                    borderColor="transparent"
                    className={recomen.marginBox}
                  >
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
            </Paper>
            </div>
        </Grid>
        </>
    )
}

export default RecomenList
