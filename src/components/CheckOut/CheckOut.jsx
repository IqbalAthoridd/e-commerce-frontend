import React from 'react';
import styles from './checkOut.module.css';
import { checkOutStyles } from './checkOutStyle';
import { Grid, withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import image from '../../assets/img/produk.jpg';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import { Checkbox, FormControlLabel } from '@material-ui/core';

function CheckOut() {
  const checkOut = checkOutStyles();
  const [open, setOpen] = React.useState(false);
  const [modal, setModal] = React.useState("chooseAdress");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setModal("chooseAdress")
  };

  const changeModal =()=>{
    setModal("createAdress")
  }

  const changeModal2 =() => {
    setModal("chooseAdress")
  }

  const CustomCheckBox = withStyles({
    root: {
      color: '#3285A8',
      '&$checked': {
        color: '#3285A8',
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);


  return (
    <>
      <Grid item lg={12} xs={12}>
        <div className={styles.checkOutSpacing}>
          <span>Checkout</span>
        </div>
      </Grid>
      <Grid item lg={7}>
        <div className={styles.shippingSpacing}>
          <span>Shipping Adress</span>
        </div>
        <Paper elevation={4} className={styles.paperAdress}>
          <div>
            <span>Adress Jane</span>
          </div>
          <div className={styles.adressSpacing}>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              fuga molestiae sapiente optio id illum possimus aspernatur
              necessitatibus iste culpa recusandae nesciunt molestias minima est
              quibusdam? Soluta ipsum voluptatum earum!
            </span>
          </div>
          <div>
            <Button
              variant="outlined"
              onClick={handleOpen}
              className={checkOut.btnAdress}
            >
              Chose another adress
            </Button>
          </div>
          <div>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={checkOut.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Grid item lg={6}>
                  <Paper
                    elevation={3}
                    style={{ height: '600px', borderRadius: '8px' }}
                  >
                    <div className={styles.btnClose}>
                      <Button
                        className={checkOut.btnClose}
                        onClick={handleClose}
                      >
                        <CloseIcon color="action" />
                      </Button>
                    </div>
                    <div className={styles.modalContent}>
                    {modal === "chooseAdress" ? (
                      <>
                      
                     <div className={styles.modalHeader}>
                        <span>Choose another adress</span>
                      </div>
                      <div>
                        <Button
                          className={checkOut.btnAddAdress}
                          variant="outlined"
                          fullWidth="true"
                          onClick={changeModal}
                        >
                          Add new adress
                        </Button>
                      </div>
                      <div className={styles.adressContent}>
                        <div>
                          <span>Adrean Jane</span>
                        </div>
                        <div className={styles.adressPadding}>
                          <span>
                            Perumahan Sapphire Mediterania, Wiradadi, Kec.
                            Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181
                            [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas,
                            53181
                          </span>
                        </div>
                        <div>
                          <Button className={checkOut.btnChangeAdress}>Change Adress</Button>
                        </div>
                      </div>
                      </>
                      ):(
                        <>
                       
                        <div className={styles.modalHeader}>
                        <span>Add new adress</span>
                      </div>
                      <div>
                        <TextField
                          id="standard-full-width"
                          label="Rumah"
                          placeholder="Rumah"
                          helperText="Save address as (ex : home address, office address)"
                          fullWidth
                          margin="normal"
                          multiline
                          variant="outlined"
                        />
                      </div>
                      <div className={styles.inputContainer}>
                        <div className={styles.inputFlex}>
                          <TextField
                            id="standard-full-width"
                            label="Name"
                            placeholder="Name"
                            helperText="Recipient’s name"
                            margin="normal"
                            fullWidth
                            multiline
                            variant="outlined"
                          />
                        </div>
                        <div className={styles.inputFlex}>
                          <TextField
                            id="standard-full-width"
                            label="Telephone number"
                            placeholder="Telephone number"
                            helperText="Recipient's telephone number"
                            margin="normal"
                            fullWidth
                            multiline
                            variant="outlined"
                          />
                        </div>
                      </div>
                      <div className={styles.inputContainer}>
                        <div className={styles.inputFlex}>
                          <TextField
                            id="standard-full-width"
                            label="Address"
                            placeholder="Address"
                            margin="normal"
                            fullWidth
                            multiline
                            variant="outlined"
                          />
                        </div>
                        <div className={styles.inputFlex}>
                          <TextField
                            id="standard-full-width"
                            label="Postal code"
                            placeholder="Postal code"
                            margin="normal"
                            fullWidth
                            multiline
                            variant="outlined"
                          />
                        </div>
                      </div>
                      <div className={styles.inputContainer}>
                        <div className={styles.inputFlex}>
                          <TextField
                            id="standard-full-width"
                            label="Address"
                            placeholder="Address"
                            margin="normal"
                            multiline
                            variant="outlined"
                          />
                        </div>
                        
                      </div>
                      <div>
                          <FormControlLabel
                            control={
                              <CustomCheckBox
                                name="checked"
                              />
                            }
                            label="Make it the primary address"
                          />
                        </div>
                        <div className={styles.btnClose}>
                          <div className={styles.btnSave}>
                            <div className={styles.textProduct}></div>
                          <div>
                            <Button variant="outlined" className={checkOut.btnCancel}
                            onClick={changeModal2}>Cancel</Button>
                          </div>
                          <div>
                            <Button variant="contained" className={checkOut.btnSave}>Save</Button>
                          </div>
                        </div>
                        </div>
                        </>
                      )}
                     
                     
                    </div>
                  </Paper>
                </Grid>
                {/* <div className={checkOut.paper}>
                  <h2 id="transition-modal-title">Transition modal</h2>
                  <p id="transition-modal-description">
                    react-transition-group animates me.
                  </p>
                </div> */}
              </Fade>
            </Modal>
          </div>
        </Paper>
        <Paper elevation={4} className={styles.paperSpacing}>
          <div className={`${styles.product}`}>
            <div className={`${styles.cartImage}`}>
              <div className={`${styles.cartImage2}`}>
                <img className={`${styles.imageSize}`} src={image}></img>
              </div>
            </div>
            <div className={styles.textProduct}>
              <div>
                <span>Men's formal suit - Black</span>
              </div>
              <div>
                <span>Zalora Cloth</span>
              </div>
            </div>
            <div>
              <span>$ 20.0</span>
            </div>
          </div>
        </Paper>
      </Grid>
      <Grid item lg={4} className={checkOut.paperSpacing}>
        <Paper elevation={3} className={styles.papperPadding}>
          <div>
            <span>Shopping summary</span>
          </div>
          <div className={styles.orderSpacing}>
            <div>
              <span>Order</span>
            </div>
            <div>
              <span>$ 40.0</span>
            </div>
          </div>
          <div className={styles.orderSpacing}>
            <div>
              <span>Delivery</span>
            </div>
            <div>
              <span>$ 5.0</span>
            </div>
          </div>
          <div>
            <hr />
          </div>
          <div className={styles.orderSpacing}>
            <div>
              <span>Shopping summary</span>
            </div>
            <div>
              <span>$ 5.0</span>
            </div>
          </div>
          <div className={styles.btnPaySpacing}>
            <Button
              variant="contained"
              className={checkOut.btnPayment}
              fullWidth="true"
            >
              Select Payment
            </Button>
          </div>
        </Paper>
      </Grid>
    </>
  );
}

export default CheckOut;
