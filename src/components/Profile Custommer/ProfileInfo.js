import React, { useEffect } from 'react';
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
  CircularProgress,
} from '@material-ui/core';
import { profileStyle } from './profileStyles';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import CreateIcon from '@material-ui/icons/Create';
import InputText from '../Form/InputTextNew';
import RadioGroup from '@material-ui/core/RadioGroup';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import userAction from '../../redux/action/auth';
import { profileSchema } from '../../helpers/validationSchema';
const { REACT_APP_BACKEND_URL } = process.env;

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
  const dispatch = useDispatch();
  const classes = profileStyle();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const [submit, setSubmit] = React.useState(false);

  useEffect(() => {
    if (submit) {
      dispatch(userAction.getProfile(token));
    }
  }, [submit]);

  const handleImage = async (e) => {
    const image = new FormData();
    image.append('avatar', e.target.files[0]);

    await dispatch(userAction.uploadImage(token, image));
    setSubmit(true);
  };

  const updateData = async (values) => {
    await dispatch(userAction.updateProfile(token, values));
    setSubmit(true);
  };

  return (
    <Grid className={classes.content} item md={9}>
      {isLoading && <div>LOADING.....</div>}
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
          <Formik
            validationSchema={profileSchema}
            initialValues={{
              name: user.name,
              email: user.email,
              phone_number: user.phone_number !== null ? user.phone_number : '',
              gender: user.gender !== null ? user.gender : '',
              // birt_day:
              //   user.birt_day !== null
              //     ? new Date(`${user.birt_da}`)
              //     : '2014-08-18T21:11:54',
            }}
            onSubmit={(values) => updateData(values)}
          >
            {({
              values,
              handleChange,
              errors,
              handleSubmit,
              handleBlur,
              touched,
            }) => (
              <form onSubmit={handleSubmit} style={{ flex: 1 }}>
                <div className={classes.formWrapper}>
                  <div className={classes.inputWrapper}>
                    <FormControl className={classes.input} fullWidth>
                      <InputText
                        label="Name"
                        error
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        helperText={
                          errors.name && touched.name ? errors.name : ''
                        }
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
                        value={values.email}
                        error
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          errors.email && touched.email ? errors.email : ''
                        }
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
                        error
                        name="phone_number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          errors.phone_number && touched.phone_number
                            ? errors.phone_number
                            : ''
                        }
                        value={values.phone_number}
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
                    <RadioGroup
                      aria-label="gender"
                      name="gender"
                      value={values.gender}
                      onChange={handleChange}
                    >
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <FormControlLabel
                          value="perempuan"
                          control={<Radio />}
                          label="Perempuan"
                        />
                        <FormControlLabel
                          value="laki-laki"
                          control={<Radio />}
                          label="Laki-laki"
                        />
                      </div>
                    </RadioGroup>
                  </div>
                  {/* <div className={classes.inputWrapper}>
                    <FormControl className={classes.input} fullWidth>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                          disableToolbar
                          variant="filled"
                          format="MM/dd/yyyy"
                          name="birt_day"
                          value={values.birt_day}
                          onChange={handleChange}
                        />
                      </MuiPickersUtilsProvider>
                    </FormControl>
                  </div> */}
                  <div style={{ marginBottom: 40 }}>
                    <Button
                      disabled={isLoading ? true : false}
                      type="submit"
                      className={classes.btnSave}
                      variant="contained"
                    >
                      {isLoading ? (
                        <CircularProgress
                          size={23}
                          style={{ color: '#9b9b9b' }}
                        />
                      ) : (
                        <span>Save</span>
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
          <div className={classes.avatarWrapper}>
            <div className={classes.avtr}>
              <div>
                <Avatar
                  src={
                    user.avatar !== null &&
                    `${REACT_APP_BACKEND_URL}${user.avatar}`
                  }
                  className={classes.avatarProfile}
                  alt="Avatar"
                />
              </div>
              <div>
                <input
                  accept="image/*"
                  className={classes.inputImage}
                  id="contained-button-file"
                  onChange={handleImage}
                  type="file"
                />

                <label htmlFor="contained-button-file">
                  <Button
                    className={classes.btnImage}
                    variant="outlined"
                    component="span"
                    disabled={isLoading ? true : false}
                    fullWidth
                  >
                    {isLoading ? (
                      <CircularProgress
                        size={23}
                        style={{ color: '#9b9b9b' }}
                      />
                    ) : (
                      <span>Select image</span>
                    )}
                  </Button>
                </label>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </Grid>
  );
}
