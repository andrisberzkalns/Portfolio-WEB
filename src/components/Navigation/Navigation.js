import React from 'react';
import NavigationSideBar from './NavigationSideBar';
import NavigationBar from './NavigationBar';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => {
  return {
    mobile: {
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    desktop: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
        [theme.breakpoints.up('md')]: {
        }
    }
  }
}

const Navigation = ({classes}) => {
    return (
        <>
            <span className={classes.mobile}>
                <NavigationBar />
            </span>
            <span className={classes.desktop}>
                <NavigationSideBar />
            </span>
        </>
    )
}

export default withStyles(styles)(Navigation);