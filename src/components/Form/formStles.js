import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles({
    textCenter: {
      textAlign: 'center',
      marginBottom: '40px',
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
      marginBottom: '12',
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
    },
    forgotPass: {
      fontSize: '15px',
      color: '#3285A8',
    },
    textLink: {
      textDecoration: 'none',
      color: '#3285A8',
    },
  });
  
  export const ButtonStyle = makeStyles({
    root: {
      '&:focus': {
        outline: 'none',
      },
    },
  
    Custommer: {
      background: '#326da8',
      color: '#ffff',
      fontSize: '15px',
      textTransform: 'lowercase',
      '&:hover': {
        background: '#326da8',
        color: '#FFFF',
      },
      '&:focus': {
        background: '#326da8',
        outline: 'none',
        color: '#FFFF',
      },
      '&:active': {
        background: '#326da8',
        outline: 'nonde',
        color: '#FFFF',
      },
    },
    Custommer2: {
      background: '#ffff',
      color: '#9b9b9',
      fontSize: '15px',
      textTransform: 'lowercase',
      '&:hover': {
        background: '#326da8',
        color: '#FFFF',
      },
      '&:focus': {
        background: '#326da8',
        outline: 'none',
        color: '#FFFF',
      },
      '&:active': {
        background: '#326da8',
        outline: 'nonde',
        color: '#FFFF',
      },
    },
    Seller: {
      background: '#ffff',
      color: '#9b9b9',
      fontSize: '15px',
      textTransform: 'lowercase',
      '&:hover': {
        background: '#326da8',
        color: '#FFFF',
      },
      '&:focus': {
        background: '#326da8',
        outline: 'none',
        color: '#FFFF',
      },
      '&:active': {
        background: '#326da8',
        outline: 'nonde',
        color: '#FFFF',
      },
    },
    Login: {
      borderRadius: '20px',
      background: '#3285A8',
      color: '#FFF',
      '&:hover': {
        background: '#326da8',
        color: '#FFFF',
      },
      '&:focus': {
        background: '#3285A8',
        outline: 'none',
        color: '#FFFF',
      },
      '&:active': {
        background: '#3285A8',
        outline: 'nonde',
        color: '#FFFF',
      },
    },
  });