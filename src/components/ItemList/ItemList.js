import React, {useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import image from '../../assets/img/produk.jpg';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import {CardStyles} from './itemStyles'
import Paper from '@material-ui/core/Paper'
import styles from './item.module.css'
import {useSelector, useDispatch} from 'react-redux'
import popularAction from '../../redux/action/popularProduct'
import newItemsAction from '../../redux/action/newItems'
import {useHistory} from 'react-router-dom'
const {REACT_APP_BACKENLD_UR} = process.env




const ItemList = ({data,popular}) => {
  const card = CardStyles();
  const history = useHistory()
  // const popular = useSelector(state=>state.popularProduct.data)
  // const newProduct = useSelector(state=>state.newItems.data)
  // const dispatch = useDispatch()

  // useEffect(()=>{
  //   dispatch(popularAction.getPopular())
  //   dispatch(newItemsAction.getData())
  // },[dispatch])
  
  const detail =(id)=> {
    history.push(`/details/${id}`)
  }

  return (
    <>
      <Grid container className={card.containerCard}>
        <Grid
          item
          lg={12}
          md={12}
          xs={12}
          sm={12}
          className={card.containerCardList}
        >
          <div className="text-medium">
            <span>New</span>
          </div>
          <div className="text-small">
            <span>You've never seen it before</span>
          </div>
        </Grid>
        <Grid item lg={12}>
          {data.map(data=>(
            // <Grid key={data.id} item lg={2} xs={12} className={card.Spacing} >
            <div className={styles.Spacing}>
              <Paper elevation={5}>
            <Card >
              <CardActionArea className={card.actionArea} onClick={()=>detail(data.id)}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={`${REACT_APP_BACKEND_URL}${data.picture}`}
                  title="Contemplative Reptile"
                />
                <CardContent className={card.cardContent}>
                  <Typography gutterBottom className="text-title">
          <span>{data.name}</span>
                  </Typography>
                  <Typography gutterBottom className="text-price">
          <span>$ {data.price}</span>
                  </Typography>
                  <Typography gutterBottom className="text-small">
          <span>{data.category}</span>
                  </Typography>
                  <Box
                    component="fieldset"
                    mb={3}
                    borderColor="transparent"
                    className={card.marginBox}
                  >
                    <Rating
                      name="rating"
                      value={data.ratings}
                      precision={0.5}
                      size="small"
                      readOnly
                      
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
            </Paper>
            </div>
          // </Grid>
          ))}
        </Grid>

        <Grid
          item
          lg={12}
          md={12}
          xs={12}
          sm={12}
          className={card.containerCardList}
        >
          <div className="text-medium">
            <span>Pupular</span>
          </div>
          <div className="text-small">
            <span>Find clothes that are trending recently</span>
          </div>
        </Grid>
        <Grid item lg={12}>
          {popular.map(data=>(
            // <Grid key={data.id} item lg={2} xs={12} className={card.Spacing} >
            <div className={styles.Spacing}>
              <Paper elevation={5}>
            <Card >
              <CardActionArea className={card.actionArea} onClick={detail}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={`${REACT_APP_BACKENLD_URL}${data.picture}`}
                  title="Contemplative Reptile"
                />
                <CardContent className={card.cardContent}>
                  <Typography gutterBottom className="text-title">
          <span>{data.name}</span>
                  </Typography>
                  <Typography gutterBottom className="text-price">
          <span>$ {data.price}</span>
                  </Typography>
                  <Typography gutterBottom className="text-small">
          <span>{data.category}</span>
                  </Typography>
                  <Box
                    component="fieldset"
                    mb={3}
                    borderColor="transparent"
                    className={card.marginBox}
                  >
                    <Rating
                      name="rating"
                      value={data.ratings}
                      precision={0.5}
                      size="small"
                      readOnly
                      
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
            </Paper>
            </div>
          // </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default ItemList;
