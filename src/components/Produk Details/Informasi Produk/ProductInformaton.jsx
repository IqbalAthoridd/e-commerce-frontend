import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './information.module.css'
import {styleInformation} from './stylesInformation'

function ProductInformaton() {
    const information = styleInformation()
  return (
    <>
      <Grid item lg={12} xs={12} className={information.lContainer}>
        <div>
          <span>Informasi Produk</span>
        </div>
      </Grid>
      <Grid item lg={12} xs={12} className={information.cContainer}>
        <div className={styles.conSpacing}>
          <span>Condition</span>
        </div>
        <div>
          <span>New</span>
        </div>
      </Grid>
      <Grid item lg={12}>
        <div className={styles.desSpacing}>
          <span>Description</span>
        </div>
        <div>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            eveniet nemo deleniti sed facilis voluptate, ex saepe voluptatibus
            labore id minus, sequi quas. Inventore quidem fuga repudiandae
            officia culpa iure.
          </span>
        </div>
      </Grid>
    </>
  );
}

export default ProductInformaton;
