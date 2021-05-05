import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
// import {
//   createMuiTheme,
//   ThemeProvider,
// } from '@material-ui/core/styles';
const green_color = '#4caf50';
const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontFamily: 'Itim',
    color: green_color,
    fontSize: '3rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },

  links: {
    marginLeft: theme.spacing(2),
    '&:hover': {
      color: green_color,
    },
    color: 'black',
    fontSize: '1.3rem',
    fontWeight: '500',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
}));

// const title_theme = createMuiTheme({
//   typography: {
//     h3: {
//       fontFamily: 'Itim',
//       color: '#4caf50',
//     },
//   },
// });

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position='static' color='transparent' elevation={1}>
        <Toolbar>
          {/* <ThemeProvider theme={title_theme}> */}
          <Typography variant='h3' className={classes.title}>
            Fresh Box
          </Typography>
          {/* </ThemeProvider> */}
          <Link underline='none'>
            <Typography className={classes.links}>Weekly Menu</Typography>
          </Link>
          <Link underline='none'>
            <Typography className={classes.links}>How It Works</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
