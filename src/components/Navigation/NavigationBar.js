import React from 'react'
import {
    Link
} from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Home from '@material-ui/icons/Home';
import Person from '@material-ui/icons/Person';
import Phone from '@material-ui/icons/Phone';
import Web from '@material-ui/icons/Web';

const styles = (theme) => {
  console.log(theme);
  
  return {
    root: {
      flexGrow: 1,
    },
    menuButton: {
      color: theme.palette.text.primary
    },
    bar: {
      backgroundColor: theme.palette.primary.main,
      borderBottom: theme.palette.secondary.main + ' solid 3px'
    },
    title: {
      marginLeft: '0.4em',
      marginRight: '1em',
      textDecoration: 'none',
      fontSize: '0.7em'
    },
    icon: {
      color: "rgba(255,255,255, 0.7)"
    }
  }
};

const Navigation = ({ classes }) => {

    return (
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.bar}>
        <Link to="/">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <Home className={classes.icon} />
              <Typography variant="h6" className={classes.title}>
                Home
              </Typography>
            </IconButton>
          </Link>

          <Link to="/about">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <Person className={classes.icon} />
              <Typography variant="h6" className={classes.title}>
                About
              </Typography>
            </IconButton>
          </Link>
          
          <Link to="/contact">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <Phone className={classes.icon} />
              <Typography variant="h6" className={classes.title}>
                Contact
              </Typography>
            </IconButton>
          </Link>

          <Link to="/demos">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <Web className={classes.icon} />
              <Typography variant="h6" className={classes.title}>
                Demos
              </Typography>
            </IconButton>
          </Link>

        </Toolbar>
      </AppBar>
    )
}

export default withStyles(styles)(Navigation);