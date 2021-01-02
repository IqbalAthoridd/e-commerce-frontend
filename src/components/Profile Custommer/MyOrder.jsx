import React from 'react';
import { Grid, Paper, Button } from '@material-ui/core';
import { profileStyle } from './profileStyles';

export default function MyOrder() {
  const classes = profileStyle();
  return (
    <Grid className={classes.content} item md={9}>
      <Paper className={classes.paperContent} elevation={3}>
    </Paper>
    </Grid>
  );
}
