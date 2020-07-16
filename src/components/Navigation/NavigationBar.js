import React, { useContext, memo } from 'react'
import { Link, useLocation } from "react-router-dom";
import { LocaleContext } from '../../contexts/localization/LocaleProvider';
import { withStyles } from '@material-ui/core/styles';

import LocalizationButton from '../LocalizationButton';
import { NavigationItemTop as NavigationItem } from './components/NavigationItem';
import links from '../../variables/navigation';
// import Menu from '@material-ui/icons/Menu';

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
      // padding: '4px',
      // fontSize: '3em',
      color: '#fff',
      marginLeft: 60
    }
  }
};

const NavigationBar = memo(({ classes }) => {

  let location = useLocation();
  const { language, } = useContext(LocaleContext);

  return (
    <div className={classes.container}>
        <div className={classes.localicationContainer}>
          <LocalizationButton />
        </div>
        <div className={classes.itemContainer}>
        {
          links.map(link => (
            <div key={link.path} className={classes.item}>
              <Link to={"/" + language + link.path}>
                  <NavigationItem 
                      label={link.label}
                      icon={link.icon}
                      selected={location.pathname.slice(3, location.pathname.length) === link.path}
                  />
              </Link>
            </div>
          ))
        }
          {/* <Menu style={{fontSize: '1em'}}></Menu> */}
        </div>
    </div>
  )
})
    



export default withStyles(styles)(NavigationBar);