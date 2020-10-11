import React, {useState} from 'react';
import Logo from '../../assets/img/Logo.svg';
import {
  Grid,
  FormControl,
  Input,
  InputLabel,
  ButtonGroup,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Form.module.css';
import { useStyles, ButtonStyle } from './formStles';
const Login = () => {
  const classes = useStyles();
  const button = ButtonStyle();
  const [form,setform] = useState(true)

  const changeForm =()=>{
    setform(!form)
  }
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
              {form===true?(
                 <Button variant="outlined"  className={button.Custommer}>
                 Custommer
               </Button>
              ):(
                <Button variant="outlined" onClick={changeForm} className={button.Custommer2} active>
                 Custommer
               </Button>
              )}
             
              <Button variant="outlined" onClick={form===true&&changeForm} className={button.Seller}>
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
