import React from 'react';
import { Locale } from '../../contexts/localization/LocaleProvider';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

const styles = (theme) => ({
    container: {
        backgroundColor: '#eee',
        height: '100vh',
        padding: '20px',
        paddingTop: '10%'
    },
    formContainer: {
        color: '#444'
    },
    title: {
        color: "#444",
        fontFamily: 'open sans',
        fontSize: '1.6em',
        fontStyle: 'bold',
        fontWeight: 700,
        textTransform: 'uppercase',
    },
    subtitle: {
        color: "#000",
        fontFamily: 'acumin-pro, sans-serif',
        fontSize: '1.2em',
        fontStyle: 'bold',
        fontWeight: 500,
        marginTop: '4px'
    },
    spacing: {
        paddingBottom: '40px',
    }
});

const Contact = ({classes}) => {

    return (
        <div className={classes.container}>
            <Grid 
                container
                direction="column"
                alignItems="center"
                justify="center"
                >
                <Grid 
                    item
                    container
                    direction="column"
                    alignItems="center"
                    justify="center"
                    className={classes.spacing}
                >
                    <Typography 
                        variant="h1"
                        className={classes.title}
                    >
                        <Locale string={"contact.title"} /> 
                    </Typography>
                    <Typography 
                        variant="subtitle1"
                        className={classes.subtitle}
                    >
                        <Locale string={"contact.text"} /> 
                    </Typography>
                </Grid>
                <Grid 
                    item
                    xs={12}
                    sm={10}
                    md={8}
                    lg={6}
                    container
                >
                    <FormControl fullWidth>
                        <InputLabel htmlFor="standard-adornment-amount">Email</InputLabel>
                        <Input 
                            id="email" 
                            label="Email"
                            aria-describedby="email" 
                            variant="filled"
                            className={classes.formContainer}
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="standard-adornment-amount">Name</InputLabel>
                        <Input 
                            id="name" 
                            label="Name"
                            aria-describedby="name" 
                            variant="filled"
                            className={classes.formContainer}
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="standard-adornment-amount">Message</InputLabel>
                        <Input
                            id="outlined-multiline-flexible"
                            label="Message"
                            multiline
                            rows={12}
                            // value={}
                            // onChange={}
                            variant="filled"
                            className={classes.formContainer}
                        />
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(Contact);