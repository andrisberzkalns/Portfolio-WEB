import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Locale } from '../../contexts/localization/LocaleProvider';
import { Typography } from '@material-ui/core';
import School from '@material-ui/icons/School';
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
    container: {
        paddingLeft: '60px'
    },
    educationContainer: {
        height: '100vh'
    },
    title: {
        color: "#444",
        fontFamily: 'open sans',
        fontSize: '3em',
        fontStyle: 'bold',
        fontWeight: 700,
        textTransform: 'uppercase',
    },
    subtitle: {
        color: "#111",
        fontFamily: 'acumin-pro, sans-serif',
        fontSize: '1.2em',
        fontStyle: 'bold',
        fontWeight: 400,
        textTransform: 'uppercase',
    },
    description: {
        color: "#111",
        fontFamily: 'acumin-pro, sans-serif',
        fontSize: '1em',
        fontStyle: 'normal',
        fontWeight: 400,
        marginTop: '6px'
    },
    year: {
        color: "#111",
        fontFamily: 'acumin-pro, sans-serif',
        fontSize: '1.2em',
        fontStyle: 'bold',
        fontWeight: 600,
    },
    school: {
        marginTop: '40px',
        marginBottom: '40px',
        paddingTop: '40px',
        paddingBottom: '40px',
        borderTop: 'solid 2px #ddd',
        borderBottom: 'solid 2px #ddd'
    },
    icon: {
        paddingTop: '15px',
        paddingLeft: '8px'
    }
});


const schools = [
    {
        title: <Locale string={"education.lu.title"}/>,
        subtitle: <Locale string={"education.lu.subtitle"}/>,
        year: <Locale string={"education.lu.year"}/>,
        description: <Locale string={"education.lu.description"}/>,
    },
    {
        title: <Locale string={"education.mvsk.title"}/>,
        subtitle: <Locale string={"education.mvsk.subtitle"}/>,
        year: <Locale string={"education.mvsk.year"}/>,
        description: <Locale string={"education.mvsk.description"}/>,
    }
]


const Education = ({classes}) => {

    return (
        <div className={classes.container}>
            <Grid 
                item 
                container
                xs={12} 
                md={8} 
                lg={6} 
                spacing={0}
                direction="column"
                justify="center"
                className={classes.educationContainer}
            >
            {
            schools.map((school, key) => (
                <div key={key} className={classes.school}>
                    <Typography variant="h2" className={classes.title}>
                        {school.title}
                    </Typography>
                    <Typography variant="subtitle1" className={classes.subtitle}>
                        {school.subtitle}
                    </Typography>
                    <Typography variant="subtitle1" className={classes.year}>
                        {school.year}<School className={classes.icon} />
                    </Typography>
                    <Typography variant="body1" className={classes.description}>
                        {school.description}
                    </Typography>
                </div>
            ))
            }
            </Grid>
        </div>
    )
}

export default withStyles(styles)(Education);