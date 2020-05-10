import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import { HeaderProvider } from '../../context/HeaderProvider/store';
import ProfileMenu from '../ProfileMenu/index';

const drawerWidth = 240;

const useStyles = makeStyles( ( theme ) => ( {
  root: {
    display: 'flex'
  },
  appBar: {
    width: `calc(100% - ${ drawerWidth }px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    position: 'fixed',
    zIndex: 999
  },
  drawerPaper: {
    top: 'unset',
    width: drawerWidth
  },
  drawerOpen: {
    top: 'unset',
    width: drawerWidth,
    transition: theme.transitions.create( 'width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shortest
    } )
  },
  drawerClose: {
    top: 'unset',
    transition: theme.transitions.create( 'width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shortest
    } ),
    width: '0'
  },
  nested: {
    paddingLeft: theme.spacing( 4 )
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
  const [ subMenuOpen, setSubmenuOpen ] = useState( false )

  function handleClick () {
    setSubmenuOpen( !subMenuOpen )
  }

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
            aria-label="menu"
            onClick={toggleMenu}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <ProfileMenu />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: open ? classes.drawerOpen : classes.drawerClose
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {[ 'Inbox', 'Starred', 'Send email', 'Drafts' ].map( ( text, index ) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ) )}
        </List>
        <Divider />
        <List>
          {[ 'All mail', 'Trash', 'Spam' ].map( ( text, index ) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ) )}
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
            {subMenuOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={subMenuOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItem>
            </List>
          </Collapse>

        </List>
      </Drawer>
    </HeaderProvider>
  );
}
