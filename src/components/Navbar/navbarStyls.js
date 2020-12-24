import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    NavigationBar: {
      background: '#FFFF',
      color: 'black',
      padding: '20px 7.5% 20px 7.5%',
      [theme.breakpoints.down('xs')]:{
        padding: '10px 16px 10px 16px',
      }
    },
    search:{
      borderRadius:40,
      paddingLeft:20,
    },
    formControl:{
      position:'relative'
    },
    searchIcon:{
      position:'absolute',
      right:12,
      top:8,
      color:"#9B9B9B",
      [theme.breakpoints.down('xs')]:{
        top:5,
        fontSize:20
      }
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
      [theme.breakpoints.down('xs')]:{
        padding:'6px 5px',
        borderRadius:'10px',
        marginLeft:'5px'
      }
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
      [theme.breakpoints.down('xs')]:{
       border:'1px solid #9b9b9b'
      }
    },
    logo:{
      width:'119px',
      height:'44px',
      marginRight:'50px',
      [theme.breakpoints.down('xs')]:{
        width:'80px',
        marginRight:'20px'
      },
      // [theme.breakpoints.down('xs')]:{
      //   width:'80px',

      //   marginRight:'20px'
      // }
    },
    filterLogo:{
      [theme.breakpoints.down('xs')]:{
        width:'15px',
        height:'15px'
      }
    },
    iconReorder:{
      color:'#9b9b9b'
    },
    btnMenu:{
      border:'none',
      '&:active':{
        outline:'none',
      },
      '&:focus': {
        outline: 'none',
      },
    }
  }));