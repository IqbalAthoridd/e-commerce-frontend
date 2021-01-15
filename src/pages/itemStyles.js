import { makeStyles } from '@material-ui/core/styles';
export const itemStyle = makeStyles((theme) => ({
  container: {
    padding: '50px 7.5% 0 7.5%',
    [theme.breakpoints.down('xs')]: {
      padding: '50px 16px 0 16px',
    },
  },
}));