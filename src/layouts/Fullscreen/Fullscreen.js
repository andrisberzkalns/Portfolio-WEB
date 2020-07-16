import React from 'react'

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    page: {
        // paddingLeft: theme.navigation.width,
        // paddingRight: theme.navigation.width,
        // minHeight: '100vh',
        overflowY: 'scroll',
        overflowX: 'hidden',
        height: '100vh',
        left: 0,
        top: 0,
        
        [theme.breakpoints.down('sm')]: {
            width: 'calc(100vw)',
            paddingTop: 50,
            paddingLeft: 0,
            height: 'calc(100vh - 50px)'
        },
        [theme.breakpoints.up('md')]: {
            width: 'calc(100vw - 50px)',
            paddingTop: 0,
            paddingLeft: 50
        }
    }
});

const Fullscreen = ({ children, classes }) => {


    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <div className={classes.page}>{children}</div>
                </Grid>
                <Grid item xs={12}>
                    <div>footer</div>
                </Grid>
            </Grid>
        </>
    )
}

export default withStyles(styles)(Fullscreen);