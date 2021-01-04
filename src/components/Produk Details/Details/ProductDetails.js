import React, { useEffect } from 'react';
import { Button, Grid, withStyles } from '@material-ui/core';
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
import { useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import detailsAction from '../../../redux/action/details';
import qs from 'querystring';
import cartAction from '../../../redux/action/cart';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
const { REACT_APP_BACKEND_URL } = process.env;

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 8,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#DB3022',
  },
}))(LinearProgress);

function ProductDetails() {
  const detail = detailStyle();
  const location = useLocation();
  const dispatch = useDispatch();
  const { id } = useParams();
  const token = localStorage.getItem('token') || '';

  const details = useSelector((state) => state.details);

  const [jumlah, setJumlah] = React.useState(0);

  useEffect(() => {
    dispatch(detailsAction.getDetails(id));
  }, []);

  const addtoCart = (productId, jumlah) => {
    let data = {
      productId,
      total: jumlah,
    };
    dispatch(cartAction.addCart(data, token));
  };

  const {
    category,
    url,
    price,
    condition,
    description,
    name,
    ratings,
  } = details.data;
  const images = [
    {
      original: `${REACT_APP_BACKEND_URL}${url}`,
      thumbnail: `${REACT_APP_BACKEND_URL}${url}`,
    },
    {
      original: `${REACT_APP_BACKEND_URL}${url}`,
      thumbnail: `${REACT_APP_BACKEND_URL}${url}`,
    },
  ];

  return (
    <>
      <Grid item lg={12} xs={12} className={detail.link}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link color="inherit" href="/">
            <span className={detail.fontBc}>Home</span>
          </Link>
          <Link color="inherit" href="/getting-started/installation/">
            <span className={detail.fontBc}>Product</span>
          </Link>
          <Typography color="textPrimary">
            <span className={detail.fontBc}>{name}</span>
          </Typography>
        </Breadcrumbs>
      </Grid>
      <Grid item lg={4} xs={12} md={6} sm={6} className={detail.image}>
        <ImageGallery
          items={images}
          showFullscreenButton={false}
          showPlayButton={false}
          showNav={false}
          infinite={true}
        />
      </Grid>
      <Grid item lg={8} xs={12} sm={6} className={detail.productWrapper}>
        <div className={detail.contentWrapper}>
          <div>
            <span className={detail.productTitle}>Baju muslim pira</span>
          </div>
          <div>
            <span className={detail.brandTitle}>Zalora Cloth</span>
          </div>
          <div className={detail.ratingWrapper}>
            <div>
              <Rating name="read-only" size="small" value={4} readOnly />
            </div>
            <div style={{ paddingBottom: 7 }}>
              <span className={detail.ratingAvg}>(10)</span>
            </div>
          </div>
        </div>
        <div className={detail.contentWrapper2}>
          <div>
            <span className={detail.brandTitle}>Price</span>
          </div>
          <div>
            <span className={detail.priceTitle}>Rp.2,000,000</span>
          </div>
        </div>
        <div className={detail.contentWrapper2}>
          <div>
            <span className={detail.labelTitle}>color</span>
            <div>
              <div>
                <Radio />
                ssss
              </div>
            </div>
          </div>
        </div>
        <div className={detail.sizeWrapper}>
          <div style={{ marginRight: '13%' }}>
            <div>
              <span className={detail.labelTitle}>Size</span>
            </div>
            <div className={detail.countWrapper}>
              <div>
                <IconButton className={detail.btnMin}>
                  <RemoveIcon className={detail.iconMin} />
                </IconButton>
              </div>
              <div className={detail.numberWrapper}>
                <span className={detail.labelTitle}>1</span>
              </div>
              <div>
                <IconButton className={detail.btnPlus}>
                  <AddIcon className={detail.iconPlus} />
                </IconButton>
              </div>
            </div>
          </div>
          <div>
            <div>
              <span className={detail.labelTitle}>Jumlah</span>
            </div>
            <div className={detail.countWrapper}>
              <div>
                <IconButton className={detail.btnMin}>
                  <RemoveIcon className={detail.iconMin} />
                </IconButton>
              </div>
              <div className={detail.numberWrapper}>
                <span className={detail.labelTitle}>1</span>
              </div>
              <div>
                <IconButton className={detail.btnPlus}>
                  <AddIcon className={detail.iconPlus} />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
        <div className={detail.btnWrapper}>
          <div className={detail.btnBagWrapper}>
            <Button className={detail.btnChat} variant="outlined" fullWidth>
              Chat
            </Button>
          </div>
          <div className={detail.btnBagWrapper}>
            <Button className={detail.addBag} variant="outlined" fullWidth>
              Add bag
            </Button>
          </div>
          <div className={detail.btnBuyWrapper}>
            <Button className={detail.btnBuy} variant="contained" fullWidth>
              Buy now
            </Button>
          </div>
        </div>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12} className={detail.infoWrapper}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <div className={detail.contentInfoWrapper}>
            <span className={detail.productTitle}>Informasi Produk</span>
          </div>
          <div className={detail.contentInfoWrapper}>
            <div>
              <span className={detail.labelInfo}>Condition</span>
            </div>
            <div>
              <span className={detail.newText}>New</span>
            </div>
          </div>
          <div>
            <div>
              <span className={detail.labelInfo}>Description</span>
            </div>
            <div>
              <p className={detail.descriptionInfo}>
                Donec non magna rutrum, pellentesque augue eu, sagittis velit.
                Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum
                et malesuada fames ac ante ipsum primis in faucibus. Praesent
                sed enim vel turpis blandit imperdiet ac ac felis. Etiam
                tincidunt tristique placerat. Pellentesque a consequat mauris,
                vel suscipit ipsum. Donec ac mauris vitae diam commodo vehicula.
                Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <div className={detail.contentInfoWrapper}>
          <span className={detail.productTitle}>Product Review</span>
        </div>
      </Grid>
      <Grid item lg={2} xs={12} >
        <div className={detail.ratingAvgWrapper}>
          <div>
          <div className={detail.ratingWrapper}>
            <div>
              <span className={detail.ratingNumber}>5.0</span>
            </div>
            <div style={{ marginBottom: 15 }}>
              <span className={detail.ratingTotal}>/10</span>
            </div>
          </div>
          <div>
            <Rating value={5} readOnly />
          </div>
        </div>
        </div>
      </Grid>
      <Grid item lg={3} xs={12} className={detail.allRating}>
        <div className={detail.ratingTotalWrapper}>
          <div className={detail.ratingValue}>
            <div>
              <Rating max={1} defaultValue={1} size="small" readOnly />
            </div>
            <div className={detail.ratingInfoWrapper}>
              <span className={detail.ratingInfo}>5</span>
            </div>
          </div>
          <div className={detail.lineProgresWrapper}>
            <BorderLinearProgress variant="determinate" value={20} />
          </div>
          <div>
            <span className={detail.ratingInfo}>4</span>
          </div>
        </div>

        <div className={detail.ratingTotalWrapper}>
          <div className={detail.ratingValue}>
            <div>
              <Rating max={1} defaultValue={1} size="small" readOnly />
            </div>
            <div className={detail.ratingInfoWrapper}>
              <span className={detail.ratingInfo}>4</span>
            </div>
          </div>
          <div className={detail.lineProgresWrapper}>
            <BorderLinearProgress variant="determinate" value={20} />
          </div>
          <div>
            <span className={detail.ratingInfo}>0</span>
          </div>
        </div>

        <div className={detail.ratingTotalWrapper}>
          <div className={detail.ratingValue}>
            <div>
              <Rating max={1} defaultValue={1} size="small" readOnly />
            </div>
            <div className={detail.ratingInfoWrapper}>
              <span className={detail.ratingInfo}>3</span>
            </div>
          </div>
          <div className={detail.lineProgresWrapper}>
            <BorderLinearProgress variant="determinate" value={20} />
          </div>
          <div>
            <span className={detail.ratingInfo}>0</span>
          </div>
        </div>

        <div className={detail.ratingTotalWrapper}>
          <div className={detail.ratingValue}>
            <div>
              <Rating max={1} defaultValue={1} size="small" readOnly />
            </div>
            <div className={detail.ratingInfoWrapper}>
              <span className={detail.ratingInfo}>2</span>
            </div>
          </div>
          <div className={detail.lineProgresWrapper}>
            <BorderLinearProgress variant="determinate" value={20} />
          </div>
          <div>
            <span className={detail.ratingInfo}>0</span>
          </div>
        </div>

        <div className={detail.ratingTotalWrapper}>
          <div className={detail.ratingValue}>
            <div>
              <Rating max={1} defaultValue={1} size="small" readOnly />
            </div>
            <div className={detail.ratingInfoWrapper}>
              <span className={detail.ratingInfo}>1</span>
            </div>
          </div>
          <div className={detail.lineProgresWrapper}>
            <BorderLinearProgress variant="determinate" value={20} />
          </div>
          <div>
            <span className={detail.ratingInfo}>0</span>
          </div>
        </div>
      </Grid>
      <Grid item lg={12} xs={12} sm={12} md={12} className={detail.hrSpacing} >
        <div>
          <hr className={detail.hr}/>
        </div>
      </Grid>
    </>
  );
}

export default ProductDetails;
