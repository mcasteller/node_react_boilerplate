import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LoginButton from '../LoginButton/LoginButton';
import { HeaderProvider } from '../../context/HeaderProvider/store';

const useStyles = makeStyles( ( theme ) => ( {
  menuButton: {
    marginRight: theme.spacing( 2 )
  },
  title: {
    flexGrow: 1
  }
} ) );

export default function Header () {
  const classes = useStyles();

  return (
    <HeaderProvider>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <LoginButton />
        </Toolbar>
      </AppBar>
    </HeaderProvider>
  );
}
