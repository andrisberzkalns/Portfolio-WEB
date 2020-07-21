import React, { useContext, Suspense } from 'react';
import { Locale, LocaleContext, getLocale } from '../../contexts/localization';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import GlitchEffect from '../../components/GlitchEffect';
import Logo from './Components/Logo';
import Typography from '@material-ui/core/Typography';

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
            marginTop: '-8px'
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
            // backgroundColor: '#222',
            backgroundColor: 'rgba(20,20,20,0.75)',
            overflow: 'scroll',
            minHeight: '100vh',
            width: '100vw'
        },
        button: {
            border: '1px solid white',
            fontFamily: 'acumin-pro, sans-serif',
            fontWeight: 700,
            marginTop: '30px',
            marginBottom: '80px',
            '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.4)',
            }
        },
        divider: {
            height: '2px',
            backgroundColor: '#777',
            width: '100%',
            marginTop: '18px',
            marginBottom: '18px',
        },
        introContainer: {
            height: '100vh',

            [theme.breakpoints.down('sm')]: {
                height: '60vh',
                paddingLeft: '20px',
                paddingRight: '20px',
                textAlign: 'center',
            },
            [theme.breakpoints.only('md')]: {
                paddingLeft: '30px',
                paddingRight: '3px',
                height: '100vh',
            },
            [theme.breakpoints.up('lg')]: {
                paddingLeft: '60px',
                paddingRight: '60px',
                height: '100vh',
            },
        },

        logo: {
            [theme.breakpoints.down('sm')]: {
                width: '60%',
                height: '60%',
            },
            [theme.breakpoints.up('md')]: {
                width: '40%',
                height: '40%',
            },
            [theme.breakpoints.up('lg')]: {
                width: '30%',
                height: '30%',
            },
        },
        video: {
            minWidth: '100%',
            minHeight: '100vh',
            animation: '12s fadeIn'
        },
        nameContainer: {
            whiteSpace: 'nowrap'
        },
        nameContainerContainer: {
            display: 'inline-block'
        },
        hideMd: {
            [theme.breakpoints.up('md')]: {
                display: 'none'
            },
        }
})};

const Home = ({classes}) => {

    const { language, } = useContext(LocaleContext);

    return (
        <>
            <div style={{backgroundColor: '#000', position: 'absolute', width: '100vw', minHeight: '100vh'}}>
                <Suspense fallback={<span></span>}>
                    <video className={classes.video} loop="loop" muted="muted" autoPlay>
                        <source src="/video/digital_numbers.mp4" type="video/mp4"></source>
                    </video>
                </Suspense>
            </div>
            <div className={classes.background}>
                <Grid 
                    direction="row-reverse"
                    container
                >
                    <Grid 
                        item
                        container
                        xs={12} 
                        md={6} 
                        alignItems="center"
                        justify="center"
                    >
                        <div className={classes.logo}>
                            <Logo />
                        </div>
                    </Grid>

                    <Grid 
                        item
                        container
                        xs={12} 
                        md={6} 
                        className={classes.introContainer}
                        alignItems="center"
                        justify="center"
                    >
                        <Grid 
                            item 
                            xs={12} 
                            style={{width: '100%'}}
                        >
                            <Grid 
                                item
                                xs={12} 
                                style={{width: '100%'}}
                                className={classes.nameContainerContainer}
                            >
                                <div className={classes.nameContainer}>
                                {
                                    getLocale(language, 'home.name').split('').map((letter, index) => (
                                        <GlitchEffect key={letter + index} fontSize="3em">{letter}</GlitchEffect>
                                    ))
                                }
                                </div>
                            </Grid>

                            <Grid 
                                xs={12} 
                                item
                            >

                                {/* <Typography variant="h1" className={classes.name}><Locale string={"home.name"}/></Typography> */}
                                <Typography variant="subtitle1" className={classes.title}><Locale string={"home.title"}/></Typography>
                                <div className={classes.divider}></div>
                                <Typography variant="body1" className={classes.description}><Locale string={"home.description"}/></Typography>
                                <div className={`${classes.divider} ${classes.hideMd}`}></div>
                            </Grid>

                            <Grid 
                                item
                                xs={12}
                            >
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
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default withStyles(styles)(Home);