import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx'; // smaller than className, good for less bundle size
import SideDrawer from './SideDrawer';
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
      cursor: 'pointer',
    },
    color: 'black',
    fontSize: '1.3rem',
    fontWeight: '500',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  login: {
    color: green_color,
  },

  menuButton: {
    marginRight: theme.spacing(2), // 8px * 2
    [theme.breakpoints.up('md')]: {
      display: 'none',
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

  const [sideNav, setSideNav] = useState(false);

  return (
    <div>
      <AppBar position='static' color='transparent' elevation={1}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='open drawer'
            onClick={(e) => setSideNav(!sideNav)}
          >
            <MenuIcon />
          </IconButton>
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

          <Link underline='none'>
            <Typography className={classes.links}>Contact Us</Typography>
          </Link>

          <Link underline='none'>
            <Typography className={clsx(classes.links, classes.login)}>
              login
            </Typography>
          </Link>
          {sideNav && <SideDrawer sideNav={sideNav} setSideNav={setSideNav} />}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
