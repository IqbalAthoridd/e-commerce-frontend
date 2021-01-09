import { makeStyles } from '@material-ui/core/styles';
export const checkOutStyle = makeStyles((theme) => ({
  checkOutText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '34px',
    lineHeight: '34px',
    color: '#222222',
  },
  container: {
    padding: '50px 7.5% 0 7.5%',
    [theme.breakpoints.down('xs')]: {
      padding: '50px 16px 0 16px',
    },
  },
  marginCek: {
    marginBottom: '30px',
  },
  paperAdress: {
    marginTop: '14px',
    padding: '30px 35px 30px 30px',
    borderRadius: '4px',
    marginBottom: '20px',
    [theme.breakpoints.down('xs')]: {
      padding: '20px 20px 20px 20px',
    },
  },
  textShipping: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '16px',
    color: '#222222',
  },
  adressText: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '24px',
    color: '#222222',
  },
  btnChoose: {
    borderRadius: '24px',
    border: '1px solid #9B9B9B',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#9B9B9B',
    textTransform: 'none',
    '&:active': {
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  paperItem: {
    padding: '22px 20px 25px 20px',
    [theme.breakpoints.down('xs')]: {
      padding: '32px 25px 25px 20px',
    },
    marginBottom:15
  },
  itemWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageWrapper: {
    width: '70px',
    height: '69px',
    marginRight: '14px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  productText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#222222',
  },
  brandText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '12px',
    color: '#9B9B9B',
  },
  productInfo: {
    flexGrow: 1,
  },
  priceText: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '16px',
    color: '#222222',
  },
  payWrapper: {
    paddingLeft: '50px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0',
      marginTop: 20,
      marginBottom: 50,
    },
  },
  paperSummary: {
    padding: '24px 24px',
  },
  totalWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '14px',
  },
  totalWrapper2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  shopWrapper: {
    marginBottom: '30px',
  },
  totalLabel: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '16px',
    color: '#9B9B9B',
  },
  hr: {
    border: '1px solid #9b9b9b',
  },
  priceTotalText: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '18px',
    color: '#DB3022',
  },
  btnPayment: {
    borderRadius: '25px',
    background: '#DB3022',
    color: 'white',
    textTransform: 'none',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '20px',
    marginTop: '20px',
    paddingTop: '8px',
    paddingBottom: '8px',
    '&:hover': {
      background: '#c7291c',
    },
    '&:active': {
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    width: '60%',
    height: '90%',
    maxHeight:'90%',
    borderRadius: '8px',
  },
  paperPayment: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    width: '30%',
    height: '90%',
    borderRadius: '8px',
  },

  btnCloseWrapper: {
    textAlign: 'right',
  },
  btnClose: {
    '&:active': {
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  modalContent: {
    padding: '0 50px 0 50px',
  },
  modalContentForm: {
    padding: '0 40px 0 40px',
    marginTop: '40px',
  },
  labelAdress: {
    textAlign: 'center',
  },
  chooseText: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '28px',
    lineHeight: '28px',
    color: '#222222',
  },
  btnAdressWrapper: {
    marginTop: '30px',
    marginBottom: '34px',
  },
  btnAddAdress: {
    borderRadius: '8px',
    border: '2px dashed #9B9B9B',
    paddingTop: '34px',
    paddingBottom: '34px',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '18px',
    color: '#9B9B9B',
    '&:active': {
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  adressWrapper: {
    border: '1px solid #DB3022',
    padding: '30px 30px 30px 25px',
    borderRadius: '4px',
    marginBottom:10,
  },
  changeAdressText: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '16px',
    color: '#DB3022',
  },
  inputWrapper: {
    marginBottom: '16px',
  },
  inputWrapper2: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '20px',
  },
  inputWrapper3: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom:5
  },
  inputSpacing: {
    marginLeft: '32px',
  },
  inputDisplay: {
    flex: 1,
  },
  inputDisplay2: {
    flex: 1,
    marginLeft: '32px',
  },
  checkBoxLabel: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    color: '#9B9B9B',
  },
  btnSaveWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 25,
  },
  btnCancelWrapper: {
    marginRight: '20px',
  },
  btnCancel: {
    border: '1px solid #9B9B9B',
    borderRadius: '24px',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#9B9B9B',
    textTransform: 'none',
    padding: '8px 57px',
    '&:active': {
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  btnSave: {
    backgroundColor: '#DB3022',
    borderRadius: '24px',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#FFFFFF',
    textTransform: 'none',
    padding: '8px 57px',
    '&:active': {
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      background: '#c7291c',
    },
  },
  paymentLabelWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '10px',
  },
  labelPayment: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '22px',
    lineHeight: '22px',
    color: '#222222',
  },
  hrPayment: {
      border:'0.5px solid rgba(155, 155, 155,0.3)',
    boxShadow: '0px 0px 6px rgba(53, 50, 50, 0.25);',
  },
  modalPaymentContent:{
      paddingLeft:'24px',
      paddingRight:'10px'
  },
  paymentMethodText:{
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '16px',
    color: '#222222',
  },
  imgPaymentWrapper:{
      width:'82px',
      objectFit:'cover'
  },
  imgPayment:{
      width:'100%'
  },
  paymentWrapper:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginBottom:"10px"
  },
  sumaryModal:{
    display:'flex',
    flexDirection:'column',
      paddingLeft:'24px',
      paddingRight:'24px'
  },
  totalModal:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  }
}));
