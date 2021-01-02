import React from 'react'
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
  } from '@material-ui/core';
  import { profileStyle } from './profileStyles';
  import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
  import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
  import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
  import CreateIcon from '@material-ui/icons/Create';
  import InputText from '../Form/InputTextNew';
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
      <KeyboardDatePicker
        InputProps={{ classes, disableUnderline: true }}
        {...props}
      />
    );
  }

export default function ProfileInfo() {
    const classes = profileStyle()
    return (
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
          <div className={classes.contentWrapper}>
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
              <div style={{ marginBottom: 40 }}>
                <Button className={classes.btnSave} variant="contained">
                  Save
                </Button>
              </div>
            </div>
            <div className={classes.avatarWrapper}>
              <div className={classes.avtr}>
                <div>
                  <Avatar className={classes.avatarProfile} alt="Avatar" />
                </div>
                <div>
                  <input
                    accept="image/*"
                    className={classes.inputImage}
                    id="contained-button-file"
                    multiple
                    
                    type="file"
                  />

                  <label htmlFor="contained-button-file">
                    <Button className={classes.btnImage} variant="outlined" component="span" fullWidth>
                      Select image
                    </Button>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </Grid>    )
}
