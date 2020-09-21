import React from 'react';
import Logo from '../../assets/img/Logo.svg';
import {
  Grid,
  FormControl,
  Input,
  InputLabel,
  ButtonGroup,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import './Form.module.css';

const useStyles = makeStyles({
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

const ButtonStyle = makeStyles({
  root: {
    '&:focus': {
      outline: 'none',
    },
  },

  Color: {
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

const Login = () => {
  const classes = useStyles();
  const button = ButtonStyle();
  return (
    <>
      <Grid container justify="center">
        <Grid
          item
          md={5}
          xs={10}
          sm={5}
          lg={3}
          xl={5}
          alignContent="center"
          className={classes.marginContainer}
        >
          <Grid item md={12} className={classes.textCenter}>
            <div className={classes.marginImage}>
              <img src={Logo} className={classes.image} alt="Logo" />
            </div>
            <div>
              <span className={classes.ltext}>
                Please login with your account
              </span>
            </div>
          </Grid>
          <Grid item md={8} xs={7} className={classes.buttonCon}>
            <ButtonGroup variant="contained" size="large" fullWidth="true">
              <Button variant="outlined" className={button.Color}>
                Custommer
              </Button>
              <Button variant="outlined" className={button.Color}>
                Seller
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item md={12} xs={12} className={classes.textCenter}>
            <Grid item md={12} xs={12} sm={12}>
              <from>
                <FormControl fullWidth="true" className={classes.marginInput}>
                  <InputLabel htmlFor="email">Email address</InputLabel>
                  <Input
                    id="email"
                    aria-describedby="my-helper-text"
                    fullWidth="true"
                    type="email"
                  />
                </FormControl>
                <FormControl fullWidth="true">
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    id="password"
                    type="password"
                    aria-describedby="my-helper-text"
                    fullWidth="true"
                  />
                </FormControl>
                <Grid md={12} className={classes.textRight}>
                  <span className={classes.forgotPass}>Forgot password?</span>
                </Grid>
                <Grid md={12}>
                  <Button
                    variant="contained"
                    fullWidth={true}
                    className={button.Login}
                    size="medium"
                  >
                    Login
                  </Button>
                </Grid>
              </from>
            </Grid>
          </Grid>
          <Grid item md={12} className={classes.marginTextRegister}>
            <span className={classes.registerText}>
              Don't have a warung account?{' '}
              <Link to="/Register" className={classes.textLink}>
                <span>Register</span>
              </Link>
            </span>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
