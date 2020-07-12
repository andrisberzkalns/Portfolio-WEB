import React from 'react'

import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    page: {
        // paddingLeft: theme.navigation.width,
        paddingRight: theme.navigation.width,
        height: '100vh',
        width: '100vw',
        left: theme.navigation.width,
        backgroundColor: 'lightgray',
        position: 'fixed'
    }
});

const Page = ({ children, classes }) => {


    return (
        <div className={classes.page}>{children}</div>
    )
}

export default withStyles(styles)(Page);