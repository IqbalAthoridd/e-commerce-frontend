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
import styles from './Navbar.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { TextField, Avatar } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AuthAction from '../../redux/action/auth'
const useStyles = makeStyles((theme) => ({
  NavigationBar: {
    background: '#FFFF',
    color: 'black',
    padding: '20px 7.5% 20px 7.5%',
  },
  Logo: {
    width: '90%',
    height: 'auto',
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
    textTransform: 'none',
    border: '1px solid #9b9b9b',
    marginLeft: '20px',
    borderRadius: '20px',
    padding: '8px 26px',
    color: '#9b9b9b',
    '&:focus': {
      outline: 'none',
    },
  },
  buttonLogin: {
    textTransform: 'none',
    border: '1px solid #3285A8',
    marginLeft: '30px',
    borderRadius: '20px',
    color: '#FFFF',
    padding: '8px 30px',
    backgroundColor: '#3285A8',
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      backgroundColor: '#266985',
    },
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

const NavigationBar = () => {
  const classes = useStyles();
  const isLogin = useSelector(state=>state.auth.isLogin)
  const token = localStorage.getItem("token") || ""
  const dispatch = useDispatch()

  const logout = () => {
    localStorage.clear()
    dispatch(AuthAction.logout())
  }

  return (
    <>
      <AppBar position="static" className={classes.NavigationBar}>
        <Grid
          container
          direction="row"
          alignContent="center"
          alignItems="center"
          justify="space-between"
        >
          <Grid item lg={6}>
            <div className={styles.searchContainer}>
              <div>
                <Link to="/">
                  <img src={Logo} alt="Logo" className={classes.Logo} />
                </Link>
              </div>
              <div style={{ paddingTop: '10px' }}>
                <input
                  type="text"
                  placeholder="Search"
                  style={{ width: '300px' }}
                />
              </div>
            </div>
          </Grid>
          {token.length ? (
            <Grid item lg={3}>
              <div className={styles.containerAvatar}>
                <div className={styles.iconSpacing}>
                  <Link to="/cart">
                  <ShoppingCartOutlinedIcon color="action" />
                  </Link>
                </div>
                <div className={styles.iconSpacing}>
                  <NotificationsNoneIcon />
                </div>
                <div className={styles.iconSpacing}>
                  <MailOutlineIcon />
                </div>
                <div className={styles.avatarSpacing} onClick={logout}>
                  <Avatar
                    alt="Cindy Baker"
                    src="/static/images/avatar/3.jpg"
                    className={classes.small}
                  />
                </div>
              </div>
            </Grid>
          ) : (
            <Grid lg={4}>
              <div className={styles.containerAvatar}>
                <div className={styles.cartSpacing}>
                  <ShoppingCartOutlinedIcon color="action" fontSize="medium" />
                </div>
                <div>
                  <Link to="/Login">
                    <Button variant="contained" className={classes.buttonLogin}>
                      Login
                    </Button>
                  </Link>
                </div>
                <div>
                  <Link to="/Register">
                    <Button
                      variant="outline"
                      className={classes.buttonRegister}
                    >
                      Signup
                    </Button>
                  </Link>
                </div>
              </div>
            </Grid>
          )}
        </Grid>
      </AppBar>
    </>
  );
};

export default NavigationBar;
