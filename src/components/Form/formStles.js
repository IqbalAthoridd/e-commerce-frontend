import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles({
  textCenter: {
    textAlign: 'center',
    marginBottom: '40px',
    marginTop: '40px',
  },
  textRight: {
    textAlign: 'right',
    marginBottom: '40px',
    marginTop: '20px',
  },
  image: {
    maxWidth: 140,
  },
  buttonCon: {
    marginLeft: '20%',
    marginBottom: '20px',
  },
  marginLogin: {
    marginBottom: '12px',
  },
  marginImage: {
    marginBottom: '40px',
  },
  marginContainer: {
    marginTop: '4%',
  },
  marginInput: {
    marginBottom: '10px',
  },
  marginTextRegister: {
    marginTop: '40px',
    textAlign: 'center',
  },
  ltext: {
    fontWeight: '600',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '18px',
  },
  forgotPass: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '14px',
    color: '#DB3022',
  },
  textLink: {
    textDecoration: 'none',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '14px',
    color: '#DB3022',
    '&:hover':{
      textDecoration: 'none',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '14px',
      color: '#DB3022'
    }
  },
  marginbtnLogin: {
    marginTop: '50px',
  },
  input: {
    marginBottom: '16px',
  },
  margin: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#9B9B9B',
  },
});

export const ButtonStyle = makeStyles({
  root: {
    '&:focus': {
      outline: 'none',
    },
  },

  Custommer: {
    background: '#DB3022',
    color: '#FFFFFF',
    fontSize: '14px',
    textTransform: 'none',
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: '20px',
    padding: '10px 22px',
    '&:hover': {
      background: '#DB3022',
      color: '#FFFF',
    },
    '&:focus': {
      background: '#DB3022',
      outline: 'none',
      color: '#FFFF',
    },
    '&:active': {
      background: '#DB3022',
      outline: 'nonde',
      color: '#FFFF',
    },
  },
  Custommer2: {
    background: '#ffff',
    color: '#9b9b9',
    fontSize: '14px',
    textTransform: 'none',
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: '20px',
    textTransform: 'none',
    padding: '10px 22px',
    '&:hover': {
      background: '#DB3022',
      color: '#FFFF',
    },
    '&:focus': {
      background: '#DB3022',
      outline: 'none',
      color: '#FFFF',
    },
    '&:active': {
      background: '#DB3022',
      outline: 'nonde',
      color: '#FFFF',
    },
  },
  Seller: {
    background: '#ffff',
    color: '#9b9b9',
    fontSize: '14px',
    textTransform: 'none',
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: '20px',
    textTransform: 'none',
    padding: '10px 22px',
    '&:hover': {
      background: '#DB3022',
      color: '#FFFF',
    },
    '&:focus': {
      background: '#DB3022',
      outline: 'none',
      color: '#FFFF',
    },
    '&:active': {
      background: '#DB3022',
      outline: 'nonde',
      color: '#FFFF',
    },
  },
  Login: {
    borderRadius: '20px',
    background: '#DB3022',
    fontStyle:'normal',
    fontWeight:'500',
    fontSize:'14px',
    lineHeight:'20px',
    padding:'10px 0',
    color: '#FFFFFF',
    '&:hover': {
      background: '#DB3022',
      color: '#FFFFFF',
    },
    '&:focus': {
      background: '#DB3022',
      outline: 'none',
      color: '#FFFF',
    },
    '&:active': {
      background: '#DB3022',
      outline: 'nonde',
      color: '#FFFF',
    },
  },
});
