import {makeStyles} from '@material-ui/core'

export const profileStyle = makeStyles((theme)=>({
    sidebar:{
       height:"100%"
    },
    btnPerson:{
        background:"#456BF3",
        width: "32px",
        height: "32px",
        '&:focus': {
            outline: 'none',
          },
          '&:hover': {
            outline: 'none',
            background:"#456BF3"
          },
    },
    btnLocation:{
        background:"#F36F45",
        width: "32px",
        height: "32px",
        '&:focus': {
            outline: 'none',
          },
          '&:hover': {
            outline: 'none',
            background:"#F36F45"
          },
    },
    btnOrder:{
        background:"#F3456F",
        width: "32px",
        height: "32px",
        '&:focus': {
            outline: 'none',
          },
          '&:hover': {
            outline: 'none',
            background:"#F3456F"
          },
    },
    iconColor:{
        color:"white"
    },
    large: {
      width: theme.spacing(15),
      height: theme.spacing(15),
      fontSize:"80px",
      textTransform:"uppercase"
    },
    input:{
      display:"none"
    }
}))