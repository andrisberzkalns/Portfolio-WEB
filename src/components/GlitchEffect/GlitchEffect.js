import React from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    container: {
        position: 'relative',
        width: '100%',
        height: '100%'
    },
    svgLogo: {  
        position: 'absolute',
        // transform: 'translate(-50%, -50%)',
        'mix-blend-mode': 'difference',
        // [theme.breakpoints.down('sm')]: {
        //     width: '30%',
        //     height: '30%'
        // },
        // [theme.breakpoints.up('md')]: {
        //     width: '15%',
        //     height: '15%'
        // },
        // [theme.breakpoints.up('lg')]: {
        //     width: '12%',
        //     height: '12%'
        // }
    },
    red: {
        fill: '#f00'
    },
    green: {
        fill: '#0f0'
    },
    blue: {
        fill: '#00f'
    }
});

const GlitchEffect = ({children}) => {
    return (
        <>
            <span>
                {children}
            </span>
            <span>
                {children}
            </span>
            <span>
                {children}
            </span>
        </>
    )
}

export default withStyles(styles)(GlitchEffect);
