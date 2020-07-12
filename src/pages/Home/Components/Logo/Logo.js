import React, { useState, useEffect, useRef, useCallback } from 'react';
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

const Logo = ({classes, width, height, pointerX, pointerY}) => {

    const [offset, setOffset] = useState({r: {x: 0, y: 0}, g: {x: 0, y: 0}, b: {x: 0, y: 0}});
    const [lastPosition, setLastPosition] = useState({x: 0, y: 0});
    const jitterInterval = useRef();

    const jitterLogo = useCallback((x, y) => {
        
        setOffset({
            r: {
                x: -x,
                y: -y
            },
            g: {
                x: x,
                y: y
            },
            b: {
                x: -x,
                y: -y
            }
        });
    }, []);

    const handleMouseMove = (e) => {

        if(pointerX && pointerY) {
            const width = e.target.offsetWidth;
            const height = e.target.offsetHeight;
            const x =  e.nativeEvent.offsetX;
            const y =  e.nativeEvent.offsetY;
            if(!isNaN(width) && !isNaN(height) && !isNaN(x) && !isNaN(y)) {
                const newX = Math.random() * 4 + ((width/2)-x)/(width / 10);
                const newY = Math.random() * 4 + ((height/2)-y)/(height / 10);

                jitterLogo(newX, newY);
                setLastPosition({x: newX, y: newY});
            }
        }
    }

    useEffect(() => {

        if(jitterInterval.current) {
            clearInterval(jitterInterval.current);
        }

        jitterInterval.current = setInterval(() => {
            let x = lastPosition.x + (Math.random() - 0.5) * 6;
            let y = lastPosition.y + (Math.random() - 0.5) * 6;

            if(Math.random() < 0.27) {
                x = lastPosition.x + (Math.random() - 0.5) * 60;
                y = lastPosition.y + (Math.random() - 0.5) * 60;
            }

            if(Math.random() > 0.27) {
                x = 0;
                y = 0;
            }

            jitterLogo(x, y);
        }, 60);

        return () => {
            clearInterval(jitterInterval.current);
        }
    }, [jitterLogo, lastPosition])

    return (
        <div style={{ width: width, height: height, zIndex: 20}} onMouseMove={handleMouseMove}>
            <div className={classes.container}>
                {
                [{id: 'logo-r', class: classes.red, offset: offset.r},
                {id: 'logo-g', class: classes.green, offset: offset.g},
                {id: 'logo-b', class: classes.blue, offset: offset.b}].map(each => (
                    <svg id={each.id} key={each.id} height="100%" width="100%" viewBox="0 0 7 7" style={{left: each.offset.x, top: each.offset.y}} className={`${classes.svgLogo} ${each.class}`}>
                        <path className={classes.svgPath} d="M 0 0 V 1 H 6 H 6 V 5 H 7 V 0 H 0 M 5 7 V 4 H 4 V 7 H 5 M 5 2 H 2 V 6 H 0 V 7 H 3 V 3 H 5 V 2"/>
                    </svg>
                ))
                }
            </div>
        </div>
    )
}

export default withStyles(styles)(Logo);