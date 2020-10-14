import { makeStyles} from '@material-ui/core'

export const cartStyle = makeStyles({
    diplay:{
        display:"inline-blok"
    },
    btnMin:{
        width:"36px",
        height:"36px",
        background:"#D5D5D5",
        '&:hover': {
            backgroundColor: '#D5D5D5',
          },
          '&:focus': {
            outline:"none"
          },
    },
    btnPlus:{
        width:"36px",
        height:"36px",
        background:"#FFFFFF",
        '&:hover': {
            backgroundColor: '#FFFFF',
          },
          '&:focus': {
            outline:"none"
          },
          boxShadow:"0px 0px 4px rgba(142, 142, 142, 0.5)"
    },
    btnDel:{
        textTransform:"none",
        background:"#FFFFFF",
        color:"red",
        '&:hover': {
            background:"#FFFFFF",
            outline:"none"
          },
          '&:focus': {
            outline:"none",
          }
    },
    btnBuy:{
        textTransform:"none",
        background:"#3285A8",
        color:"#FFFFFF",
        borderRadius:"25px",
        '&:hover': {
            background:"#266985",
            outline:"none"
          },
          '&:focus': {
            outline:"none",
          }
    },
    iconMin: {
      color:"white"
    },
    iconPlus:{
      color:"black"
    },
    checkBox:{
      color:"black",
      '&$checked': {
        color: "black",
      },
    }
    
    
})
