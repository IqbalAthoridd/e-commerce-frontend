import React, { useEffect } from 'react';
import { Grid, Box } from '@material-ui/core';
import styles from './profile.module.css';
import Avatar from '@material-ui/core/Avatar';
import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import { profileStyle } from './stylesProfile';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import DateFnsUtils from '@date-io/date-fns';
import axios from 'axios';
import http from '../../helpers/http';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';

function Profile() {
  const profile = profileStyle();
  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2014-08-18T21:11:54'),
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [name, setName] = React.useState('');
  const [email, setemail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [dateOfBirth, setDateOfBirth] = React.useState('');

  React.useState(async () => {
    const { data } = await http(localStorage.getItem('token')).get(
      'http://localhost:8080/customer/profile',
    );
    setName(data.data.name);
    setemail(data.data.email);
    setPhoneNumber(data.data.phone_number);
    setGender(data.data.gender);
    setDateOfBirth(data.data.birt_day);
  }, []);

  return (
    <>
      <Grid item lg={3}>
        <div className={styles.sideContainer}>
          <div>
            <div className={styles.userInfo}>
              <div className={styles.imageContainer}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </div>
              <div>
                <div>{name}</div>
                <div>
                  <CreateIcon fontSize="small" />
                  Ubah profile
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.userInfo}>
              <div className={styles.iconSpacing}>
                <IconButton aria-label="delete" className={profile.btnPerson}>
                  <PersonOutlineIcon
                    fontSize="small"
                    className={profile.iconColor}
                  />
                </IconButton>
              </div>
              <div>
                <span>My account</span>
              </div>
            </div>
            <div>
              <div className={styles.userInfo}>
                <div className={styles.iconSpacing}>
                  <IconButton className={profile.btnLocation}>
                    <LocationOnOutlinedIcon
                      fontSize="small"
                      className={profile.iconColor}
                    />
                  </IconButton>
                </div>
                <div>
                  <span>Shipping Adress</span>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.userInfo}>
                <div>
                  <IconButton className={profile.btnOrder}>
                    <AssignmentOutlinedIcon
                      fontSize="small"
                      className={profile.iconColor}
                    />
                  </IconButton>
                </div>
                <div>
                  <span>My Order</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item lg={9} className={styles.contentPadding}>
        <Grid item lg={12}>
          <Paper elevation={0} className={styles.tablePadding}>
            <Grid item lg={12} style={{ marginTop: '34px' }}>
              <div>
                <span>My Profile</span>
              </div>
              <div style={{ borderBottom: '1px solid #9b9b9b' }}>
                Manage your profile information
              </div>
            </Grid>
            <div className={styles.radio2}>
              <Grid item lg={7}>
                <form>
                  <div className={styles.inputContainer}>
                    <div>
                      <span>Name</span>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Username"
                        value={name}
                        className={styles.inputField}
                      />
                    </div>
                  </div>
                  <div className={styles.inputContainer}>
                    <div>
                      <span>Email</span>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Username"
                        value={email}
                        className={styles.inputField}
                      />
                    </div>
                  </div>
                  <div className={styles.inputContainer}>
                    <div>
                      <span>Phone Number</span>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        className={styles.inputField}
                      />
                    </div>
                  </div>
                  <div className={styles.radio}>
                    <div className={styles.marginRR}>
                      <span>Gender</span>
                    </div>
                    <div>
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Laki-laki"
                        checked={gender === 'laki-laki'}
                      />
                    </div>
                    <div>
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Perempuan"
                        checked={gender === 'perempuan'}
                      />
                    </div>
                  </div>

                  <div className={styles.radio}>
                    <div className={styles.marginR}>
                      <span>Date of Birt</span>
                    </div>
                    <div>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                          disableToolbar
                          variant="inline"
                          format="MM/dd/yyyy"
                          margin="normal"
                          id="date-picker-inline"
                          label="Date picker inline"
                          value={selectedDate}
                          onChange={handleDateChange}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                        />
                      </MuiPickersUtilsProvider>
                    </div>
                  </div>
                  <div className={styles.btnContainer}>
                    <div>
                      <Button variant="contained" color="primary">Save</Button>
                    </div>
                  </div>
                </form>
              </Grid>
              <Grid item lg={3}>
                <div className={styles.profileAvatar}>
                  <div>
                    <Avatar
                      alt={name}
                      src="/static/images/avatar/1.jpg"
                      className={profile.large}
                    />
                  </div>
                  <div className={styles.btnSpacing}>
                    <input
                      accept="image/*"
                      className={profile.input}
                      id="contained-button-file"
                      multiple
                      type="file"
                    />
                    <label htmlFor="contained-button-file">
                      <Button
                        variant="contained"
                        color="primary"
                        component="span"
                      >
                        Upload
                      </Button>
                    </label>
                  </div>
                </div>
              </Grid>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Profile;
