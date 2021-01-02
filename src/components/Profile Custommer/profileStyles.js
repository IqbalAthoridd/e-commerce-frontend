import { makeStyles } from '@material-ui/core/styles';
export const profileStyle = makeStyles((theme) => ({
  container: {
    padding: '0 7.5% 0 0',
    [theme.breakpoints.down('xs')]: {
      padding: '50px 16px 0 16px',
    },
  },
  paperProfileInfo: {
    backgroundColor: 'rgba(245,245,245,0.5)',
    height: '100vh',
  },
  sideBarContent: {
    paddingRight: 48,
    paddingTop: 50,
    paddingLeft:'30%'
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:70

  },
  avatar: {
    width: '60px',
    height: '60px',
  },
  username: {
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 16,
    color: '#222222',
  },
  changeProfile: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 14,
    color: '#9B9B9B',
  },
  btnProfile: {
    backgroundColor: '#456BF3',
    width: 32,
    height: 32,
    '&:hover': {
      backgroundColor: '#456BF3',
    },
    '&:active': {
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  btnLocation: {
    backgroundColor: '#F36F45',
    width: 32,
    height: 32,
    '&:hover': {
      backgroundColor: '#F36F45',
    },
    '&:active': {
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  btnOrder: {
    backgroundColor: '#F3456F',
    width: 32,
    height: 32,
    '&:hover': {
      backgroundColor: '#F3456F',
    },
    '&:active': {
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  icon: {
    color: 'white',
    fontSize: 20,
  },
  iconLabel: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 14,
    color: '#9B9B9B',
  },
  iconLabelActive: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 14,
    color: '#222222',
  },
  menuWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:20
  },
  changeProfileWrapper:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center'
  },
  userInfoWrapper:{
      marginLeft:10
  },
  btnWrapper:{
      marginRight:14
  },
  content:{
    padding:"50px 0 0 45px"
  },
  paperContent:{
    padding:"30px 22px 0 30px",
    height:'95%'
  },
  contentLabel:{
    fontStyle:'normal',
    fontWeight:600,
    fontSize:20,
    color:'#222222'
  },
  inputWrapper:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    marginBottom:22
  },
  formWrapper:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    flex:1,
    paddingRight:64
  },
  labelSpacing:{
    marginRight:40
  },
  btnSave:{
    backgroundColor:'#DB3022',
    borderRadius:'25px',
    fontStyle:'normal',
    fontWeight:500,
    fontSize:14,
    color:'white',
    padding:'8px 30px',
    textTransform:'none',
    marginTop:20,
    '&:hover': {
      backgroundColor: '#DB3022',
    },
    '&:active': {
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  contentWrapper:{
    display:'flex',
    flexDirection:'row'
  },
  avatarProfile:{
    width:110,
    height:110,
  },
  avatarWrapper:{
   
  },
  avtr:{
    paddingLeft:80,
    paddingRight:80,
    borderLeft:'1px solid #9b9b9b',
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  inputImage: {
    display: 'none',
  },
  btnImage:{
    borderRadius:'24px',
    fontStyle:'normal',
    fontWeight:500,
    fontSize:14,
    color:'#9B9B9B',
    textTransform:'none',
    marginTop:20
  },
  btnAddAdress: {
    borderRadius: '8px',
    border: '2px dashed #9B9B9B',
    paddingTop: '34px',
    paddingBottom: '34px',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 18,
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
  },
  priceText: {
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 16,
    color: '#222222',
  },
  changeAdressText: {
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 16,
    color: '#DB3022',
  },
  adressText: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#222222',
  },
  btnAdressWrapper:{
    marginBottom:34
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
  inputWrapper: {
    marginBottom: '16px',
  },
  inputWrapper2: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '20px',
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
}));
