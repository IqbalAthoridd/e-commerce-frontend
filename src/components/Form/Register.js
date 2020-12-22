import React, { useState, useEffect } from 'react';

import Logo from '../../assets/img/Logo.svg';
import { Grid, FormControl, ButtonGroup, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles, ButtonStyle } from './formStles';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import registerAction from '../../redux/action/register';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import InputTextNew from './InputTextNew';

const Register = () => {
  const classes = useStyles();
  const button = ButtonStyle();
  const dispatch = useDispatch();
  const history = useHistory();

  const [form, setform] = useState(true);
  const [inputCustommer, setInputCustommer] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [inputSeller, setInputSeller] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
  });
  const register = useSelector((state) => state.register);

  useEffect(() => {
    if (!register.isError) {
      setInputCustommer({ name: '', email: '', password: '' });
    }
  }, [register.isError]);

  const changeForm = () => {
    setform(!form);
  };

  const registerCustommer = (e) => {
    e.preventDefault();
    const { name, email, password } = inputCustommer;
    let data = {
      name,
      email,
      password,
    };
    dispatch(registerAction.register(data));
  };

  const onChangeText = (e) => {
    setInputCustommer({ ...inputCustommer, [e.target.name]: e.target.value });
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      {register.isLoading && (
        <Backdrop open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}

      {register.isError && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          {console.log('ok')}
          <Alert onClose={handleClose} severity="success">
            This is a success message!
          </Alert>
        </Snackbar>
      )}

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
                Please sign up with your account
              </span>
            </div>
          </Grid>
          <Grid item md={8} xs={7} className={classes.buttonCon}>
            <ButtonGroup variant="outlined" size="large" fullWidth>
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
            <Grid item md={12} xs={12} sm={12}>
              {form ? (
                <form onSubmit={registerCustommer}>
                  <FormControl className={classes.input} fullWidth>
                    <InputTextNew
                      label="Name"
                      className={classes.margin}
                      variant="filled"
                      InputLabelProps={{ style: { color: '#9b9b9b' } }}
                    />
                  </FormControl>
                  <FormControl className={classes.input} fullWidth>
                    <InputTextNew
                      label="Email"
                      className={classes.margin}
                      type="email"
                      variant="filled"
                      InputLabelProps={{ style: { color: '#9b9b9b' } }}
                    />
                  </FormControl>
                  <FormControl fullWidth>
                    <InputTextNew
                      label="Password"
                      className={classes.margin}
                      type="password"
                      variant="filled"
                      InputLabelProps={{ style: { color: '#9b9b9b' } }}
                    />
                  </FormControl>

                  <Grid item md={12} className={classes.marginbtnLogin}>
                    <Button
                      variant="contained"
                      type="submit"
                      fullWidth
                      className={button.Login}
                      size="medium"
                    >
                      Register
                    </Button>
                  </Grid>
                </form>
              ) : (
                <form>
                  <FormControl className={classes.input} fullWidth>
                    <InputTextNew
                      label="Name"
                      className={classes.margin}
                      type="text"
                      variant="filled"
                      InputLabelProps={{ style: { color: '#9b9b9b' } }}
                    />
                  </FormControl>
                  <FormControl className={classes.input} fullWidth>
                    <InputTextNew
                      label="Email"
                      className={classes.margin}
                      type="email"
                      variant="filled"
                      InputLabelProps={{ style: { color: '#9b9b9b' } }}
                    />
                  </FormControl>
                  <FormControl className={classes.input} fullWidth>
                    <InputTextNew
                      label="Phone number"
                      className={classes.margin}
                      type="text"
                      variant="filled"
                      InputLabelProps={{ style: { color: '#9b9b9b' } }}
                    />
                  </FormControl>
                  <FormControl className={classes.input} fullWidth>
                    <InputTextNew
                      label="Store name"
                      className={classes.margin}
                      type="text"
                      variant="filled"
                      InputLabelProps={{ style: { color: '#9b9b9b' } }}
                    />
                  </FormControl>
                  <FormControl fullWidth>
                    <InputTextNew
                      label="Password"
                      className={classes.margin}
                      type="password"
                      variant="filled"
                      InputLabelProps={{ style: { color: '#9b9b9b' } }}
                    />
                  </FormControl>

                  <Grid item md={12} className={classes.marginbtnLogin}>
                    <Button
                      variant="contained"
                      fullWidth
                      className={button.Login}
                      size="medium"
                    >
                      Register
                    </Button>
                  </Grid>
                </form>
              )}
            </Grid>
          </Grid>
          <Grid
            item
            md={12}
            style={{ textAlign: 'center', marginBottom: '40px' }}
          >
            <span>
              Already have a warung account?
              <Link to="/Login" className={classes.textLink}>
                <span>Login</span>
              </Link>
            </span>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Register;
