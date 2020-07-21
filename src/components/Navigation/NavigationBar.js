import React, { useContext, memo } from 'react'
import { NavLink } from "react-router-dom";
import { LocaleContext } from '../../contexts/localization';
import { withStyles } from '@material-ui/core/styles';

import LocalizationButton from '../LocalizationButton';
import { NavigationItemTop as NavigationItem } from './components/NavigationItem';
import links from '../../variables/navigation';
import routes from '../../variables/locales/routes';

const styles = (theme) => {

  return {
    container: {
        display: 'relative',
        backgroundColor: "#111",
        boxShadow: "0px 0px 15px black",
        height: '50px',
        position: "absolute",
        width: '100vw',
        zIndex: 1,
        overflow: 'hidden'
    },
    localicationContainer: {
      position: 'absolute',
      height: '30px',
      width: '30px',
      padding: '10px',
      paddingTop: '16px'
    },
    item: {
      display: 'inline-block'
    },
    itemContainer: {
      color: '#fff',
      marginLeft: 60
    },
    selected: {
      backgroundColor: 'red'
    }
  }
};

const NavigationBar = memo(({ classes }) => {

  const { language, } = useContext(LocaleContext);

  return (
    <div className={classes.container}>
        <div className={classes.localicationContainer}>
          <LocalizationButton />
        </div>
        <div className={classes.itemContainer}>
        {
          links.map((link, index) => (
            <div key={link.path} className={classes.item}>
              <NavLink to={`/${language}${routes[language][link.path]}`}>
                <NavigationItem 
                    label={link.label}
                    icon={link.icon}
                />
              </NavLink>
            </div>
          ))
        }
          {/* <Menu style={{fontSize: '1em'}}></Menu> */}
        </div>
    </div>
  )
})
    



export default withStyles(styles)(NavigationBar);