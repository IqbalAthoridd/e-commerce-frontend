import { makeStyles } from '@material-ui/core/styles';

export const CardStyles = makeStyles({
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
      marginRight: '20px',
      marginBottom: '20px',
      display: 'inline-block',
    },
  });