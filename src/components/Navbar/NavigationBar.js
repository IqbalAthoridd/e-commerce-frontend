import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Logo from '../../assets/img/Logo.svg';
import { FormControl, Grid, Menu, MenuItem } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SortIcon from '@material-ui/icons/Sort';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  TextField,
  Avatar,
  makeStyles,
  fade,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AuthAction from '../../redux/action/auth';
import { useStyles } from './navbarStyls';
import filter from '../../assets/img/filter.svg';
import ReorderIcon from '@material-ui/icons/Reorder';
import { useHistory } from 'react-router-dom';
const { REACT_APP_BACKEND_URL } = process.env;

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
    paddingTop: 4,
    paddingBottom: 4,
    '&:hover': {
      backgroundColor: '#fff',
    },
    '&$focused': {
      backgroundColor: '#fff',
      boxShadow: `${fade(theme.palette.text.secondary, 0.25)} 0 0 0 1px`,
      borderColor: '#9B9B9B',
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 0,
      paddingBottom: 0,
      fontSize: '12px',
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
  const history = useHistory();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const token = localStorage.getItem('token') || '';
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const theme = useTheme();
  const [search, setSearch] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const login = false;

  // useEffect(() => {
  //   if (token.length) {
  //     dispatch(AuthAction.getProfile(token));
  //   }
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };

  const logout = () => {
    dispatch({type:'USER_LOGOUT'});
    history.push('/login')
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorE2(null);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <AppBar elevation={2} position="static" className={classes.NavigationBar}>
        <Grid container alignItems="center" direction="row">
          {console.log('PPPPP')}
          <Grid item>
            <Link to="/">
              <img src={Logo} className={classes.logo} alt="Logo" />
            </Link>
          </Grid>
          <form onSubmit={handleSubmit} style={{ flex: 1 }}>
            <Grid item>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <FormControl className={classes.formControl} fullWidth>
                  <InputTextNew
                    value={search}
                    onChange={handleChange}
                    placeholder="Search"
                  />
                  <SearchIcon className={classes.searchIcon} />
                </FormControl>

                <IconButton className={classes.btnFilter} variant="outlined">
                  <img
                    src={filter}
                    className={classes.filterLogo}
                    alt="iconFilter"
                  />
                </IconButton>
              </div>
              <Menu
                id="simple-menu"
                anchorEl={anchorE2}
                keepMounted
                open={Boolean(anchorE2)}
                onClose={handleClose2}
              >
                <Link to="/profile">
                  <MenuItem onClick={handleClose2}>MyProfile</MenuItem>
                </Link>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </Grid>
          </form>
          {useMediaQuery(theme.breakpoints.down('sm')) ? (
            <div>
              <IconButton onClick={handleClick} className={classes.btnMenu}>
                <ReorderIcon className={classes.iconReorder} />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {token.length ? (
                  <div>
                    <Link to="/profile">
                      <MenuItem onClick={handleClose}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}
                        >
                          <Avatar
                            className={classes.avatar}
                            alt="Iqbal Athorid"
                          />
                          <span
                            style={{ marginLeft: '10px', color: '#9b9b9b' }}
                          >
                            Iqbal Athorid
                          </span>
                        </div>
                      </MenuItem>
                    </Link>
                    <MenuItem onClick={handleClose}>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}
                      >
                        <ShoppingCartOutlinedIcon
                          className={classes.iconCart}
                        />
                        <span style={{ marginLeft: '10px', color: '#9b9b9b' }}>
                          Cart
                        </span>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}
                        onClick={logout}
                      >
                        <NotificationsNoneIcon className={classes.iconCart} />
                        <span style={{ marginLeft: '10px', color: '#9b9b9b' }}>
                          Notifications
                        </span>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}
                      >
                        <MailOutlineIcon className={classes.iconCart} />
                        <span style={{ marginLeft: '10px', color: '#9b9b9b' }}>
                          Message
                        </span>
                      </div>
                    </MenuItem>
                  </div>
                ) : (
                  <div>
                    <MenuItem onClick={handleClose}>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          paddingLeft: '15%',
                        }}
                      >
                        <ShoppingCartOutlinedIcon
                          className={classes.iconCart}
                        />
                        <span style={{ marginLeft: '10px', color: '#9b9b9b' }}>
                          Cart
                        </span>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Button className={classes.btnLogin} varian="contained">
                        Login
                      </Button>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Button className={classes.btnSignup}>Signup</Button>
                    </MenuItem>
                  </div>
                )}
              </Menu>
            </div>
          ) : (
            <>
              {token.length ? (
                <Grid item style={{ paddingLeft: '15%' }}>
                  <div
                    style={{
                      flexDirection: 'row',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <div className={classes.btnMargin2}>
                      <Link to="/cart">
                        <ShoppingCartOutlinedIcon
                          className={classes.iconCart}
                        />
                      </Link>
                    </div>
                    <div onClick={logout} className={classes.btnMargin2}>
                      <NotificationsNoneIcon className={classes.iconCart} />
                    </div>
                    <div className={classes.btnMargin2}>
                      <MailOutlineIcon className={classes.iconCart} />
                    </div>
                    <div onClick={handleClick2}>
                      <Avatar
                        src={
                          user.avatar !== null &&
                          `${REACT_APP_BACKEND_URL}${user.avatar}`
                        }
                        className={classes.avatar}
                        alt="Iqbal Athorid"
                      />
                    </div>
                  </div>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </Grid>
              ) : (
                <Grid item style={{ paddingLeft: '15%' }}>
                  <div
                    style={{
                      flexDirection: 'row',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <div className={classes.btnMargin2}>
                      <ShoppingCartOutlinedIcon className={classes.iconCart} />
                    </div>
                    <div className={classes.btnMargin}>
                      <Link to="/Login">
                        <Button
                          className={classes.btnLogin}
                          variant="contained"
                        >
                          Login
                        </Button>
                      </Link>
                    </div>
                    <div>
                      <Link to="/register">
                        <Button
                          className={classes.btnSignup}
                          variant="outlined"
                        >
                          Signup
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Grid>
              )}
            </>
          )}
        </Grid>
      </AppBar>
    </>
  );
};

export default NavigationBar;
