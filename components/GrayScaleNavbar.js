import React from 'react';
import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.grey[900],
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.grey[800],
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    color: theme.palette.grey[50],
  },
  button: {
    color: theme.palette.grey[50],
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(4),
    },
  },
}));

const GrayScaleNavbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          Zé Zumbini
        </Typography>
        <div>
          <Button className={classes.button}>Home</Button>
          <Button className={classes.button}>About</Button>
          <Button className={classes.button}>Contact</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default GrayScaleNavbar;