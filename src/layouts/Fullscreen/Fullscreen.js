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
        width: 'calc(100vw - 50px)',
        height: '100vh',
        left: 0,
        top: 0,
        paddingLeft: 50
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