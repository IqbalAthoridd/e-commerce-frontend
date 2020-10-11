import React from 'react';
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
import {useSelector} from 'react-redux'
import Paper from '@material-ui/core/Paper'
import styles from './item.module.css'




const ItemList = ({data}) => {
  const card = CardStyles();
  // const [value, setValue] = React.useState(5);
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
              <CardActionArea className={card.actionArea}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={`http://localhost:8080/${data.picture}`}
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
