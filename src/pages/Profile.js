import React, { useEffect } from 'react';
import Profiles from '../components/Profile Custommer/Profile';
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
  Button
} from '@material-ui/core';
import NavigationBar from '../components/Navbar/NavigationBar';
import { profileStyle } from './profileStyles';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import CreateIcon from '@material-ui/icons/Create';
import InputText from '../components/Form/InputTextNew';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

const useStylesReddit = makeStyles((theme) => ({
  root: {
    border: '1px solid #9B9B9B',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#fcfcfb',
    filter: 'drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.05))',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
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

function DatePicker(props) {
  const classes = useStylesReddit();

  return (
    <KeyboardDatePicker InputProps={{ classes, disableUnderline: true }} {...props} />
  );
}

function Profile() {
  const classes = profileStyle();

  useEffect(() => {
    document.body.style.backgroundColor = '#E5E5E5';
  }, []);

  return (
    <>
      <NavigationBar />
      <Grid className={classes.container} container>
        <Grid item lg={3} md={4}>
          <Paper className={classes.paperProfileInfo} elevation={0}>
            <div className={classes.sideBarContent}>
              <div className={classes.userInfo}>
                <div>
                  <Avatar className={classes.avatar} alt="Avatar" />
                </div>
                <div className={classes.userInfoWrapper}>
                  <div>
                    <span className={classes.username}>Iqba Athorid</span>
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
                <div className={classes.menuWrapper}>
                  <div className={classes.btnWrapper}>
                    <IconButton className={classes.btnProfile}>
                      <PersonOutlineIcon className={classes.icon} />
                    </IconButton>
                  </div>
                  <div>
                    <span className={classes.iconLabelActive}>My account</span>
                  </div>
                </div>
                <div className={classes.menuWrapper}>
                  <div className={classes.btnWrapper}>
                    <IconButton className={classes.btnLocation}>
                      <RoomOutlinedIcon className={classes.icon} />
                    </IconButton>
                  </div>
                  <div>
                    <span className={classes.iconLabel}>Shipping Adrress</span>
                  </div>
                </div>
                <div className={classes.menuWrapper}>
                  <div className={classes.btnWrapper}>
                    <IconButton className={classes.btnOrder}>
                      <AssignmentOutlinedIcon className={classes.icon} />
                    </IconButton>
                  </div>
                  <div>
                    <span className={classes.iconLabel}>My order</span>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid className={classes.content} item md={9}>
          <Paper className={classes.paperContent} elevation={3}>
            <div>
              <div>
                <span className={classes.contentLabel}>My Profile</span>
              </div>
              <div>
                <span className={classes.changeProfile}>
                  Manage your profile information
                </span>
              </div>
            </div>
            <div>
              <hr />
            </div>
            <div>
              <div className={classes.formWrapper}>
                <div className={classes.inputWrapper}>
                  <FormControl className={classes.input} fullWidth>
                    <InputText
                      label="Name"
                      className={classes.margin}
                      variant="filled"
                      InputLabelProps={{ style: { color: '#9b9b9b' } }}
                    />
                  </FormControl>
                </div>
                <div className={classes.inputWrapper}>
                  <FormControl className={classes.input} fullWidth>
                    <InputText
                      label="Email"
                      className={classes.margin}
                      variant="filled"
                      InputLabelProps={{ style: { color: '#9b9b9b' } }}
                    />
                  </FormControl>
                </div>
                <div className={classes.inputWrapper}>
                  <FormControl className={classes.input} fullWidth>
                    <InputText
                      label="Phone number"
                      className={classes.margin}
                      variant="filled"
                      InputLabelProps={{ style: { color: '#9b9b9b' } }}
                    />
                  </FormControl>
                </div>
                <div className={classes.inputWrapper}>
                  <div className={classes.labelSpacing}>
                    <span className={classes.iconLabel}>Gender</span>
                  </div>
                  <div className={classes.labelSpacing}>
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Laki-laki"
                      className={classes.iconLabel}
                    />
                  </div>
                  <div className={classes.labelSpacing}>
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Perempuan"
                      className={classes.iconLabel}
                    />
                  </div>
                </div>
                <div className={classes.inputWrapper}>
                  <FormControl className={classes.input} fullWidth>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                          disableToolbar
                          variant="filled"
                          format="MM/dd/yyyy"
                          // margin="normal"
                          // label="Date picker inline"
                          // value={selectedDate}
                          // onChange={handleDateChange}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                        />
                      </MuiPickersUtilsProvider>
                  </FormControl>
                </div>
                <div style={{marginBottom:40}}>
                  <Button variant="contained">
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Profile;
