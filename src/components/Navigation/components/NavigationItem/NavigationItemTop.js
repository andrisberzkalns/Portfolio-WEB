import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { useSpring, animated } from 'react-spring'

const styles = (theme) => {

    return {
        menuButton: {
            position: 'relative'
        },
        icon: {
            padding: '8px',
            marginLeft: '10px',
            fontSize: '2em',
            zIndex: 5
        },
        label: {
            color: '#fff',
            backgroundColor: '#111',
            boxShadow: '0px 0px 15px black',
            fontFamily: 'acumin-pro, sans-serif',
            fontSize: '1.2em',
            fontStyle: 'normal',
            fontWeight: 400,
            opacity: 0,
            padding: '4px',
            paddingRight: '10px',
            paddingLeft: '10px',
            position: 'absolute',
            textAlign: 'right',
            top: 11,
            whiteSpace: 'nowrap',
            zIndex: -1
        },
        textContainer: {
            whiteSpace: 'wrap',
            width: 1
        }
    }
};

const NavigationItemTop = ({classes, label, icon, selected}) => {

    const [{ top, opacity, color }, setTransition] = useSpring(() => ({ 
        top: -100, 
        opacity: 0, 
        color: '#777',
        config: { mass: 4, tension: 2200, friction: 200 }
    }));
    const MenuIcon = icon;

    return (
        <div 
            onMouseEnter={() => setTransition({ top: 50, opacity: 1, color: "#fff" })}
            onMouseLeave={() => setTransition({ top: -100, opacity: 0, color: "#777" })}
            className={classes.menuButton}
            aria-label={label}
        >
            <animated.span style={{color: selected ? '#fff' : color}}>
                <MenuIcon className={classes.icon}/>
            </animated.span> 
            <animated.div 
                style={{ top: top, opacity: opacity }}
                className={classes.label}
            >
                {label}
            </animated.div>
        </div>
    )
}

export default withStyles(styles)(NavigationItemTop);