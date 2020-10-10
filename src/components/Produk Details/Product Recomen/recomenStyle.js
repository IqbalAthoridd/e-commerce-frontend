import {makeStyles} from '@material-ui/core'

export const recomenStyle = makeStyles({
    actionArea:{
        '&:focus': {
          outline: 'none',
          border: 'none',
        },
        '&:active': {
          outline: 'none',
          border: 'none',
        },
      },
      cardContent: {
        padding: '10px 10px',
      },
      marginBox: {
        margin: 0,
      },
      labelSpacing:{
          marginBottom:"25px"
      }
})