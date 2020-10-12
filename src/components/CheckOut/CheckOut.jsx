import React from 'react';
import styles from './checkOut.module.css';
import { checkOutStyles } from './checkOutStyle';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import image from '../../assets/img/produk.jpg'

function CheckOut() {
  const checkOut = checkOutStyles();

  return (
    <>
      <Grid item lg={12} xs={12}>
        <div>
          <span>Checkout</span>
        </div>
      </Grid>
      <Grid item lg={7}>
        <div>
          <span>Shipping Adress</span>
        </div>
        <Paper elevation={4}>
          <div>
            <span>Adress Jane</span>
          </div>
          <div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              fuga molestiae sapiente optio id illum possimus aspernatur
              necessitatibus iste culpa recusandae nesciunt molestias minima est
              quibusdam? Soluta ipsum voluptatum earum!
            </span>
          </div>
          <div>
              <Button>Chose Another Adress</Button>
          </div>
        </Paper>
        <Paper elevation={4}>
            <div className={styles.cartCon}>
            <div>
                <div>
                    <img src={image} width="50px" height="50px"/>
                </div>
            </div>

            </div>
        </Paper>
      </Grid>
    </>
  );
}

export default CheckOut;
