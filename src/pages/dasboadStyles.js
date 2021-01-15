import { makeStyles } from '@material-ui/core/styles';
export const dasboardStyle = makeStyles((theme) => ({
  container: {
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: 50,
  },
  paginationWrapper: {
    marginTop: 20,
    marginBottom: 50,
  },
  input: {
    paddingLeft: 10,
  },
  btnSearch:{
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 14,
    background:'#DB3022',
    color: 'white',
    textTransform:'none',
    '&:active': {
        outline: 'none',
      },
      '&:focus': {
        outline: 'none',
      },
      '&:hover': {
        outline: 'none',
        background:'#DB3022',
      },
  },
  btnAddWrapper:{
      marginLeft:40
  },
  btnProduct:{
    '&:active': {
        outline: 'none',
      },
      '&:focus': {
        outline: 'none',
      },
  },
  tableHeader:{
    fontWeight:'bold'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper:{
    backgroundColor:'white',
    border:'none',
    height:500,
    width:500,
    borderRadius:15,
    padding:'20px 20px 20px 20px'
  },
  labelWrapper:{
      textAlign:'center'
  },
  textLabel:{
      fontSize:20,
      fontWeight:'bold'
  }
}));
