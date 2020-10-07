import { makeStyles } from '@material-ui/core/styles';

export const CardStyles = makeStyles({
    root: {
    maxWidth: 200,
  },
    containerCard: {
      padding: '0 8%',
      marginTop: '20px',
    },
    Size: {
      width: '100%',
  
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
    containerCardList: {
      marginBottom: '20px',
    },
    Spacing: {
      marginRight: '25px',
      marginBottom: '25px',
      display: 'inline-block',
      maxWidth:200
    },
  });