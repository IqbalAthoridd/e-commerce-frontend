import React from 'react';
import { makeStyles, TextField, fade } from '@material-ui/core';

const useStylesReddit = makeStyles((theme) => ({
  root: {
    border: '1px solid #9B9B9B',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#fcfcfb',
    borderRadius: '4px',
    filter: 'drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.05))',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {
      backgroundColor: '#fff',
    },
    '&$focused': {
      backgroundColor: '#fff',
      boxShadow: `${fade(theme.palette.text.secondary, 0.25)} 0 0 0 2px`,
      borderColor: '#9B9B9B',
    },
  },
  focused: {},
}));

export default function InputTextNew(props) {
  const classes = useStylesReddit();

  return (
    <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
  );
}
