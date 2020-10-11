import React,{useEffect} from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector, useDispatch} from 'react-redux'

import image from '../../assets/img/tsirt.png';
import './corosel.css';
import Carousel from 'react-elastic-carousel';
import categoryAction from '../../redux/action/listCategory'
import listCategory from '../../redux/action/listCategory';

const CoroselStyles = makeStyles({
  alignItems: {
    textAlign: 'center',
  },
  containerGrid: {
    padding: '0 9%',
    marginTop: 50,
  },
  imageWidit: {
    width: '45%',
    position: 'absolute',
    top: '20%',
    left: '25%',
    zIndex: 1,
  },
  corouselCOntainer: {
    marginTop: '50px',
    paddingLeft: '8%',
    paddingRight: '8%',
  },
  textContainer: {
    marginBottom: '30px',
  },
});

const CorouserCategory = (props) => {
  const corosel = CoroselStyles();
  const category = useSelector(state=>state.listCategory.data)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(categoryAction.getData())
  },[dispatch])

  const breakPoints = [
    { width: 400, itemsToShow: 1 },
    { width: 500, itemsToShow: 3 },
    { width: 700, itemsToShow: 5 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
  ];
  return (
   
    <>
     {console.log(category)}
      <Grid container className={corosel.containerGrid}>
        <Grid item md={12} className={corosel.textContainer}>
          <div className="text-Category">
            <span>Category</span>
          </div>
          <div className="text-small">
            <span>What are you currently looking for</span>
          </div>
        </Grid>
        <Grid item lg={12} xs={12} md={12} sm={12}>
        <Carousel breakPoints={breakPoints}>
          {category.length ? category.map(categry=>(
            <div className="coroselCard">
          <div className="text-category">{categry.name}</div>
              <img src={`http://localhost:8080/${categry.picture}`} className={corosel.imageWidit} alt="Category" />
            </div>
          
          )):""}
          </Carousel>
        </Grid>
      </Grid>
    </>
  );
};

export default CorouserCategory;
