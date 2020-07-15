import React, { useContext, memo } from 'react'
import { Link, useLocation } from "react-router-dom";
import { LocaleContext } from '../../contexts/localization/LocaleProvider';
import { withStyles } from '@material-ui/core/styles';

import LocalizationButton from '../LocalizationButton';
import { NavigationItem } from './components/NavigationItem';
import links from '../../variables/navigation';

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

const NavigationSideBar = memo(({ classes }) => {

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

export default withStyles(styles)(NavigationSideBar);