import React, { useContext, memo } from 'react'
import { Link, useLocation } from "react-router-dom";
import { LocaleContext, Locale } from '../../contexts/localization/LocaleProvider';
import { withStyles } from '@material-ui/core/styles';

import Business from '@material-ui/icons/Business';
import Email from '@material-ui/icons/Email';
import Home from '@material-ui/icons/Home';
import School from '@material-ui/icons/School';
import Work from '@material-ui/icons/Work';

import LocalizationButton from '../LocalizationButton';
import NavigationItem from './components/NavigationItem';

const styles = (theme) => {

  return {
    container: {
        backgroundColor: "#111",
        boxShadow: "0px 0px 15px black",
        height: '100vh',
        position: "absolute",
        width: '50px',
        zIndex: 1
    },
    localizationButton: {
        padding: '12px',
        marginTop: '10px',
        marginBottom: '30px'
    }
  }
};

const links = [
  {
    label: <Locale string={"navigation.home"}/>,
    path: '/',
    icon: Home
  },
  {
    label: <Locale string={"navigation.work"}/>,
    path: '/work-experience',
    icon: Business
  },
  {
    label: <Locale string={"navigation.education"}/>,
    path: '/education',
    icon: School
  },
  {
    label: <Locale string={"navigation.projects"}/>,
    path: '/projects',
    icon: Work
  },
  {
    label: <Locale string={"navigation.contact"}/>,
    path: '/contact',
    icon: Email
  }
]

const Navigation = memo(({ classes }) => {

  let location = useLocation();
  const { language, } = useContext(LocaleContext);

  return (
    <div className={classes.container}>
        <div className={classes.localizationButton}>
            <LocalizationButton />
        </div>
        {
            links.map(link => (
            <Link key={link.path} to={"/" + language + link.path}>
                <NavigationItem 
                    label={link.label}
                    icon={link.icon}
                    selected={location.pathname.slice(3, location.pathname.length) === link.path}
                />
            </Link>
            ))
        }
    </div>
  )
})

export default withStyles(styles)(Navigation);