import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import image from '../../assets/img/benjamin.jpg';
import './corosel.css';
import Carousel from 'react-elastic-carousel';

const CoroselStyles = makeStyles({
  alignItems: {
    textAlign: 'center',
  },
  containerGrid: {
    padding: '0 0',
  },
  imageWidit: {
    width: '100%',
  },
  corouselCOntainer: {
    marginTop: '50px',
    paddingLeft: '8%',
    paddingRight: '8%',
  },
});

const Corouser = ({data}) => {
  const corosel = CoroselStyles();
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 2.5 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
  ];
  return (
    <>
      <Grid container className={corosel.corouselCOntainer}>
        <Grid item lg={12} xs={12} md={12} sm={12}>
          <Carousel breakPoints={breakPoints}>
            <div className="corosel">
              <div className="text-image">Trend In 2020</div>
              <img
                src={image}
                className={corosel.imageWidit}
                alt="Product Items"
              />
            </div>
            <div className="corosel">
              <div className="text-image">Trend In 2020</div>
              <img
                src={image}
                className={corosel.imageWidit}
                alt="Product Items"
              />
            </div>
            <div className="corosel">
              <div className="text-image">Trend In 2020</div>
              <img
                src={image}
                className={corosel.imageWidit}
                alt="Product Items"
              />
            </div>
            <div className="corosel">
              <div className="text-image">Trend In 2020</div>
              <img
                src={image}
                className={corosel.imageWidit}
                alt="Product Items"
              />
            </div>
          </Carousel>
        </Grid>
      </Grid>
    </>
  );
};

export default Corouser;
