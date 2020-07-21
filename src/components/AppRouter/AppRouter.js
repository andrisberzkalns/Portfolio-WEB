import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { Route, BrowserRouter as Router } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Header from '../Header';
import LocalizedSwitch from './LocalizedSwitch';

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

  return (
    <Router>
      {children}
      <LocalizedSwitch>
        {routes.map(({ path, Component, Layout, meta, exact }) => (

          <Route key={path} exact={exact} path={path}>
            {({ match }) => {
              return (
              <CSSTransition
                in={match !== null}
                timeout={500}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  { Layout &&
                    <Layout>
                      <Header title={meta.title} description={meta.description} />
                      <Component/>
                    </Layout>
                  }
                </div>
              </CSSTransition>
            )}}
          </Route>
        ))}
        {/* <Redirect from="/" exact to={localizeRoute('/')} /> */}
        {/* <Redirect key="redirect" to={localizeRoute('/404')} /> */}
      </LocalizedSwitch>
    </Router>
  )
}

export default withStyles(styles)(AppRouter);