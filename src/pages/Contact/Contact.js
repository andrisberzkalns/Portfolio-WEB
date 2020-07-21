import React, { useState } from 'react';
import { Locale } from '../../contexts/localization';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

const styles = (theme) => ({
    button: {
        color: '#000',
        minWidth: '150px',
        "&:hover": {
            backgroundColor: '#ddd'
        }
    },
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
        textAlign: 'center'
    },
    subtitle: {
        color: "#000",
        fontFamily: 'acumin-pro, sans-serif',
        fontSize: '1.2em',
        fontStyle: 'bold',
        fontWeight: 500,
        marginTop: '4px',
        textAlign: 'center'
    },
    spacing: {
        paddingBottom: '40px',
    }
});

const Contact = ({classes}) => {

    const [, setValues] = useState({message: "", email: "", name: ""});
    const [error, setErrors] = useState({message: false, email: false, name: false});

    
    const validateEmail = (value) => {

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(re.test(String(value).toLowerCase())) {
            setErrors(prevState => ({
                ...prevState,
                email: false
            }));
        } else {
            setErrors(prevState => ({
                ...prevState,
                email: true
            }));
        }
    }

    const validateNotEmpty = (value, field) => {

        if(value) {
            setErrors(prevState => ({
                ...prevState,
                [field]: false
            }));
        } else {
            setErrors(prevState => ({
                ...prevState,
                [field]: true
            }));
        }
    }

    const updateValues = (e, field) => {
        const value = e.target.value;

        switch(field){
            case 'email':
                validateEmail(value);
                break;
            case 'name' || 'message':
                validateNotEmpty(value, field);
                break;
            default:
                break;
        }

        setValues(prevState => ({
            ...prevState,
            [field]: value
        }));
    }

    return (
        <div className={classes.container}>
            <Grid 
                container
                direction="column"
                alignItems="center"
                justify="center"
                spacing={8}
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
                        <InputLabel htmlFor="standard-adornment-amount"><Locale string={"contact.form.email"}/></InputLabel>
                        <Input 
                            id="email"
                            error={error.email}
                            label={<Locale string={"contact.form.email"}/>}
                            onChange={e => updateValues(e, 'email')}
                            aria-describedby="email" 
                            variant="filled"
                            className={classes.formContainer}
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="standard-adornment-amount"><Locale string={"contact.form.name"}/></InputLabel>
                        <Input 
                            id="name" 
                            error={error.name}
                            label={<Locale string={"contact.form.name"}/>}
                            onChange={e => updateValues(e, 'name')}
                            aria-describedby="name" 
                            variant="filled"
                            className={classes.formContainer}
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="standard-adornment-amount"><Locale string={"contact.form.message"}/></InputLabel>
                        <Input
                            id="outlined-multiline-flexible"
                            error={error.message}
                            label={<Locale string={"contact.form.message"}/>}
                            multiline
                            rows={12}
                            // value={}
                            onChange={e => updateValues(e, 'message')}
                            variant="filled"
                            className={classes.formContainer}
                        />
                    </FormControl>
                </Grid>
                <Grid 
                    // container
                    // alignItems="left"
                    // justify="left"
                    item 
                    xs={12}
                >
                    <Button 
                        variant="outlined"
                        className={classes.button}
                    >
                        <Locale string={"contact.btn.send"}/>
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(Contact);