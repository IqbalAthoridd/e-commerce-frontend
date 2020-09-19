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
    marginTop: '9%',
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
          xs={11}
          sm={8}
          lg={4}
          xl={5}
          alignContent="center"
          className={classes.marginContainer}
        >
          <Grid item md={12} className={classes.textCenter}>
            <div className={classes.marginImage}>
              <img src={Logo} className={classes.image} />
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
                <FormControl fullWidth="true">
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
        </Grid>
      </Grid>
      {/* <Row className="justify-content-center">
        <Col md={4} className="text-center">
          <Col md="12" xs="12" className="pl-5">
            <Col md="" xs="6">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Col>
          </Col>
          <Col md="12">
            <span>Please login with your account</span>
          </Col>
          <Col md="12">
            <ButtonGroup>
              <Button color="danger">Custommer</Button>
              <Button>Seller</Button>
            </ButtonGroup>
          </Col>
          <Col md="12" className="p-0">
            <Form>
              <FormGroup className="m-0">
                <Label for="email"></Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password"></Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                />
              </FormGroup>
              <Col md="12" className="text-right p-0">
                <span>Forgot Password</span>
              </Col>
              <Col md="12" className="p-0">
                <Button className="rounded-pill" color="danger" block>
                  Login
                </Button>
              </Col>
            </Form>
          </Col>
        </Col>
      </Row> */}
    </>
  );
};

export default Login;
