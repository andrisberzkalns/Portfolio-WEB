import React, { useContext } from 'react'
import {
    Link, useLocation
} from "react-router-dom";
import { LocaleContext, Locale } from '../../contexts/localization/LocaleProvider';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Home from '@material-ui/icons/Home';
import Phone from '@material-ui/icons/Phone';
import Web from '@material-ui/icons/Web';
import LocalizationButton from '../LocalizationButton';
// import { Typography } from '@material-ui/core';

const styles = (theme) => {

  return {
    dark: {
      '> iconSelected': {
        color: 'black'
      },
      '> menuButton': {
        color: theme.palette.text.primary
      }
    },
    light: {
      iconSelected: {
        color: 'black'
      },
      menuButton: {
        color: 'black'
      }
    },
    iconSelected: {
      color: 'rgba(255,255,255,1)',
      padding: '12px',
      '&:hover': {
        color: "rgba(0,0,0,0)",
      }
    },
    icon: {
      color: "rgba(255,255,255, 0.7)",
      padding: '12px',
      '&:hover': {
        color: "rgba(255,255,255, 0.2)",
      }
    },
    menuButton: {
      "&:hover": {
        "& div": {
          color: "white"
        }
      }
    },
    container: {
      position: "absolute",
      zIndex: 2,
      width: 'calc(100vw - 40px)',
      paddingLeft: "40px",
      // top: '2vh',
      backgroundColor: "rgba(0,0,0,0.2)"
    },
    labelSelected: {
      position: "absolute",
      fontSize: "0.6em",
      color: "rgba(0,0,0,0)",
      zIndex: -1
    },
    label: {
      position: "absolute",
      fontSize: "0.6em",
      color: "rgba(0,0,0,0)",
      zIndex: -1,

    },
    localization: {
      display: "inline",
      position: "absolute",
      marginTop: "25px",
      right: 0
    },
    parent: {
      width: 12,
      height: 12,
      backgroundColor: "red",
      child: {
        width: 10,
        height: 10,
        backgroundColor: "orange"
      }
    }
  }
};

const links = [
  {
    label: <Locale string={"navigation.home"}/>,
    path: '/',
    icon: Home,
    theme: 'light'
  },
  {
    label: <Locale string={"navigation.work"}/>,
    path: '/work-experience',
    icon: Web,
    theme: 'dark'
  },
  {
    label: <Locale string={"navigation.contact"}/>,
    path: '/contact',
    icon: Phone,
    theme: 'light'
  }
]

const Navigation = ({ classes }) => {

  let location = useLocation();
  const { language, } = useContext(LocaleContext);

  return (
    <div className={classes.container}>
      {
        links.map(link => (
          <Link classes={link.theme === 'dark' ? 'dark' : 'light'} key={link.path} to={"/" + language + link.path}>
            <IconButton disableRipple={true} edge="start" className={classes.menuButton} color="inherit" aria-label={link.label}>
              <link.icon className={location.pathname.slice(3, location.pathname.length) === link.path ? classes.iconSelected : classes.icon} />
              <div className={location.pathname.slice(3, location.pathname.length) === link.path ? classes.labelSelected : classes.label }>{link.label}</div>
            </IconButton>
          </Link>
        ))
      }
      <div className={classes.parent}>
        <div className={classes.child}>

        </div>
      </div>
      <div className={classes.localization}>
        <LocalizationButton />
      </div>
    </div>
  )
}

export default withStyles(styles)(Navigation);