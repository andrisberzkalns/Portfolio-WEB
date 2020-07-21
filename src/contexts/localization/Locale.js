import React from 'react';
import { LocaleContext, Localizations, config } from './';

export default ({string}) => {

    return (
        <LocaleContext.Consumer>
            {(value) => Localizations[value.language][string] || Localizations[config.DEFAULT_LANGUAGE][string]}
        </LocaleContext.Consumer>
    )
}

export const getLocale = (lang, string) => {
    return Localizations[lang][string];
}

export const getRawLocale = (string) => {
    let lang;
    try {
        lang = JSON.parse(window.localStorage.getItem('language'));
    } catch(e) {
        console.error(e);
    }
    return Localizations[lang][string]
}
