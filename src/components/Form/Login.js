import React, { useState, useEffect } from 'react';
import Logo from '../../assets/img/Logo.svg';
import {
  Grid,
  FormControl,
  ButtonGroup,
  Button,
  CircularProgress,
} from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';
import './Form.module.css';
import { useStyles, ButtonStyle } from './formStles';
import { useSelector, useDispatch } from 'react-redux';
import authAction from '../../redux/action/auth';
import { useHistory } from 'react-router-dom';
import InputTextNew from './InputTextNew';
import userAction from '../../redux/action/auth';
import userEvent from '@testing-library/user-event';

const Login = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const button = ButtonStyle();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const [form, setform] = useState(true);
  const auth = useSelector((state) => state.auth);
  const [input, setInput] = useState({ email: '', password: '' });
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    
    const getData = async () => {
    
      if (auth.isLogin) {
        await dispatch(userAction.getProfile(token));
        history.push('/');
     } else if (auth.isError) {
       setTimeout(() => {
         dispatch(authAction.clearMessage());
       }, 4000);
     }
    }
    getData()
  }, [auth.isLogin, auth.isError]);

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
        {console.log(form)}
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
              <Button
                variant="outlined"
                onClick={!form ? changeForm : undefined}
                className={form ? button.Custommer : button.Custommer2}
                active
              >
                Custommer
              </Button>

              <Button
                variant="outlined"
                onClick={form === true ? changeForm : undefined}
                className={form === true ? button.Seller : button.Custommer}
              >
                Seller
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item md={12} xs={12} className={classes.textCenter}>
            <div style={{ marginBottom: 20 }}>
              {auth.isError && <Alert severity="Error">{auth.alertMsg}</Alert>}
            </div>
            <Grid item md={12} xs={12} sm={12}>
              <form onSubmit={loginUser}>
                <FormControl className={classes.input} fullWidth>
                  <InputTextNew
                    label="Email"
                    className={classes.margin}
                    variant="filled"
                    id="email"
                    name="email"
                    onChange={onChangeText}
                    vaue={input.email}
                    InputLabelProps={{ style: { color: '#9b9b9b' } }}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <InputTextNew
                    label="Password"
                    className={classes.margin}
                    variant="filled"
                    id="password"
                    name="password"
                    onChange={onChangeText}
                    value={input.password}
                    type="password"
                    InputLabelProps={{ style: { color: '#9b9b9b' } }}
                  />
                </FormControl>
                <Grid item md={12} className={classes.textRight}>
                  <span className={classes.forgotPass}>Forgot password?</span>
                </Grid>
                <Grid item md={12}>
                  <Button
                    variant="contained"
                    fullWidth
                    className={button.Login}
                    size="medium"
                    disabled={auth.isLoading ? true : false}
                    type="submit"
                  >
                    {auth.isLoading ? (
                      <CircularProgress
                        size={23}
                        style={{ color: '#9b9b9b' }}
                      />
                    ) : (
                      <span>Login</span>
                    )}
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
