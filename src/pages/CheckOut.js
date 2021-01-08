import React from 'react';
import styles from './pages.module.css';
import {
  Grid,
  Paper,
  Button,
  Modal,
  Backdrop,
  Fade,
  IconButton,
  FormControl,
  Checkbox,
  FormControlLabel,
  withStyles,
} from '@material-ui/core';
import { checkOutStyle } from './checkOutStyle';
import { useHistory, useLocation } from 'react-router-dom';
import NavigationBar from '../components/Navbar/NavigationBar';
import image from '../assets/img/produk.jpg';
import CloseIcon from '@material-ui/icons/Close';
import InputTextNew from '../components/Form/InputTextNew';
import gopay from '../assets/img/gopay.png';
import { useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { adressSchema } from '../helpers/validationSchema';
const { REACT_APP_BACKEND_URL } = process.env;

const CheckboxNew = withStyles({
  root: {
    color: '#9b9b9b',
    '&$checked': {
      color: '#DB3022',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckOut() {
  const classes = checkOutStyle();
  const history = useHistory();
  const location = useLocation();
  const adress = useSelector((state) => state.adress);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [openPayment, setOpenPayment] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpenPayment = () => {
    setOpenPayment(true);
  };
  const handleOpen2 = () => {
    setOpen2(true);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
    setOpen(true);
  };
  const handleClosePayment = () => {
    setOpenPayment(false);
  };

  return (
    <>
      {console.log(location)}
      <NavigationBar />
      <Grid container className={classes.container}>
        <Grid
          className={classes.marginCek}
          item
          md={12}
          xs={12}
          sm={12}
          lg={12}
        >
          <div>
            <span className={classes.checkOutText}>Checkout</span>
          </div>
        </Grid>
        <Grid item lg={7} md={7} sm={7}>
          <div>
            <span className={classes.textShipping}>Shipping Adress</span>
          </div>
          <Paper elevation={3} className={classes.paperAdress}>
            {adress.alertMsg === "You dont't have adress yet" ? (
              <span className={classes.textShipping}>{adress.alertMsg}</span>
            ) : (
              <>
                <div>
                  <span className={classes.textShipping}>Adreas Jane</span>
                </div>
                <div>
                  <p className={classes.adressText}>
                    Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                    Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok
                    c 16] Sokaraja, Kab. Banyumas, 53181
                  </p>
                </div>
              </>
            )}

            <div>
              <Button
                onClick={handleOpen}
                className={classes.btnChoose}
                variant="outlined"
              >
                Choose another address
              </Button>
            </div>
          </Paper>
          {location.state.itemList.map((item) => (
            <Paper className={classes.paperItem} elevation={3}>
              <div className={classes.itemWrapper}>
                <div className={classes.imageWrapper}>
                  <img
                    className={classes.image}
                    src={`${REACT_APP_BACKEND_URL}${item.url}`}
                  />
                </div>
                <div className={classes.productInfo}>
                  <div>
                    <span className={classes.productText}>
                      {item.name} x{item.total}
                    </span>
                  </div>
                  <div>
                    <span className={classes.brandText}>{item.category}</span>
                  </div>
                </div>
                <div>
                  <div>
                    <span className={classes.priceText}>
                      Rp.{item.subTotal}
                    </span>
                  </div>
                </div>
              </div>
            </Paper>
          ))}
        </Grid>
        <Grid className={classes.payWrapper} item md={5} sm={5} xs={12}>
          <Paper className={classes.paperSummary} elevation={3}>
            <div>
              <div className={classes.shopWrapper}>
                <span className={classes.priceText}>Shopping summary</span>
              </div>
              <div>
                <div className={classes.totalWrapper}>
                  <div>
                    <span className={classes.totalLabel}>Order</span>
                  </div>
                  <div>
                    <span className={classes.priceText}>
                      Rp.{location.state.summary}
                    </span>
                  </div>
                </div>
                <div className={classes.totalWrapper2}>
                  <div>
                    <span className={classes.totalLabel}>Delivery</span>
                  </div>
                  <div>
                    <span className={classes.priceText}>Rp.5,0000</span>
                  </div>
                </div>
              </div>
              <div>
                <hr className={classes.hr} />
              </div>
              <div className={classes.totalWrapper}>
                <div>
                  <span className={classes.priceText}>Shopping summary</span>
                </div>
                <div>
                  <span className={classes.priceTotalText}>Rp.25,0000</span>
                </div>
              </div>
              <div>
                <Button
                  className={classes.btnPayment}
                  variant="contained"
                  onClick={handleOpenPayment}
                  fullWidth
                >
                  Select payment
                </Button>
              </div>
            </div>
          </Paper>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <div className={classes.btnCloseWrapper}>
                  <IconButton
                    onClick={handleClose}
                    className={classes.btnClose}
                  >
                    <CloseIcon />
                  </IconButton>
                </div>
                <div className={classes.modalContent}>
                  <div className={classes.labelAdress}>
                    <span className={classes.chooseText}>
                      Choose another address
                    </span>
                  </div>
                  <div className={classes.btnAdressWrapper}>
                    <Button
                      variant="outlined"
                      className={classes.btnAddAdress}
                      onClick={handleOpen2}
                      fullWidth
                    >
                      Add new address
                    </Button>
                  </div>
                  {adress.alertMsg !== "You dont't have adress yet" && (
                    <div className={classes.adressWrapper}>
                      <div style={{ marginBottom: '5px' }}>
                        <span className={classes.priceText}>Andreas Jane</span>
                      </div>
                      <div>
                        <p className={classes.adressText}>
                          Perumahan Sapphire Mediterania, Wiradadi, Kec.
                          Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181
                          [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas,
                          53181
                        </p>
                      </div>
                      <div className={classes.btnChangeAdress}>
                        <span className={classes.changeAdressText}>
                          Change address
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Fade>
          </Modal>
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
                  <IconButton
                    onClick={handleClose2}
                    className={classes.btnClose}
                  >
                    <CloseIcon />
                  </IconButton>
                </div>
                <div className={classes.modalContent}>
                  <div className={classes.labelAdress}>
                    <span className={classes.chooseText}>Add new address</span>
                  </div>
                </div>
                <div className={classes.modalContentForm}>
                  <Formik
                    validationSchema={adressSchema}
                    initialValues={{
                      recipient: '',
                      phone_number: '',
                      adress: '',
                      postal_code: '',
                      city: '',
                    }}
                    onSubmit={(values, { resetForm }) => {
                      console.log(values);
                    }}
                  >
                    {({
                      errors,
                      touched,
                      values,
                      handleChange,
                      handleSubmit,
                      handleBlur,
                      isSubmitting,
                    }) => (
                      <form onSubmit={handleSubmit}>
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
                        <div
                          className={
                            errors.recipient || errors.phone_number
                              ? classes.inputWrapper3
                              : classes.inputWrapper2
                          }
                        >
                          <div className={classes.inputDisplay}>
                            <FormControl fullWidth>
                              <InputTextNew
                                label="Recipient’s name"
                                className={classes.margin}
                                variant="filled"
                                id="Recipient’s name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.recipient}
                                name="recipient"
                                error
                                helperText={
                                  errors.recipient && touched.recipient
                                    ? errors.recipient
                                    : ''
                                }
                                InputLabelProps={{
                                  style: { color: '#9b9b9b' },
                                }}
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
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone_number}
                                name="phone_number"
                                error
                                helperText={
                                  errors.phone_number && touched.phone_number
                                    ? errors.phone_number
                                    : ''
                                }
                                InputLabelProps={{
                                  style: { color: '#9b9b9b' },
                                }}
                              />
                            </FormControl>
                          </div>
                        </div>
                        <div
                          className={
                            errors.adress || errors.postal_code
                              ? classes.inputWrapper3
                              : classes.inputWrapper2
                          }
                        >
                          <div className={classes.inputDisplay}>
                            <FormControl fullWidth>
                              <InputTextNew
                                label="Address"
                                className={classes.margin}
                                variant="filled"
                                id="Address"
                                name="adress"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.adress}
                                error
                                helperText={
                                  errors.adress && touched.adress
                                    ? errors.adress
                                    : ''
                                }
                                InputLabelProps={{
                                  style: { color: '#9b9b9b' },
                                }}
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
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="postal_code"
                                value={values.postal_code}
                                error
                                helperText={
                                  errors.postal_code && touched.postal_code
                                    ? errors.postal_code
                                    : ''
                                }
                                InputLabelProps={{
                                  style: { color: '#9b9b9b' },
                                }}
                              />
                            </FormControl>
                          </div>
                        </div>
                        <div
                          className={
                            errors.city
                              ? classes.inputWrapper3
                              : classes.inputWrapper2
                          }
                        >
                          <div className={classes.inputDisplay}>
                            <FormControl fullWidth>
                              <InputTextNew
                                label="City or Subdistrict"
                                className={classes.margin}
                                variant="filled"
                                id="City or Subdistrict"
                                onChange={handleChange}
                                name="city"
                                onBlur={handleBlur}
                                value={values.city}
                                error
                                helperText={
                                  errors.city && touched.city ? errors.city : ''
                                }
                                InputLabelProps={{
                                  style: { color: '#9b9b9b' },
                                }}
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
                            <Button
                              type="submit"
                              className={classes.btnSave}
                              variant="contained"
                            >
                              Save
                            </Button>
                          </div>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </Fade>
          </Modal>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={openPayment}
            onClose={handleClosePayment}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={openPayment}>
              <div className={classes.paperPayment}>
                <div className={classes.paymentLabelWrapper}>
                  <div>
                    <IconButton
                      onClick={handleClosePayment}
                      className={classes.btnClose}
                    >
                      <CloseIcon />
                    </IconButton>
                  </div>
                  <div>
                    <span className={classes.labelPayment}>Payment</span>
                  </div>
                </div>
                <div>
                  <hr className={classes.hrPayment} />
                </div>
                <div className={classes.modalPaymentContent}>
                  <div style={{ marginBottom: '26px' }}>
                    <span className={classes.paymentMethodText}>
                      Payment method
                    </span>
                  </div>
                  <div className={classes.paymentWrapper}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <div className={classes.imgPaymentWrapper}>
                        <img className={classes.imgPayment} src={gopay} />
                      </div>
                      <div style={{ marginLeft: '40px' }}>
                        <span className={classes.paymentMethodText}>Gopay</span>
                      </div>
                    </div>

                    <FormControlLabel
                      control={
                        <CheckboxNew
                          // checked={state.checkedG}
                          // onChange={handleChange}
                          name="checkedG"
                        />
                      }
                    />
                  </div>
                  <div className={classes.paymentWrapper}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <div className={classes.imgPaymentWrapper}>
                        <img className={classes.imgPayment} src={gopay} />
                      </div>
                      <div style={{ marginLeft: '40px' }}>
                        <span className={classes.paymentMethodText}>Gopay</span>
                      </div>
                    </div>

                    <FormControlLabel
                      control={
                        <CheckboxNew
                          // checked={state.checkedG}
                          // onChange={handleChange}
                          name="checkedG"
                        />
                      }
                    />
                  </div>
                </div>
                <div>
                  <hr className={classes.hrPayment} />
                </div>
                <div className={classes.sumaryModal}>
                  <div style={{ marginBottom: '20px' }}>
                    <span className={classes.paymentMethodText}>
                      Shopping summary
                    </span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className={classes.totalWrapper}>
                      <div>
                        <span className={classes.totalLabel}>Order</span>
                      </div>
                      <div>
                        <span className={classes.priceText}>Rp.20,0000</span>
                      </div>
                    </div>
                    <div className={classes.totalWrapper2}>
                      <div>
                        <span className={classes.totalLabel}>Delivery</span>
                      </div>
                      <div>
                        <span className={classes.priceText}>Rp.5,0000</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={classes.totalModal}>
                      <div>
                        <span className={classes.paymentMethodText}>
                          Shopping summary
                        </span>
                        <div>
                          <span className={classes.priceTotalText}>
                            Rp.25.0000
                          </span>
                        </div>
                      </div>
                      <div>
                        <Button className={classes.btnSave} variant="contained">
                          Buy
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </Modal>
        </Grid>
      </Grid>
    </>
  );
}
