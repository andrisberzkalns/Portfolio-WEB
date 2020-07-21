import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { LocaleContext } from '../../contexts/localization';
import { withStyles } from '@material-ui/core/styles';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';

const styles = (theme) => ({
    container: {
        height: 20,
        color: "red",
        userSelect: "none",
        "&:hover": {
            cursor: "pointer"
        }
    },
    icon: {
        height: 20,
        boxShadow: "0px 3px 5px rgba(0,0,0,0.4)"
    }
});
const icons = {
    en: "/png/en.png",
    lv: "/png/lv.png"
}

const switchOrder = {
    en: 'lv',
    lv: 'en'
}

const LocalizationButton = ({classes}) => {

    const history = useHistory();
    const { language, } = useContext(LocaleContext);
    const [{ scale }, setTransition] = useSpring(() => ({ 
        scale: 1,
        config: { mass: 2, tension: 900, friction: 30 }
    }));
    const bind = useDrag(({ down, movement: [mx, my] }) => {
        setTransition({ scale: down ? 0.9 : 1.15 })
    });

    const changeLanguage = (language) => {
        history.push(`/${language}/`);
    }

    return (
        <div 
            className={classes.container}
            onClick={() => changeLanguage(switchOrder[language])}
            onMouseEnter={() => setTransition({ scale: 1.15 })}
            onMouseLeave={() => setTransition({ scale: 1 })}
        >
            <animated.img 
                {...bind()}
                alt={`icon of ${language} flag`} 
                className={classes.icon} 
                src={icons[language]} 
                style={{transform: scale.interpolate(s => `scale(${s})`)}}
            />
        </div>

    )

}

export default withStyles(styles)(LocalizationButton);