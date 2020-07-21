import React, { useContext } from 'react';
import { HeaderContext } from "../header";
import { LocaleContext, Localizations, config } from './';
import useLocalStorage from '../../hooks/useLocalStorage.js';

export default ({children}) => {

    const [ localStorageLanguage, setLocalStorageLanguage ] = useLocalStorage('language', config.DEFAULT_LANGUAGE);
    const { changeHeaderLanguage } = useContext(HeaderContext);

    const changeLanguage = (selectedLanguage) => {

        if(Object.keys(Localizations).includes(selectedLanguage)) {
            setLocalStorageLanguage(selectedLanguage);
            changeHeaderLanguage(selectedLanguage);
        }
    }

    return (
        <LocaleContext.Provider value={{ language: localStorageLanguage, changeLanguage: changeLanguage }}>
            {children}
        </LocaleContext.Provider>
    )
}