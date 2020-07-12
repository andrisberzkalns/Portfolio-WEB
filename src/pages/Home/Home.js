import React, { useState, useContext, useEffect } from 'react';
import { Locale, LocaleContext } from '../../contexts/localization/LocaleProvider';
import { Link, useLocation } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Logo from './Components/Logo';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';

const styles = (theme) => {

    return ({
        name: {
            fontFamily: 'open sans',
            fontSize: '3em',
            fontStyle: 'bold',
            fontWeight: 700,
            textTransform: 'uppercase',
        },
        title: {
            color: "#ddd",
            fontFamily: 'acumin-pro, sans-serif',
            fontSize: '1.2em',
            fontStyle: 'normal',
            fontWeight: 400,
            textTransform: 'uppercase',
            marginTop: '4px'
        },
        description: {
            color: "#ddd",
            fontFamily: 'acumin-pro, sans-serif',
            fontSize: '1em',
            fontStyle: 'normal',
            fontWeight: 400,
            marginTop: '6px'
        },
        background: {
            position: 'relative',
            backgroundColor: 'rgba(20,20,20,0.75)',
            // background: 'linear-gradient(-45deg, #111, #222222)',
            // opacity: '0.8',
            height: '100vh'
        },
        button: {
            border: '1px solid white',
            fontFamily: 'acumin-pro, sans-serif',
            fontWeight: 700,
            marginTop: '30px'
        },
        divider: {
            height: '2px',
            backgroundColor: '#777',
            width: '100%',
            marginTop: '18px',
            marginBottom: '18px',
        },
        logo: {
            position: 'absolute',

            [theme.breakpoints.down('sm')]: {
                width: '30%',
                height: '30%'
            },
            [theme.breakpoints.up('md')]: {
                width: '15%',
                height: '15%'
            },
            [theme.breakpoints.up('lg')]: {
                width: '12%',
                height: '12%'
            }
        },
        introContainer: {
            height: '100vh',
            [theme.breakpoints.down('sm')]: {
                height: '100%',
            },
            [theme.breakpoints.up('md')]: {
                paddingLeft: '80px',
                height: '100%',
            },
            [theme.breakpoints.up('lg')]: {
                paddingLeft: '80px',
                height: '100vh',
            },
        },
        container: {
            height: '100vh',
            [theme.breakpoints.down('sm')]: {
                height: '100%',
            },
            [theme.breakpoints.up('md')]: {
                height: '100%',
            },
            [theme.breakpoints.up('lg')]: {
                height: '100vh',
            },
        },
        paper: {
            backgroundColor: "black"
        },
})};

const Home = ({classes}) => {

    let location = useLocation();
    const { language, } = useContext(LocaleContext);
    
    return (
        <>
            <div style={{backgroundColor: '#000', position: 'absolute', width: '100vw', height: '100vh'}}>
                <video loop="loop" muted="muted" autoPlay>
                    <source src="/video/digital_numbers.mp4" type="video/mp4"></source>
                </video>
            </div>
            <div className={classes.background}>
                <Grid container>
                    <Grid 
                        item 
                        container
                        xs={12} 
                        md={8} 
                        lg={6} 
                        spacing={0}
                        direction="column"
                        justify="center"
                        className={classes.introContainer}
                    >
                        <Typography variant="h1" className={classes.name}><Locale string={"home.name"}/></Typography>
                        <Typography variant="subtitle1" className={classes.title}><Locale string={"home.title"}/></Typography>
                        <div className={classes.divider}></div>
                        <Typography variant="body1" className={classes.description}><Locale string={"home.description"}/></Typography>
                        <Grid item>
                            <Link to={"/" + language + '/contact'}>
                                <Button 
                                    variant="outlined"
                                    className={classes.button}
                                >
                                    <Locale string={"home.btn.contact"}/>
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid 
                        item
                        container
                        xs={12} 
                        md={8} 
                        lg={6} 
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center"
                        className={classes.container}
                    >
                        <Logo width="30%" height="30%" />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default withStyles(styles)(Home);