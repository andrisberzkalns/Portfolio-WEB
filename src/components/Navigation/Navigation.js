import React from 'react';
import NavigationSideBar from './NavigationSideBar';
import NavigationBar from './NavigationBar';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    mobile: {
        [theme.breakpoints.down('md')]: {
        },
        [theme.breakpoints.up('lg')]: {
            display: 'none'
        }
    },
    desktop: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
        [theme.breakpoints.up('lg')]: {
        }
    }
})

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