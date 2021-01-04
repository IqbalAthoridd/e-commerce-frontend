import { makeStyles } from '@material-ui/core';

export const detailStyle = makeStyles((theme) => ({
  link: {
    margin: '50px 0',
    [theme.breakpoints.down('xs')]: {
      margin: 'px 0',
    },
  },
  image: {},
  lContainer: {
    margin: '40px 0',
  },
  cContainer: {
    marginBottom: '40px',
  },
  pReview: {
    margin: '50px 0',
  },
  gridRat: {
    marginRight: '60px',
  },
  hrSpacing: {
    margin: '50px 0',
  },
  btnChat: {
    color: '#22222',
    border: '1.7px solid #222222',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: '25px',
    textTransform: 'none',
    '&:focus': {
      outline: 'none',
    },
  },
  addBag: {
    paddingTop: 10,
    paddingBottom: 10,
    color: '#22222',
    border: '1px solid black',
    borderRadius: '25px',
    textTransform: 'none',
    '&:focus': {
      outline: 'none',
    },
    marginLeft: '10px',
  },
  btnBuy: {
    background: '#DB3022',
    color: '#FFFF',
    textTransform: 'none',
    borderRadius: '25px',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: '10px',
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      background: '#DB3022',
    },
  },
  btnMin: {
    width: '36px',
    height: '36px',
    background: '#D5D5D5',
    '&:hover': {
      backgroundColor: '#D5D5D5',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  btnPlus: {
    width: '36px',
    height: '36px',
    background: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#FFFFF',
    },
    '&:focus': {
      outline: 'none',
    },
    boxShadow: '0px 0px 4px rgba(142, 142, 142, 0.5)',
  },
  iconMin: {
    color: '#FFFF',
  },
  iconPlus: {
    color: 'black',
  },
  productWrapper: {
    paddingLeft: 40,
    [theme.breakpoints.down('xs')]: {
      marginTop: 50,
      paddingLeft: 0,
    },
  },
  ratingWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  fontBc: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 14,
    color: '#9B9B9B',
  },
  productTitle: {
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 28,
    color: '#222222',
  },
  brandTitle: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 16,
    color: '#9B9B9B',
  },
  ratingAvg: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    color: '#9B9B9B',
  },
  contentWrapper: {
    marginBottom: 10,
  },
  priceTitle: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#222222',
  },
  contentWrapper2: {
    marginBottom: 35,
  },
  labelTitle: {
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 16,
    color: '#222222',
  },
  sizeWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 35,
  },
  countWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
  btnMin: {
    backgroundColor: '#D4D4D4',
    height: 36,
    width: 36,
    '&:active': {
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      backgroundColor: '#c7c5c5',
    },
  },
  numberWrapper: {
    paddingLeft: 17,
    paddingRight: 17,
  },
  btnWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnBuyWrapper: {
    flex: 1,
    marginLeft: 10,
  },
  btnBagWrapper: {
    width: '22%',
    [theme.breakpoints.down('xs')]: {
      width: '30%',
    },
  },
  infoWrapper: {
    marginTop: 38,
    marginBottom: 50,
  },
  labelInfo: {
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 20,
    color: '#222222',
  },
  newText: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 20,
    color: '#DB3022',
  },
  contentInfoWrapper: {
    marginBottom: 30,
  },
  descriptionInfo: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 14,
    color: '#9B9B9B',
  },
  ratingWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  ratingNumber: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 60,
    color: '#222222',
  },
  ratingTotal: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    color: '#9B9B9B',
  },
  ratingTotalWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingValue: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingInfo: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 14,
    color: '#9B9B9B',
  },
  lineProgresWrapper: {
    flex: 1,
    marginLeft: 25,
    marginRight: 25,
  },
  ratingInfoWrapper: {
    marginBottom: 5,
    marginLeft: 5,
  },
  hr: {
    border: '1px solid #D4D4D4',
  },
  allRating: {
    [theme.breakpoints.down('xs')]: {
      marginTop: 10,
    },
  },
  ratingAvgWrapper: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  alert: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
