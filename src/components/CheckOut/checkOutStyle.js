import {makeStyles} from '@material-ui/core'

export const checkOutStyles = makeStyles((theme)=>({
   paperSpacing:{
       marginLeft:"50px"
   },
   btnAdress:{
       textTransform:"none",
       color:"#9B9B9B",
       borderRadius:"25px",
       '&:active':{
           outline:"none"
       },
       '&:focus':{
        outline:"none"
    }
   },
   btnPayment:{
    background:"#3285A8",
    color:"#FFFF",
    borderRadius:"25px",
    textTransform:"none",
    '&:focus':{
        outline:"none",
        background:"#3285A8"
    },
    '&:hover':{
        background:"#266985"
    }
   },
   modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
   height:"675px"
  },
  btnClose:{
      '&:hover':{
          outline:"none"
      }
  },
  btnAddAdress:{
      padding:"34px 0",
      fontSize:"18px",
    textTransform:"none",
    border:"2px dashed #9b9b9b",
    '&:hover':{
        outline:"none"
    },
    '&:focus':{
        outline:"none"
    }
  },
  btnChangeAdress:{
      textTransform:"none",
      color:"#3285A8",
      padding:"0",
      border:"none",
      '&:focus':{
        outline:"none"
    }
  },
  btnCancel:{
      color:"#9b9b9b",
      textTransform:"none",
      borderRadius:"25px",
      '&:focus':{
        outline:"none"
    },
    padding:"8px 57px"

  },
  btnSave:{
      background:"#3285A8",
    color:"#FFFF",
    textTransform:"none",
    borderRadius:"25px",
    '&:focus':{
      outline:"none"
  },
  '&:hover':{
    background:"#266985"
},
  padding:"8px 57px",
  marginLeft:"20px"

}
}))