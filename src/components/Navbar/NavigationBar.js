import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Logo from '../../assets/img/Logo.svg';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SortIcon from '@material-ui/icons/Sort';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  NavigationBar: {
    background: '#FFFF',
    color: 'black',
    padding: '20px 20px 20px 7.5%',
  },
  Logo: {
    width: '70%',
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    padding: '1% 18% 1% 1%',
  },
  iconButton: {
    padding: 0,
    right: 15,
    top: 8,
    position: 'absolute',
    '&:focus': {
      outline: 'none',
    },
  },
  divider: {
    height: 28,
    margin: 4,
  },
  searchBorder: {
    border: '1px solid #9b9b9b',
    borderRadius: '25px',
    paddingLeft: ' 1%',
  },
  containerSearch: {
    position: 'relative',
  },
  buttonSort: {
    padding: '0',
    flexGrow: 1,
    '&:focus': {
      outline: 'none',
    },
  },
  linkContaier: {
    textAlign: 'right',
  },
  buttonRegister: {
    border: '1px solid #9b9b9b',
    marginLeft: '30px',
    borderRadius: '20px',
    color: '#9b9b9b',
    '&:focus': {
      outline: 'none',
    },
  },
  buttonLogin: {
    border: '1px solid #3285A8',
    marginLeft: '30px',
    borderRadius: '20px',
    color: '#FFFF',
    paddingLeft: ' 8%',
    paddingRight: '8%',
    backgroundColor: '#3285A8',
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      backgroundColor: '#266985',
    },
  },
}));

const NavigationBar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.NavigationBar}>
        <Grid
          container
          direction="row"
          alignContent="center"
          alignItems="center"
        >
          
          <Grid item md={2} lg={2} xs={4}>
            <Link to="/">
            <img src={Logo} alt="Logo" className={classes.Logo} />
            </Link>
          </Grid>
          <Grid item md={3} xs={5} lg={4} className={classes.searchBorder}>
            <Grid item lg={12} className={classes.containerSearch}>
              <InputBase
                className={classes.input}
                placeholder="Search.."
                inputProps={{ 'aria-label': 'Search...' }}
                fullWidth="true"
              />
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item lg={1}>
            <IconButton className={classes.buttonSort}>
              <SortIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item lg={4} xs={12} className={classes.linkContaier}>
            <ShoppingCartOutlinedIcon color="action" />
            <Link to="/Login">
              <Button variant="contained" className={classes.buttonLogin}>
                Login
              </Button>
            </Link>
            <Link to="/Register">
              <Button variant="outline" className={classes.buttonRegister}>
                Register
              </Button>
            </Link>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};

export default NavigationBar;
