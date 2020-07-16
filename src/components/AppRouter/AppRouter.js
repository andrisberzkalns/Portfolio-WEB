import React, { useContext } from 'react'
import { CSSTransition } from 'react-transition-group'
import { LocaleContext } from '../../contexts/localization/LocaleProvider';
import { useLocation, Route, Redirect } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';

import routes from '../../variables/routes';

import './routing.css';

const styles = (theme) => {
  
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
      marginLeft: '0.8em',
      marginRight: '1em',
      textDecoration: 'none',
      fontSize: '0.6em',
      textTransform: 'uppercase',
      fontWeight: '100',
      transition: 'font-size 0.1s',
      color: theme.palette.text.secondary,
      '&:hover': {
        fontSize: '0.7em',
        fontWeight: '400',
        color: theme.palette.text.primary
      }
    },
    icon: {
      color: "rgba(255,255,255, 0.7)"
    },
    drawer: {
      backgroundColor: 'black',
      width: theme.navigation.width
    },
    drawerPaper: {
      backgroundColor: 'black',
      width: theme.navigation.width
    }
  }
};


const AppRouter = ({ classes, children }) => {

  const { language, changeLanguage } = useContext(LocaleContext);
  const location = useLocation();
  
  const splitRoute = (route) => {
    return route.split('/').filter(each => each !== "");
  }

  if(location.pathname === "/") {
    return <Redirect to={`/${language}/`} />
  }

  if(splitRoute(location.pathname)[0] !== language) {
    changeLanguage(splitRoute(location.pathname)[0]);
  }

  const localizeRoute = (path) => {
    return "/" + language + path;
  }

  return (
    <>
      {children}
      {routes.map(({ path, Component, Layout }) => (
          <Route key={path} exact path={localizeRoute(path)}>
              {({ match }) => (
                  <CSSTransition
                    in={match !== null}
                    timeout={200}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="page">
                      { Layout &&
                        <Layout>
                            <Component/>
                        </Layout>
                      }
                    </div>
                  </CSSTransition>
              )}
          </Route>
      ))}
      {/* <Redirect to="/en/" /> */}
    </>
  )
}

export default withStyles(styles)(AppRouter);