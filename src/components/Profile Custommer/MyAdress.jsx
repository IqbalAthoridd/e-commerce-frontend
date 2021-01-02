import React from 'react';
import {
  Grid,
  Paper,
  Button,
  Modal,
  Fade,
  FormControl,
  IconButton,
  FormControlLabel,
  Checkbox,
  withStyles
} from '@material-ui/core';
import { profileStyle } from './profileStyles';
import InputTextNew from '../Form/InputTextNew';
import CloseIcon from '@material-ui/icons/Close';

const CheckboxNew = withStyles({
    root: {
      color: '#9b9b9b',
      '&$checked': {
        color: '#DB3022',
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

export default function MyAdress() {
  const classes = profileStyle();
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  return (
    <Grid className={classes.content} item md={9}>
      <Paper className={classes.paperContent} elevation={3}>
        <div>
          <div>
            <span className={classes.contentLabel}>Choose another address</span>
          </div>
          <div>
            <span className={classes.changeProfile}>
              Manage your shipping address
            </span>
          </div>
        </div>
        <div>
          <hr />
        </div>
        <div className={classes.btnAdressWrapper}>
          <Button
          onClick={handleOpen2}
            className={classes.btnAddAdress}
            variant="contained"
            fullWidth
          >
            Add new adress
          </Button>
        </div>
        <div className={classes.adressWrapper}>
          <div style={{ marginBottom: '5px' }}>
            <span className={classes.priceText}>Andreas Jane</span>
          </div>
          <div>
            <p className={classes.adressText}>
              Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten
              Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja,
              Kab. Banyumas, 53181
            </p>
          </div>
          <div className={classes.btnChangeAdress}>
            <span className={classes.changeAdressText}>Change address</span>
          </div>
        </div>
      </Paper>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open2}
        onClose={handleClose2}
        // closeAfterTransition
        // BackdropComponent={Backdrop}
        // BackdropProps={{
        //   timeout: 500,
        // }}
      >
        <Fade in={open2}>
          <div className={classes.paper}>
            <div className={classes.btnCloseWrapper}>
              <IconButton onClick={handleClose2} className={classes.btnClose}>
                <CloseIcon />
              </IconButton>
            </div>
            <div className={classes.modalContent}>
              <div className={classes.labelAdress}>
                <span className={classes.chooseText}>Add new address</span>
              </div>
            </div>
            <div className={classes.modalContentForm}>
              <form>
                <div className={classes.inputWrapper}>
                  <FormControl fullWidth>
                    <InputTextNew
                      label="Rumah"
                      className={classes.margin}
                      variant="filled"
                      id="rumah"
                      InputLabelProps={{ style: { color: '#9b9b9b' } }}
                      helperText="Save address as (ex : home address, office address)"
                    />
                  </FormControl>
                </div>
                <div className={classes.inputWrapper2}>
                  <div className={classes.inputDisplay}>
                    <FormControl fullWidth>
                      <InputTextNew
                        label="Recipient’s name"
                        className={classes.margin}
                        variant="filled"
                        id="Recipient’s name"
                        InputLabelProps={{ style: { color: '#9b9b9b' } }}
                      />
                    </FormControl>
                  </div>
                  <div className={classes.inputDisplay2}>
                    <FormControl fullWidth>
                      <InputTextNew
                        label="Recipient's telephone number"
                        className={classes.margin}
                        variant="filled"
                        id="Recipient's telephone number"
                        InputLabelProps={{ style: { color: '#9b9b9b' } }}
                      />
                    </FormControl>
                  </div>
                </div>
                <div className={classes.inputWrapper2}>
                  <div className={classes.inputDisplay}>
                    <FormControl fullWidth>
                      <InputTextNew
                        label="Address"
                        className={classes.margin}
                        variant="filled"
                        id="Address"
                        InputLabelProps={{ style: { color: '#9b9b9b' } }}
                      />
                    </FormControl>
                  </div>
                  <div className={classes.inputDisplay2}>
                    <FormControl fullWidth>
                      <InputTextNew
                        label="Postal code"
                        className={classes.margin}
                        variant="filled"
                        id="Postal code"
                        InputLabelProps={{ style: { color: '#9b9b9b' } }}
                      />
                    </FormControl>
                  </div>
                </div>
                <div className={classes.inputWrapper2}>
                  <div className={classes.inputDisplay}>
                    <FormControl fullWidth>
                      <InputTextNew
                        label="City or Subdistrict"
                        className={classes.margin}
                        variant="filled"
                        id="City or Subdistrict"
                        InputLabelProps={{ style: { color: '#9b9b9b' } }}
                      />
                    </FormControl>
                  </div>
                  <div className={classes.inputDisplay2}>
                    <FormControl fullWidth></FormControl>
                  </div>
                </div>
                <div>
                  <FormControlLabel
                    control={
                      <CheckboxNew
                        // checked={state.checkedG}
                        // onChange={handleChange}
                        name="checkedG"
                      />
                    }
                    label="Make it the primary address"
                    className={classes.checkBoxLabel}
                  />
                </div>
                <div className={classes.btnSaveWrapper}>
                  <div style={{ flex: 1 }}></div>
                  <div className={classes.btnCancelWrapper}>
                    <Button
                      onClick={handleClose2}
                      className={classes.btnCancel}
                      variant="outlined"
                    >
                      Cancel
                    </Button>
                  </div>
                  <div>
                    <Button className={classes.btnSave} variant="contained">
                      Save
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </Modal>
    </Grid>
  );
}
