import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import image from '../../assets/img/produk.jpg';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const CardStyles = makeStyles({
  containerCard: {
    padding: '0 8%',
    marginTop: '20px',
  },
  Size: {
    width: '100%',

    '&:focus': {
      outline: 'none',
      border: 'none',
    },
    '&:active': {
      outline: 'none',
      border: 'none',
    },
  },
  cardContent: {
    padding: '10px 10px',
  },
  marginBox: {
    margin: 0,
  },
  containerCardList: {
    marginBottom: '20px',
  },
  Spacing: {
    marginRight: '20px',
    marginBottom: '20px',
    display: 'inline-block',
  },
});

const ItemList = () => {
  const card = CardStyles();
  const [value, setValue] = React.useState(5);
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
          <Grid item lg={2} xs={12} className={card.Spacing}>
            <Card className={card.Size}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={image}
                  title="Contemplative Reptile"
                />
                <CardContent className={card.cardContent}>
                  <Typography gutterBottom className="text-title">
                    <span>Men's format suit - Black & White</span>
                  </Typography>
                  <Typography gutterBottom className="text-price">
                    <span>$ 40.0</span>
                  </Typography>
                  <Typography gutterBottom className="text-small">
                    <span>Zalora Cloth</span>
                  </Typography>
                  <Box
                    component="fieldset"
                    mb={3}
                    borderColor="transparent"
                    className={card.marginBox}
                  >
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={2} xs={12} className={card.Spacing}>
            <Card className={card.Size}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={image}
                  title="Contemplative Reptile"
                />
                <CardContent className={card.cardContent}>
                  <Typography gutterBottom className="text-title">
                    <span>Men's format suit - Black & White</span>
                  </Typography>
                  <Typography gutterBottom className="text-price">
                    <span>$ 40.0</span>
                  </Typography>
                  <Typography gutterBottom className="text-small">
                    <span>Zalora Cloth</span>
                  </Typography>
                  <Box
                    component="fieldset"
                    mb={3}
                    borderColor="transparent"
                    className={card.marginBox}
                  >
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={2} xs={12} className={card.Spacing}>
            <Card className={card.Size}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={image}
                  title="Contemplative Reptile"
                />
                <CardContent className={card.cardContent}>
                  <Typography gutterBottom className="text-title">
                    <span>Men's format suit - Black & White</span>
                  </Typography>
                  <Typography gutterBottom className="text-price">
                    <span>$ 40.0</span>
                  </Typography>
                  <Typography gutterBottom className="text-small">
                    <span>Zalora Cloth</span>
                  </Typography>
                  <Box
                    component="fieldset"
                    mb={3}
                    borderColor="transparent"
                    className={card.marginBox}
                  >
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={2} xs={12} className={card.Spacing}>
            <Card className={card.Size}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={image}
                  title="Contemplative Reptile"
                />
                <CardContent className={card.cardContent}>
                  <Typography gutterBottom className="text-title">
                    <span>Men's format suit - Black & White</span>
                  </Typography>
                  <Typography gutterBottom className="text-price">
                    <span>$ 40.0</span>
                  </Typography>
                  <Typography gutterBottom className="text-small">
                    <span>Zalora Cloth</span>
                  </Typography>
                  <Box
                    component="fieldset"
                    mb={3}
                    borderColor="transparent"
                    className={card.marginBox}
                  >
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={2} xs={12} className={card.Spacing}>
            <Card className={card.Size}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={image}
                  title="Contemplative Reptile"
                />
                <CardContent className={card.cardContent}>
                  <Typography gutterBottom className="text-title">
                    <span>Men's format suit - Black & White</span>
                  </Typography>
                  <Typography gutterBottom className="text-price">
                    <span>$ 40.0</span>
                  </Typography>
                  <Typography gutterBottom className="text-small">
                    <span>Zalora Cloth</span>
                  </Typography>
                  <Box
                    component="fieldset"
                    mb={3}
                    borderColor="transparent"
                    className={card.marginBox}
                  >
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={2} xs={12} className={card.Spacing}>
            <Card className={card.Size}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={image}
                  title="Contemplative Reptile"
                />
                <CardContent className={card.cardContent}>
                  <Typography gutterBottom className="text-title">
                    <span>Men's format suit - Black & White</span>
                  </Typography>
                  <Typography gutterBottom className="text-price">
                    <span>$ 40.0</span>
                  </Typography>
                  <Typography gutterBottom className="text-small">
                    <span>Zalora Cloth</span>
                  </Typography>
                  <Box
                    component="fieldset"
                    mb={3}
                    borderColor="transparent"
                    className={card.marginBox}
                  >
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={2} xs={12} className={card.Spacing}>
            <Card className={card.Size}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={image}
                  title="Contemplative Reptile"
                />
                <CardContent className={card.cardContent}>
                  <Typography gutterBottom className="text-title">
                    <span>Men's format suit - Black & White</span>
                  </Typography>
                  <Typography gutterBottom className="text-price">
                    <span>$ 40.0</span>
                  </Typography>
                  <Typography gutterBottom className="text-small">
                    <span>Zalora Cloth</span>
                  </Typography>
                  <Box
                    component="fieldset"
                    mb={3}
                    borderColor="transparent"
                    className={card.marginBox}
                  >
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={2} xs={12} className={card.Spacing}>
            <Card className={card.Size}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={image}
                  title="Contemplative Reptile"
                />
                <CardContent className={card.cardContent}>
                  <Typography gutterBottom className="text-title">
                    <span>Men's format suit - Black & White</span>
                  </Typography>
                  <Typography gutterBottom className="text-price">
                    <span>$ 40.0</span>
                  </Typography>
                  <Typography gutterBottom className="text-small">
                    <span>Zalora Cloth</span>
                  </Typography>
                  <Box
                    component="fieldset"
                    mb={3}
                    borderColor="transparent"
                    className={card.marginBox}
                  >
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={2} xs={12} className={card.Spacing}>
            <Card className={card.Size}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={image}
                  title="Contemplative Reptile"
                />
                <CardContent className={card.cardContent}>
                  <Typography gutterBottom className="text-title">
                    <span>Men's format suit - Black & White</span>
                  </Typography>
                  <Typography gutterBottom className="text-price">
                    <span>$ 40.0</span>
                  </Typography>
                  <Typography gutterBottom className="text-small">
                    <span>Zalora Cloth</span>
                  </Typography>
                  <Box
                    component="fieldset"
                    mb={3}
                    borderColor="transparent"
                    className={card.marginBox}
                  >
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={2} xs={12} className={card.Spacing}>
            <Card className={card.Size}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={image}
                  title="Contemplative Reptile"
                />
                <CardContent className={card.cardContent}>
                  <Typography gutterBottom className="text-title">
                    <span>Men's format suit - Black & White</span>
                  </Typography>
                  <Typography gutterBottom className="text-price">
                    <span>$ 40.0</span>
                  </Typography>
                  <Typography gutterBottom className="text-small">
                    <span>Zalora Cloth</span>
                  </Typography>
                  <Box
                    component="fieldset"
                    mb={3}
                    borderColor="transparent"
                    className={card.marginBox}
                  >
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={2} xs={12} className={card.Spacing}>
            <Card className={card.Size}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={image}
                  title="Contemplative Reptile"
                />
                <CardContent className={card.cardContent}>
                  <Typography gutterBottom className="text-title">
                    <span>Men's format suit - Black & White</span>
                  </Typography>
                  <Typography gutterBottom className="text-price">
                    <span>$ 40.0</span>
                  </Typography>
                  <Typography gutterBottom className="text-small">
                    <span>Zalora Cloth</span>
                  </Typography>
                  <Box
                    component="fieldset"
                    mb={3}
                    borderColor="transparent"
                    className={card.marginBox}
                  >
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={2} xs={12} className={card.Spacing}>
            <Card className={card.Size}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={image}
                  title="Contemplative Reptile"
                />
                <CardContent className={card.cardContent}>
                  <Typography gutterBottom className="text-title">
                    <span>Men's format suit - Black & White</span>
                  </Typography>
                  <Typography gutterBottom className="text-price">
                    <span>$ 40.0</span>
                  </Typography>
                  <Typography gutterBottom className="text-small">
                    <span>Zalora Cloth</span>
                  </Typography>
                  <Box
                    component="fieldset"
                    mb={3}
                    borderColor="transparent"
                    className={card.marginBox}
                  >
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={2} xs={12} className={card.Spacing}>
            <Card className={card.Size}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={image}
                  title="Contemplative Reptile"
                />
                <CardContent className={card.cardContent}>
                  <Typography gutterBottom className="text-title">
                    <span>Men's format suit - Black & White</span>
                  </Typography>
                  <Typography gutterBottom className="text-price">
                    <span>$ 40.0</span>
                  </Typography>
                  <Typography gutterBottom className="text-small">
                    <span>Zalora Cloth</span>
                  </Typography>
                  <Box
                    component="fieldset"
                    mb={3}
                    borderColor="transparent"
                    className={card.marginBox}
                  >
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ItemList;
