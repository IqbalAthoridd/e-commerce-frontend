import React,{useEffect} from 'react';
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
import LinearProgress from '@material-ui/core/LinearProgress';
import {useLocation, useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import detailsAction from '../../../redux/action/details'
import qs from 'querystring'
import cartAction from '../../../redux/action/cart'


function ProductDetails() {
  const detail = detailStyle();
  const location = useLocation()
  const dispatch = useDispatch();
  const {id} = useParams()
  const token = localStorage.getItem("token") || ""

  const details = useSelector(state=>state.details)

  const [jumlah,setJumlah] = React.useState(0)

  useEffect(()=> {
    dispatch(detailsAction.getDetails(id))
  },[])

  const addtoCart = (productId,jumlah) => {
    let data = {
      productId,
      total:jumlah
    }
    dispatch(cartAction.addCart(data,token))
  }

  const {category,url,price,condition,description,name,ratings} = details.data
  const images = [
    {
      original: `http://localhost:8080/${url}`,
      thumbnail: `http://localhost:8080/${url}`,
    },
  ];

  return (
    <>
      <Grid item lg={12} xs={12} className={detail.link}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            <span className={`${styles.fontStyle}`}>Home</span>
          </Link>
          <Link color="inherit" href="/getting-started/installation/">
            <span className={`${styles.fontStyle}`}>Product</span>
          </Link>
  <Typography color="textPrimary"><span className={`${styles.fontStyle}`}>{name}</span></Typography>
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
      <Grid item lg={7}>
        <div className={styles.detailsCon}></div>
        <div className={styles.bContainer}>
          <div className={styles.pName}>
  <span className={`${styles.fontStyle} ${styles.font1}`}>{name}</span>
          </div>
          <div className={styles.pCategory}>
  <span className={`${styles.fontStyle} ${styles.categoryName}`}>{category}</span>
          </div>
          <div>
            <Rating name="rating" value={ratings}  precision={0.5} readOnly />
          </div>
        </div>
        <div className={styles.conPrice}>
          <div className={styles.tPrice}>
            <span className={`${styles.fontStyle} ${styles.categoryName}`}>Price</span>
          </div>
          <div className={styles.price}>
  <span className={`${styles.fontStyle} ${styles.fontPrice}` }>$ {price}</span>
          </div>
        </div>
        <div className={styles.conColor}>
          <div>
            <span className={`${styles.fontStyle} ${styles.font2}`}>Color</span>
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
                <span className={`${styles.fontStyle} ${styles.font2}`}>Size</span>
              </div>
              <div>
                <IconButton>
                  <RemoveIcon />
                </IconButton>
                <span className={`${styles.fontStyle} ${styles.font2}`}>1</span>
                <IconButton>
                  <AddIcon />
                </IconButton>
              </div>
            </div>
            <div>
              <div>
                <span className={`${styles.fontStyle} ${styles.font2}`}>Jumlah</span>
              </div>
              <div>
                <IconButton className={detail.btnMin} onClick={()=>setJumlah(jumlah-1)}>
                  <RemoveIcon className={detail.iconMin} />
                </IconButton>
  <span className={`${styles.fontStyle} ${styles.font2}`}>{jumlah}</span>
                <IconButton className={detail.btnPlus} onClick={()=>setJumlah(jumlah+1)} >
                  <AddIcon className={detail.iconPlus}/>
                </IconButton>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.btnAdd}>
            <div>
            <Button className={detail.btnChat}>Chat</Button>
            </div>
            <div>
            <Button onClick={()=>addtoCart(id,jumlah)} className={detail.addBag}>Add bag</Button>
            </div>
            <div className={styles.btnBuyWidth}>
            <Button variant="contained" fullWidth="true" className={detail.btnBuy}>Buy Now</Button>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item lg={12} xs={12} className={detail.lContainer}>
        <div>
          <span className={`${styles.fontStyle} ${styles.font1}`}>Informasi Produk</span>
        </div>
      </Grid>
      <Grid item lg={12} xs={12} className={detail.cContainer}>
        <div className={styles.conSpacing}>
          <span className={`${styles.fontStyle} ${styles.font4}`}>Condition</span>
        </div>
        <div>
  <span className={`${styles.fontStyle}`}>{condition}</span>
        </div>
      </Grid>
      <Grid item lg={12}>
        <div className={styles.desSpacing}>
          <span className={`${styles.fontStyle} ${styles.font4}`}>Description</span>
        </div>
        <div>
          <span className={`${styles.fontStyle}`}>
           {description}
          </span>
        </div>
      </Grid>
      <Grid item lg={12} className={detail.pReview}>
        <div>Produk review</div>
      </Grid>
      <Grid item lg={1} xs={12} className={detail.gridRat}>
        <div className={styles.rContainer}>
          <div>
            <span className={`${styles.fontStyle}`}>
        {ratings || 0}<span className={`${styles.fontStyle}`}>/10</span>{' '}
            </span>
          </div>
          <div>
            <Rating name="ratings" value={ratings} precision={0.5} readOnly />
          </div>
        </div>
      </Grid>
      <Grid item lg={2} xs={12}>
        <div className={styles.rating}>
          <div>
            <div className={styles.cRating}>
                <div>
                  <Rating name="disabled" size="small" value={5} max={1} readOnly />
                </div>
                <div>
                  <span className={`${styles.fontStyle}`}>5</span>
                </div>
                <div className={styles.progres}>
                  <LinearProgress variant="determinate" color="primary" value={50}/>
                </div>
                <div>
                  <span className={`${styles.fontStyle}`}>4</span>
                  </div>
            </div>
          </div>
          <div>
            <div className={styles.cRating}>
                <div>
                  <Rating name="disabled" size="small" value={5} max={1} readOnly />
                </div>
                <div>
                  <span>5</span>
                </div>
                <div className={styles.progres}>
                  <LinearProgress variant="determinate" color="primary" value={50}/>
                </div>
                <div>
                  <span>4</span>
                  </div>
            </div>
          </div>
          <div>
            <div className={styles.cRating}>
                <div>
                  <Rating name="disabled" size="small" value={5} max={1} readOnly />
                </div>
                <div>
                  <span>5</span>
                </div>
                <div className={styles.progres}>
                  <LinearProgress variant="determinate" color="primary" value={50}/>
                </div>
                <div>
                  <span>4</span>
                  </div>
            </div>
          </div>
          <div>
            <div className={styles.cRating}>
                <div>
                  <Rating name="disabled" size="small" value={5} max={1} readOnly />
                </div>
                <div>
                  <span>5</span>
                </div>
                <div className={styles.progres}>
                  <LinearProgress variant="determinate" color="primary" value={50}/>
                </div>
                <div>
                  <span>4</span>
                  </div>
            </div>
          </div>
          <div>
            <div className={styles.cRating}>
                <div>
                  <Rating name="disabled" size="small" value={5} max={1} readOnly />
                </div>
                <div>
                  <span>5</span>
                </div>
                <div className={styles.progres}>
                  <LinearProgress variant="determinate" color="primary" value={50}/>
                </div>
                <div>
                  <span>4</span>
                  </div>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item lg={12} md={12} className={detail.hrSpacing}>
        <div className={styles.hrStyles}>
        <hr></hr>
        </div>
      </Grid>
    </>
  );
}

export default ProductDetails;
