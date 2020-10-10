import React from 'react';
import { Button, Grid } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import ImageGallery from 'react-image-gallery';
import gambar from '../../../assets/img/bajuko.jpg';
import styles from './details.module.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { detailStyle } from './detailsStyles';
import Radio from '@material-ui/core/Radio';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
const images = [
  {
    original: gambar,
    thumbnail: gambar,
  },
  {
    original: gambar,
    thumbnail: gambar,
  },
  {
    original: gambar,
    thumbnail: gambar,
  },
];

function ProductDetails() {
  const detail = detailStyle();
  return (
    <>
      <Grid item lg={12} xs={12} className={detail.link}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Material-UI
          </Link>
          <Link color="inherit" href="/getting-started/installation/">
            Core
          </Link>
          <Typography color="textPrimary">Breadcrumb</Typography>
        </Breadcrumbs>
      </Grid>
      <Grid item lg={4} xs={12} md={6} sm={6} className={detail.image}>
        <ImageGallery
          items={images}
          showFullscreenButton={false}
          showPlayButton={false}
          showNav={false}
        />
      </Grid>
      <Grid item lg={4} >
        <div className={styles.detailsCon}></div>
        <div className={styles.bContainer}>
          <div className={styles.pName}>
            <span>Baju muslim pria</span>
          </div>
          <div className={styles.pCategory}>
            <span>Zalora cloth</span>
          </div>
          <div>
            <Rating name="disabled" value={5} size="small" readOnly />
          </div>
        </div>
        <div className={styles.conPrice}>
          <div className={styles.tPrice}>
            <span>price</span>
          </div>
          <div className={styles.price}>
            <span>$20.0</span>
          </div>
        </div>
        <div className={styles.conColor}>
          <div>
            <span>Color</span>
          </div>
          <div className={styles.radioBtn}>
            <div>
              <Radio
                value="a"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'A' }}
              />
            </div>
            <div>
              <Radio
                value="a"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'A' }}
              />
            </div>
          </div>
        </div>
        <div className={styles.conCounter}>
          <div className={styles.size}>
            <div className={styles.conSize}>
              <div>
                <span>Size</span>
              </div>
              <div>
                <IconButton>
                  <RemoveIcon />
                </IconButton>
                <span>1</span>
                <IconButton>
                  <AddIcon />
                </IconButton>
              </div>
            </div>
            <div>
              <div>
                <span>Jumlah</span>
              </div>
              <div>
                <IconButton>
                  <RemoveIcon />
                </IconButton>
                <span>1</span>
                <IconButton>
                  <AddIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.btnAdd}>
              <Button>Chat</Button>
              <Button>Add bag</Button>
              <Button block >Buy Now</Button>
          </div>
        </div>
      </Grid>
    </>
  );
}

export default ProductDetails;
