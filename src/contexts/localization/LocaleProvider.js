import React, { createContext, useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage.js';
import en from '../../variables/locales/en.json';
import lv from '../../variables/locales/lv.json';

const langs = {
    en,
    lv
}

const DEFAULT_LANGUAGE = "en";

export const LocaleContext = createContext(DEFAULT_LANGUAGE);

export const Locale = ({string}) => {

    return (
        <LocaleContext.Consumer>
            {(value) => langs[value.language][string] || langs[DEFAULT_LANGUAGE][string]}
        </LocaleContext.Consumer>
    )
}

export const getLocale = (lang, string) => {

    return langs[lang][string];
}

export const LocaleProvider = ({children}) => {

    const [localStorageLanguage, setLocalStorageLanguage] = useLocalStorage('language', DEFAULT_LANGUAGE);
    const [language, setLanguage] = useState(localStorageLanguage);

    const changeLanguage = (selectedLanguage) => {

        if(Object.keys(langs).includes(selectedLanguage)) {
            setLanguage(selectedLanguage);
            setLocalStorageLanguage(selectedLanguage);
        }
    }

    return (
        <LocaleContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LocaleContext.Provider>
    )
}