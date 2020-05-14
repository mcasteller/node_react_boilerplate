import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

export default function SideNav ( props ) {

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
      height: '100%',
      flexShrink: 0,
      position: 'fixed',
      zIndex: theme.zIndex.speedDial
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

  const classes = useStyles();

  const [ subMenuOpen, setSubmenuOpen ] = useState( false )

  function handleClick () {
    setSubmenuOpen( !subMenuOpen )
  }
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: props.open ? classes.drawerOpen : classes.drawerClose
      }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <List
        aria-expanded={props.open}
        role= "menu"
        aria-haspopup="menu"
      >
        {[ 'Inbox', 'Starred', 'Send email', 'Drafts' ].map( ( text, index ) => (
          <ListItem
            button
            key={text}
            role="menuitem"
          >
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon titleAccess="meaning" /> : <MailIcon titleAccess="meaning" />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ) )}
        <Divider
          aria-orientation="vertical"
        />
        {[ 'All mail', 'Trash', 'Spam' ].map( ( text, index ) => (
          <ListItem
            button
            key={text}
            role="menuitem"
          >
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon titleAccess="meaning" /> : <MailIcon titleAccess="meaning" />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ) )}
        <ListItem
          button
          role="menuitem"
          onClick={handleClick}
        >
          <ListItemIcon>
            <InboxIcon titleAccess="meaning" />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {subMenuOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          in={subMenuOpen}
          timeout="auto"
          unmountOnExit>
          <List
            component="div"
            disablePadding
          >
            <ListItem
              button
              role="menuitem"
              aria-hidden={!subMenuOpen}
              className={classes.nested}>
              <ListItemIcon>
                <StarBorder titleAccess="meaning" />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>

  )
}

SideNav.propTypes = {
  open: PropTypes.bool.isRequired
}

