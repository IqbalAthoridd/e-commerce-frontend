import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Logo from '../../assets/img/Logo.svg';
import { FormControl, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SortIcon from '@material-ui/icons/Sort';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Avatar, makeStyles, fade } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AuthAction from '../../redux/action/auth';
import { useStyles } from './navbarStyls';
import filter from '../../assets/img/filter.svg';

const useStylesReddit = makeStyles((theme) => ({
  root: {
    border: '1px solid #9B9B9B',
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: '#fcfcfb',
    filter: 'drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.05))',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    paddingLeft: 15,
    paddingRight: 35,
    paddingTop:4,
    paddingBottom:4,
    '&:hover': {
      backgroundColor: '#fff',
    },
    '&$focused': {
      backgroundColor: '#fff',
      boxShadow: `${fade(theme.palette.text.secondary, 0.25)} 0 0 0 1px`,
      borderColor: '#9B9B9B',
    },
  },
  focused: {},
}));

function InputTextNew(props) {
  const classes = useStylesReddit();

  return (
    <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
  );
}

const NavigationBar = () => {
  const classes = useStyles();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const token = localStorage.getItem('token') || '';
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.clear();
    dispatch(AuthAction.logout());
  };

  return (
    <>
      <AppBar elevation={2} position="static" className={classes.NavigationBar}>
        <Grid container alignItems="center" direction="row">
          <Grid item md={3} xs={5} lg={2}>
            <img src={Logo} className={styles.logo} alt="Logo" />
          </Grid>
          <Grid item style={{ flex: 1 }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <FormControl className={classes.formControl} fullWidth>
                <InputTextNew placeholder="Search" />
                <SearchIcon className={classes.searchIcon} />
              </FormControl>
              <IconButton className={classes.btnFilter} variant="outlined">
                <img src={filter} alt="iconFilter" width="20" />
              </IconButton>
            </div>
          </Grid>
          <Grid item style={{paddingLeft:'120px'}}>
            <div style={{flexDirection:'row',display:'flex',alignItems:'center'}}>
              <div className={classes.btnMargin2}>
              <ShoppingCartOutlinedIcon className={classes.iconCart} />
              </div>
            <div className={classes.btnMargin}>
              <Button className={classes.btnLogin} variant="contained">Login</Button>
            </div>
            <div>
              <Button className={classes.btnSignup} variant="outlined">Signup</Button>
            </div>
            </div>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};

export default NavigationBar;
