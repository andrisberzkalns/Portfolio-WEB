import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useSpring, animated } from 'react-spring'
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  button: {
    position: 'absolute',
    color: '#000',
    bottom: 40,
    
    [theme.breakpoints.between('sm', 'sm')]: {
      fontSize: '0.8em',
      bottom: 15,
    }
  },
  container: {
    width: '100%',
    position: 'relative',
    display: 'table',
  },
  image: {
    width: '100%',
    display: 'table-row',
    userSelect: 'none',
    top: 0
  },
  titleText: {
    color: '#000',
    fontFamily: 'open sans',
    fontSize: '1.4em',
    fontStyle: 'bold',
    fontWeight: 700,
    textTransform: 'uppercase',
    [theme.breakpoints.between('sm', 'sm')]: {
      fontSize: '1.2em',
    }
  },
  bodyText: {
    color: '#000',
    fontFamily: 'acumin-pro, sans-serif',
    fontSize: '1em',
    fontStyle: 'normal',
    fontWeight: 400,
    marginTop: '20px',
    
    [theme.breakpoints.between('sm', 'sm')]: {
      marginTop: '10px',
      fontSize: '0.8em'
    }
  },
  front: {
    top: 0,
    left: 0,
    display: 'table-row',
    width: '100%',
    willChange: 'transform, opacity',
  },
  back: {
    top: 0,
    left: 0,
    position: 'absolute',
    display: 'table-row',
    width: '100%',
    height: '100%',
    willChange: 'transform, opacity',
    backgroundColor: '#fff'
  },
  info: {
    outline: 'dotted 1px black',
    padding: '40px',
    height: 'calc(100% - 80px)',
    [theme.breakpoints.between('sm', 'sm')]: {
      padding: '15px',
      height: 'calc(100% - 30px)',
    }
  },
  chip: {
    [theme.breakpoints.between('sm', 'sm')]: {
      fontSize: '0.6em'
    }
  },
  chips: {
    marginTop: '20px',
    [theme.breakpoints.between('sm', 'sm')]: {
      marginTop: '5px'
    }
  }
});

const STATUS = {
  STILL: "still",
  GOING_UP: "up",
  GOING_DOWN: "down"
};

const trans = status =>
  status === STATUS.STILL ? 0 : status === STATUS.GOING_UP ? 1000 : 100;

const ProjectCard = ({classes, details}) => {

  // const [flipped, set] = useState(false);
  const [{transform, opacity, zIndex}, setTransition] = useSpring(() => ({
    opacity: 0,
    transform: `perspective(600px) rotateX(${0}deg)`,
    zIndex: 4,
    config: { mass: 8, tension: 1300, friction: 160 },
    immediate: key => key === "zIndex"
  }));

  return (
    <div 
      className={classes.container}
      // onClick={() => set(state => !state)}
      
      onMouseEnter={() => setTransition({ transform: `perspective(600px) rotateX(180deg)`, opacity: 1, zIndex: 100 })}
      onMouseLeave={() => setTransition({ transform:  `perspective(600px) rotateX(0deg)`, opacity: 0, zIndex: 100 })}
    >
      <animated.div 
        className={classes.front}
        style={{ 
          opacity: opacity.interpolate(o => 1 - o),
          zIndex: zIndex,
          transform, 
        }}
      >
        <img 
            src={details.thumbnailPath} 
            alt={`"${details.title}" thumbnail`} 
            className={classes.image}
        />
      </animated.div>
      <animated.div 
        className={classes.back}
        style={{ 
          opacity, 
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
          zIndex: zIndex
        }}
      >
        <div className={classes.info}>
          <Typography variant="h2" className={classes.titleText}>
            {details.title}
          </Typography>
          <Typography variant="body1" className={classes.bodyText} dangerouslySetInnerHTML={{__html: details.description}}>
          </Typography>

          <div className={classes.chips}>
            {details.keywords && details.keywords.map((keyword, index) => 
              <Chip
                  key={index}
                  label={keyword}
                  variant="outlined"
                  className={classes.chip}
              />
            )}
          </div>
          
          {
            details.buttonText &&
            <>
              <Button 
                variant="outlined" 
                target="_blank"
                href={details.buttonLink} 
                className={classes.button}
              >
                {details.buttonText}
              </Button>
            </>
          }
        </div>
      </animated.div>
    </div> 
  )
}

export default withStyles(styles)(ProjectCard);
