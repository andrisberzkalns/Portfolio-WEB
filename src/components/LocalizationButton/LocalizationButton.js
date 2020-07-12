import React, { useContext } from 'react';
import { LocaleContext } from '../../contexts/localization/LocaleProvider';
import { useLocation, useHistory } from 'react-router-dom';
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

    const [{ scale }, setTransition] = useSpring(() => ({ 
        scale: 1,
        config: { mass: 2, tension: 900, friction: 30 }
    }));
    const bind = useDrag(({ down, movement: [mx, my] }) => {
        setTransition({ scale: down ? 0.9 : 1.15 })
    });
    const { language, changeLanguage } = useContext(LocaleContext);
    const location = useLocation();
    let history = useHistory();

    const setLanguage = (selectedLanguage) => {
        
        const paths = location.pathname.slice(1,location.pathname.length).split('/').filter((el) => el !== "");
        let newPath = '/' + selectedLanguage + '/';

        if(paths.length > 1){
            newPath = newPath + paths.slice(1).join('/');
        }
        history.push(newPath);

        changeLanguage(selectedLanguage)
    }

    return (
        <div 
            onMouseEnter={() => setTransition({ scale: 1.15 })}
            onMouseLeave={() => setTransition({ scale: 1 })}
            className={classes.container} onClick={() => setLanguage(switchOrder[language])}
        >
            <animated.img 
                {...bind()}
                className={classes.icon} 
                src={icons[language]} 
                alt={`icon of ${language} flag`} 
                style={{transform: scale.interpolate(s => `scale(${s})`)}}
            />
        </div>
    )

}

export default withStyles(styles)(LocalizationButton);