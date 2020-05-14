import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { HeaderProvider } from '../../context/HeaderProvider/store';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import SideNav from '../SideNav/SideNav';

const useStyles = makeStyles( ( theme ) => ( {
  root: {
    display: 'flex'
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing( 3 )
  },
  menuButton: {
    marginRight: theme.spacing( 2 )
  },
  title: {
    flexGrow: 1
  }
} ) );

export default function Header () {
  const classes = useStyles();

  const [ open, setOpen ] = useState( true )

  function toggleMenu () {
    setOpen( !open )
  }

  return (
    <HeaderProvider>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
          >
            <MenuIcon
              aria-label="toggle main menu"
              aria-pressed={open}
              aria-haspopup="menu"
              onClick={toggleMenu}
            >
              Click to open menu
            </MenuIcon>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <ProfileMenu />
        </Toolbar>
      </AppBar>
      <SideNav open={open}/>
    </HeaderProvider>
  );
}
