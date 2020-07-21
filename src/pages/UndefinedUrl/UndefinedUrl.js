import React from 'react';
import { Locale } from '../../contexts/localization';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    container: {
        width: 'calc(100% - 80px)',
        height: 'calc(100% - 80px)',
        padding: '40px'
    },
    title: {
        fontFamily: 'open sans',
        fontSize: '3em',
        fontStyle: 'bold',
        fontWeight: 700,
        textTransform: 'uppercase',
        color: "#000",
    },
    subtitle: {
        color: "#333",
        fontFamily: 'acumin-pro, sans-serif',
        fontSize: '1.2em',
        fontStyle: 'normal',
        fontWeight: 400,
        textTransform: 'uppercase',
        marginTop: '4px'
    },
});

const UndefinedUrl = ({classes}) => {
    return (
        <div className={classes.container}>
            <Typography variant="h2" className={classes.title}>
                <Locale string={"404.title"}/>
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
                <Locale string={"404.subtitle"}/>
            </Typography>
        </div>
    )
}

export default withStyles(styles)(UndefinedUrl);