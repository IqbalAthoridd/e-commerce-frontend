import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    NavigationBar: {
      background: '#FFFF',
      color: 'black',
      padding: '20px 7.5% 20px 7.5%',
    },
    search:{
      borderRadius:40,
      paddingLeft:20
    },
    formControl:{
      position:'relative'
    },
    searchIcon:{
      position:'absolute',
      right:15,
      top:9,
      color:"#9B9B9B"
    },
    btnFilter:{
      borderRadius:'15px',
      padding:'12px 11px',
      marginLeft:'11px',
      border:'1px solid #9b9b9b',
      '&:active':{
        outline:'none',
      },
      '&:focus': {
        outline: 'none',
      },
    },
    btnMargin:{
      marginRight:'20px'
    },
    btnMargin2:{
      marginRight:'41px'
    },
    iconCart:{
      color:'#9B9B9B'
    },
    btnLogin:{
      backgroundColor:'#DB3022',
      borderRadius:'25px',
      color:'white',
      textTransform:'none',
      padding:'8px 30px',
      fontStyle:'normal',
      fontWeight:'500',
      fontSize:'14px',
      lineHeight:'20px',
      '&:hover':{
        background:'#c7291c'
      },
      '&:active':{
        outline:'none',
      },
      '&:focus': {
        outline: 'none',
      },
    },
    btnSignup:{
      borderRadius:'25px',
      color:'#9b9b9b',
      textTransform:'none',
      padding:'8px 25px',
      fontStyle:'normal',
      fontWeight:'500',
      fontSize:'14px',
      lineHeight:'20px',
      '&:hover':{
      },
      '&:active':{
        outline:'none',
      },
      '&:focus': {
        outline: 'none',
      },
    }
  }));