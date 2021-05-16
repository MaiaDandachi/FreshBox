import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CoverImage from '../../assets/images/Cover.jpg';
import {
  CssBaseline,
  Typography,
  Grid,
  Button,
  withStyles,
} from '@material-ui/core';
import Container from '@material-ui/core/Container';

const green_color = '#4caf50';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${CoverImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '85vh',
    width: '100%',
  },
  title: {
    color: 'white',
    fontSize: '4.5rem',
    fontWeight: '700',
    marginTop: '7rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
      marginTop: '3rem',
    },
  },
}));

const GreenButton = withStyles({
  root: {
    backgroundColor: green_color,
    marginTop: '1rem',
    width: '10rem',
    '&:hover': {
      backgroundColor: '#3C8C40',
    },
  },
})(Button);

const Landing = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container>
        <Grid container direction='column'>
          <Grid item xs={6}>
            <Typography variant='h3' className={classes.title}>
              Take The Stress Out Of Meal Time{' '}
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <GreenButton>Satrt Cooking</GreenButton>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Landing;
