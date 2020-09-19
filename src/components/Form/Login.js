import React from 'react';
// import {
//   Col,
//   Row,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Button,
//   ButtonGroup,
// } from 'reactstrap';
import Logo from '../../assets/img/Logo.svg';
import style from './Form.module.css';
import {
  Grid,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  ButtonGroup,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
    marginTop: '6%',
  },
  marginInput: {
    marginBottom: '10px',
  },
});

const ButtonStyle = makeStyles({
  root: {
    '&:focus': {
      outline: 'none',
    },
  },
  login: {
    borderRadius: '20px',
    '&:focus': {
      outline: 'none',
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
              <span>Please login with your account</span>
            </div>
          </Grid>
          <Grid item md={8} xs={7} className={classes.buttonCon}>
            <ButtonGroup variant="contained" size="large" fullWidth="true">
              <Button color="secondary" className={button.root}>
                One
              </Button>
              <Button className={button.root}>Two</Button>
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
                  <span>Forgot password?</span>
                </Grid>
                <Grid md={12}>
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth={true}
                    className={button.login}
                    size="medium"
                  >
                    Login
                  </Button>
                </Grid>
              </from>
            </Grid>
          </Grid>
          <Grid item md={12} className={classes.textCenter}>
            <span>
              Don't have a warung account? <span>Register</span>
            </span>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
