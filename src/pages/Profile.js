import React, { useEffect, useState } from 'react';
import {
  Grid,
  Paper,
  Avatar,
  IconButton,
  FormControl,
  FormControlLabel,
  Radio,
  fade,
  makeStyles,
  Button,
  CircularProgress
} from '@material-ui/core';
import NavigationBar from '../components/Navbar/NavigationBar';
import { profileStyle } from '../components/Profile Custommer/profileStyles';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import CreateIcon from '@material-ui/icons/Create';
import ProfileInfo from '../components/Profile Custommer/ProfileInfo';
import MyAdress from '../components/Profile Custommer/MyAdress';
import MyOrder from '../components/Profile Custommer/MyOrder';
import { useDispatch, useSelector } from 'react-redux';
const { REACT_APP_BACKEND_URL } = process.env;

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const classes = profileStyle();
  const [page, setPage] = useState({
    profile: true,
    adress: false,
    order: false,
  });

  useEffect(() => {
    document.body.style.backgroundColor = '#E5E5E5';
  }, []);

  const myAccount = () => {
    setPage({ profile: true, adress: false, order: false });
  };

  const myAdress = (e) => {
    setPage({ profile: false, adress: true, order: false });
  };

  const myOrder = () => {
    setPage({ profile: false, adress: false, order: true });
  };

  return (
    <>
      <NavigationBar />
      {console.log(user)}
      <Grid className={classes.container} container>
        <Grid item lg={3} md={4}>
          <Paper className={classes.paperProfileInfo} elevation={0}>
            <div className={classes.sideBarContent}>
              <div className={classes.userInfo}>
                <div>
                  <Avatar
                    src={
                      user.avatar !== null &&
                      `${REACT_APP_BACKEND_URL}${user.avatar}`
                    }
                    className={classes.avatar}
                    alt="Avatar"
                  />
                </div>
                <div className={classes.userInfoWrapper}>
                  <div>
                    <span className={classes.username}>{user.name}</span>
                  </div>
                  <div className={classes.changeProfileWrapper}>
                    <div>
                      <CreateIcon style={{ color: '#9b9b9b' }} />
                    </div>
                    <div>
                      <span className={classes.changeProfile}>
                        Ubah profile
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div onClick={myAccount} className={classes.menuWrapper}>
                  <div className={classes.btnWrapper}>
                    <IconButton
                      onClick={myAccount}
                      className={classes.btnProfile}
                    >
                      <PersonOutlineIcon className={classes.icon} />
                    </IconButton>
                  </div>
                  <div>
                    <span
                      className={
                        page.profile
                          ? classes.iconLabelActive
                          : classes.iconLabel
                      }
                    >
                      My account
                    </span>
                  </div>
                </div>
                <div onClick={myAdress} className={classes.menuWrapper}>
                  <div className={classes.btnWrapper}>
                    <IconButton
                      onClick={myAdress}
                      className={classes.btnLocation}
                    >
                      <RoomOutlinedIcon className={classes.icon} />
                    </IconButton>
                  </div>
                  <div>
                    <span
                      className={
                        page.adress
                          ? classes.iconLabelActive
                          : classes.iconLabel
                      }
                    >
                      Shipping Adrress
                    </span>
                  </div>
                </div>
                <div onClick={myOrder} className={classes.menuWrapper}>
                  <div className={classes.btnWrapper}>
                    <IconButton onClick={myOrder} className={classes.btnOrder}>
                      <AssignmentOutlinedIcon className={classes.icon} />
                    </IconButton>
                  </div>
                  <div>
                    <span
                      className={
                        page.order ? classes.iconLabelActive : classes.iconLabel
                      }
                    >
                      My order
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        </Grid>
        {page.profile && <ProfileInfo />}
        {page.adress && <MyAdress />}
        {page.order && <MyOrder />}
      </Grid>
    </>
  );
}

export default Profile;
