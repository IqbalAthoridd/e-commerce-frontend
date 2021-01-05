import React, { useEffect } from 'react';
import { Button, Grid, withStyles, CircularProgress,Snackbar} from '@material-ui/core';
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
import NumberFormat from 'react-number-format';
import MuiAlert from '@material-ui/lab/Alert';
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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}



function ProductDetails() {
  const detail = detailStyle();
  const location = useLocation();
  const dispatch = useDispatch();
  const { id } = useParams();
  const token = localStorage.getItem('token') || '';

  const details = useSelector((state) => state.details);
  const cart = useSelector(state=>state.cart)

  const [jumlah, setJumlah] = React.useState(1);

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

  const handleAlert=()=>{
    dispatch(cartAction.clearMessage())
  }

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
        {console.log(details)}
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
            <span className={detail.productTitle}>{name}</span>
          </div>
          <div>
            <span className={detail.brandTitle}>{category}</span>
          </div>
          <div className={detail.ratingWrapper}>
            <div>
              <Rating name="read-only" size="small" value={ratings} readOnly />
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
            <NumberFormat
              value={price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'Rp.'}
              renderText={(value) => (
                <div className={detail.priceTitle}>{value}</div>
              )}
            />
          </div>
        </div>
        <div className={detail.contentWrapper2}>
          <div>
            <span className={detail.labelTitle}>color</span>
            <div>
              <div>
                <Radio />
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
                <IconButton onClick={()=>setJumlah(jumlah-1)} disabled={jumlah==1?true:false} className={detail.btnMin}>
                  <RemoveIcon className={detail.iconMin} />
                </IconButton>
              </div>
              <div className={detail.numberWrapper}>
                <span className={detail.labelTitle}>{jumlah}</span>
              </div>
              <div>
                <IconButton onClick={()=>setJumlah(jumlah+1)} className={detail.btnPlus}>
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
            <Button disabled={cart.isLoading?true:false} onClick={()=>addtoCart(id,jumlah)} className={detail.addBag} variant="outlined" fullWidth>
              {cart.isLoading?(
                <CircularProgress
                size={23}
                style={{ color: '#9b9b9b' }}
              />
              ):(
                <span>Add bag</span>
              )}
              
            </Button>
          </div>
          <div className={detail.btnBuyWrapper}>
            <Button className={detail.btnBuy} variant="contained" fullWidth>
              Buy now
            </Button>
          </div>
        </div>
        {cart.isSuccess&&(
          <Snackbar open={true} autoHideDuration={3000} onClose={handleAlert}>
          <Alert severity="success" onClose={handleAlert}>
            Added to cart!
          </Alert>
        </Snackbar>
         )}
          {cart.isError&&(
          <Snackbar open={true} autoHideDuration={3000} onClose={handleAlert}>
          <Alert severity="error" onClose={handleAlert}>
            Already added to cart!
          </Alert>
        </Snackbar>
         )}
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
              <span className={detail.newText}>{condition}</span>
            </div>
          </div>
          <div>
            <div>
              <span className={detail.labelInfo}>Description</span>
            </div>
            <div>
              <p className={detail.descriptionInfo}>{description}</p>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <div className={detail.contentInfoWrapper}>
          <span className={detail.productTitle}>Product Review</span>
        </div>
      </Grid>
      <Grid item lg={2} xs={12}>
        <div className={detail.ratingAvgWrapper}>
          <div>
            <div className={detail.ratingWrapper}>
              <div>
                <span className={detail.ratingNumber}>{ratings||0.0}</span>
              </div>
              <div style={{ marginBottom: 15 }}>
                <span className={detail.ratingTotal}>/10</span>
              </div>
            </div>
            <div>
              <Rating value={ratings} readOnly />
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
      <Grid item lg={12} xs={12} sm={12} md={12} className={detail.hrSpacing}>
        <div>
          <hr className={detail.hr} />
        </div>
      </Grid>
    </>
  );
}

export default ProductDetails;
