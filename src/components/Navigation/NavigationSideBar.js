import React, { useContext, memo } from 'react'
import { NavLink } from "react-router-dom";
import { LocaleContext } from '../../contexts/localization';
import { withStyles } from '@material-ui/core/styles';

import LocalizationButton from '../LocalizationButton';
import { NavigationItem } from './components/NavigationItem';
import links from '../../variables/navigation';
import routes from '../../variables/locales/routes';

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

  const { language } = useContext(LocaleContext);

  return (
    <div className={classes.container}>
        <div className={classes.localizationButton}>
            <LocalizationButton />
        </div>
        {
            links.map((link, index) => (
            <NavLink 
              key={link.path}
              to={`/${language}${routes[language][link.path]}`} 
             >
              <NavigationItem 
                label={link.label}
                icon={link.icon}
              />
            </NavLink>
            ))
        }
    </div>
  )
})

export default withStyles(styles)(NavigationSideBar);