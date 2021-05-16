import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 220,
  },
  fullList: {
    width: 'auto',
  },
});

const SideDrawer = (props) => {
  const classes = useStyles();
  let history = useHistory();

  // Navigation helper to route to different modules
  const navigate = (loc) => {
    history.push(`/${loc}`);
    toggleDrawer(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    props.setSideNav(open);
  };

  const ItemsList = [
    {
      text: 'Login',
      //   icon: <AccountCircleIcon />,
      //   onClick: (e) => navigate('user-landing/login'),
    },

    {
      text: 'Menu',
      //   icon: <AddRoundedIcon />,
      //   onClick: (e) => navigate('user-landing/signup'),
    },

    {
      text: 'Conatct Us',
      //   icon: <HelpIcon />,
      // onClick: (e) => navigate('search'),
    },
  ];
  return (
    <>
      <Drawer anchor='left' open={props.sideNav} onClose={toggleDrawer(false)}>
        <div
          className={classes.list}
          role='presentation'
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {ItemsList.map((item) => {
              const { text, icon } = item;
              return (
                <ListItem button key={text}>
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
                </ListItem>
              );
            })}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default SideDrawer;
