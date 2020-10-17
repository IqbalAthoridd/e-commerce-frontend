import React, {useEffect} from 'react'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import images from '../../assets/img/produk.jpg';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card';
import styles from './listCategory.module.css' ;
import {CardStyles} from './itemCategoryStyle'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory, useLocation} from 'react-router-dom'
import listProductAction from '../../redux/action/listProduct'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
const {REACT_APP_BACKEND_URL} = process.envgit 



function ItemCategory() {
    const card = CardStyles()
    const dispatch = useDispatch()
    const location = useLocation()
    const list = useSelector(state=>state.listProduct)
    
    useEffect(()=>{
          dispatch(listProductAction.getList(location.state))
    },[dispatch])

    const listProduct =(name)=> {

    }

    return (
        <>
         
         <Grid container className={card.containerCard}>
         <Grid item lg={12} xs={12} className={card.link}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Home
          </Link>
          <Link color="inherit" href="/getting-started/installation/">
            Category
          </Link>
          <Typography color="textPrimary">Handphone</Typography>
        </Breadcrumbs>
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
            <span>HandPhone</span>
          </div>
        </Grid>
        <Grid item lg={12}>
          {/* {list.map(data=>( */}
            <Grid  item lg={2} xs={12} className={card.Spacing} >
            <div className={styles.Spacing}>
              <Paper elevation={5}>
            <Card >
              <CardActionArea className={card.actionArea} onClick={()=>listProduct()}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={images}
                //   image={`http://localhost:8080/${data.picture}`}
                  title="Contemplative Reptile"
                />
                <CardContent className={card.cardContent}>
                  <Typography gutterBottom className="text-title">
          <span>Iphon 11 pro</span>
                  </Typography>
                  <Typography gutterBottom className="text-price">
          <span>$ 5000</span>
                  </Typography>
                  <Typography gutterBottom className="text-small">
          <span>Handphone</span>
                  </Typography>
                  <Box
                    component="fieldset"
                    mb={3}
                    borderColor="transparent"
                    className={card.marginBox}
                  >
                    <Rating
                      name="rating"
                      value={5}
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
          </Grid>
           {/* ))} */}
        </Grid>
        </Grid>
        </>
    )
}

export default ItemCategory
