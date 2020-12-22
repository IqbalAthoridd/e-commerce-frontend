import React, { useState, useEffect } from 'react';
import Logo from '../../assets/img/Logo.svg';
import {
  Grid,
  FormControl,
  ButtonGroup,
  Button,
  makeStyles,
  TextField,
  fade,
} from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';
import './Form.module.css';
import { useStyles, ButtonStyle } from './formStles';
import { useSelector, useDispatch } from 'react-redux';
import authAction from '../../redux/action/auth';
import { useHistory } from 'react-router-dom';
import InputTextNew from './InputTextNew'

const Login = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const button = ButtonStyle();
  const dispatch = useDispatch();

  const [form, setform] = useState(true);
  const auth = useSelector((state) => state.auth);
  const [input, setInput] = useState({ email: '', password: '' });
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (auth.isLogin) {
      history.push('/cart');
    }
  }, [auth.isLogin]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const changeForm = () => {
    setform(!form);
  };

  const loginUser = (e) => {
    e.preventDefault();
    const { email, password } = input;
    let data = {
      email,
      password,
    };
    dispatch(authAction.login(data));
  };

  const onChangeText = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            {auth.alertMsg}
          </Alert>
        </Snackbar>
      </div>
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
            <ButtonGroup variant="contained" size="large" fullWidth>
              {form === true ? (
                <Button variant="outlined" className={button.Custommer}>
                  Custommer
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  onClick={changeForm}
                  className={button.Custommer2}
                  active
                >
                  Custommer
                </Button>
              )}

              <Button
                variant="outlined"
                onClick={form === true ? changeForm : undefined}
                className={button.Seller}
              >
                Seller
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item md={12} xs={12} className={classes.textCenter}>
            <Grid item md={12} xs={12} sm={12}>
              <form onSubmit={loginUser}>
                <FormControl className={classes.input} fullWidth>
                  <InputTextNew
                    label="Email"
                    className={classes.margin}
                    variant="filled"
                    id="email"
                    InputLabelProps={{ style: { color: '#9b9b9b' } }}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <InputTextNew
                    label="Password"
                    className={classes.margin}
                    variant="filled"
                    id="password"
                    InputLabelProps={{ style: { color: '#9b9b9b' } }}
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
                    type="submit"
                  >
                    Login
                  </Button>
                </Grid>
              </form>
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
