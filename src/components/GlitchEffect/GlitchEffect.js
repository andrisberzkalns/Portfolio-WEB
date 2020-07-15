import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { useSpring, animated } from 'react-spring'
import { useHover } from 'react-use-gesture'

const styles = (theme) => ({
    container: {  
        position: 'relative',
        display: 'inline-block',
        // float: 'left'
    },
    text: {
        fontFamily: 'open sans',
        fontSize: '3em',
        fontStyle: 'bold',
        fontWeight: 700,
        textTransform: 'uppercase',
        cursor: 'pointer'
    },
    red: {
        color: '#f00',
        fill: '#f00',
        position: 'absolute',
        'mix-blend-mode': 'difference',
    },
    green: {
        color: '#0f0',
        fill: '#0f0',
        position: 'absolute',
        'mix-blend-mode': 'difference',
    },
    blue: {
        color: '#00f',
        fill: '#00f',
        position: 'absolute',
        'mix-blend-mode': 'difference',
    },
    black: {
        color: '#000',
        fill: '#000',
    },
    noselect: {
        userSelect: 'none',
    }
});

const INTENSITY = 16;
const MAX_ROTATION = 15;

const GlitchEffect = ({classes, children, fontSize}) => {
    // const [{ x, y, r }, set] = useState({x: 0, y: 0, r: 0})
    const [{ x = 0, y = 0, r }, set] = useSpring(() => ({ 
        x: 0, 
        y: 0, 
        r: 0,
        config: { mass: 1, tension: 5000, friction: 50} 
    }))

    const bind = useHover((e) => {
        set({ x: (Math.random() - 0.5) * INTENSITY, y: (Math.random() - 0.5) * INTENSITY, r: ((Math.random() - 0.5) * MAX_ROTATION)})
        setTimeout(() => {
            set({x: 0, y: 0, r: 0})
        }, 150)
    });

    if(children === ' ') {
        return (
            <div className={classes.container}>
                <div style={{width: '14px'}}></div>
            </div>
        )
    }

        return (
            <div className={classes.container} {...bind()}>
                <animated.span className={`${classes.text} ${classes.red} ${classes.noselect}`} style={{left: -x, top: -y, fontSize: fontSize, transform: r.interpolate(rx => `rotate(${-rx}deg)`)}}>
                    {children}
                </animated.span>
                <animated.span className={`${classes.text} ${classes.green} ${classes.noselect}`} style={{left: x, top: y, fontSize: fontSize, transform: r.interpolate(rx => `rotate(${rx}deg)`) }}>
                    {children}
                </animated.span>
                <animated.span className={`${classes.text} ${classes.blue} ${classes.noselect}`} style={{left: -x, top: -y, fontSize: fontSize, transform: r.interpolate(rx => `rotate(${-rx}deg)`)}}>
                    {children}
                </animated.span>
                <span className={`${classes.text} ${classes.black}`} style={{opacity: 1, fontSize: fontSize}}>
                    {children}
                </span>
            </div>
        )
}

export default withStyles(styles)(GlitchEffect);
