import React, { useContext, useEffect } from 'react';
import { Switch, useLocation, Redirect } from "react-router-dom";
import { LocaleContext } from '../../contexts/localization';
import routes from '../../variables/locales/routes.json';

const LocalizedSwitch = ({children}) => {

    const { language, changeLanguage } = useContext(LocaleContext);
    const location = useLocation();


    useEffect(() => {
        
        const splitRoute = (route) => {
            return route.split('/').filter(each => each !== "");
        }
        const currentLanguage = splitRoute(location.pathname)[0] || language || 'en';
        
        changeLanguage(currentLanguage);
    }, [location.pathname, changeLanguage, language]);

    const localizeRoute = (path) => {

        switch (typeof path) {
            case 'undefined':
                return undefined;
            case 'object':
                return path.map(key => `/${language}${routes[language][key]}`)
            default:
                const isFallbackRoute = path === '*'    ;
                return isFallbackRoute
                    ? path
                    : `/${language}${routes[language][path]}`
        }
    }

    
    if(location.pathname === '/') {
        return (<Redirect to={`${language}/`} />)
    }

    return (
        <Switch>
            {children.map(child => {
                return (

                    React.isValidElement(child)
                    ?   React.cloneElement(child, { 
                            ...child.props,
                            path: localizeRoute(child.props.path)
                        })
                    :   child
                )
            })}
        </Switch>
    )
}

export default LocalizedSwitch;