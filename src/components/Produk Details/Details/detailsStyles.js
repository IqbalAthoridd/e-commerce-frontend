import {makeStyles} from '@material-ui/core'

export const detailStyle = makeStyles({
    link:{
        margin:"50px 0"
    },
    image:{
        marginRight:"26px"
    },
    lContainer:{
        margin:"40px 0"
    },
    cContainer:{
        marginBottom:"40px"
    },
    pReview:{
        margin:"50px 0"
    },
    gridRat:{
        marginRight:"60px"
    },
    hrSpacing:{
        margin:"50px 0"
    },
    btnChat:{
        color:"#22222",
        border:"1px solid black",
        padding:"10px 63px",
        borderRadius:"25px",
        textTransform:"none",
        '&:focus':{
            outline:"none"
        }
    },
    addBag: {
        padding:"10px 50px",
        color:"#22222",
        border:"1px solid black",
        borderRadius:"25px",
        textTransform:"none",
        '&:focus':{
            outline:"none"
        },
        marginLeft:"10px"
    },
    btnBuy:{
        padding:"10px 50px",
        background:"#3285A8",
        color:"#FFFF",
        textTransform:"none",
        borderRadius:"25px",
        marginLeft:"10px",
        '&:focus':{
            outline:"none"
        },
        '&:hover':{
            background:"#266985"
        },
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
    iconMin:{
        color:"#FFFF"
    },
    iconPlus:{
        color:"black"
    },
    
})
