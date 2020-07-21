import React, { useState } from 'react';
import { HeaderContext } from './';

export default ({children}) => {

    const [headerLanguage, setLanguage] = useState('');
    const [headerTitle, setTitle] = useState('');
    const [headerDescription, setDescription] = useState('');

    const changeHeaderLanguage = (lang) => {
        setLanguage(lang);
    }

    const changeHeaderTitle = (title) => {
        if(typeof title === 'string') {
            setTitle(title);
        }
    }

    const changeHeaderDescription = (description) => {
        if(typeof description === 'string') {
            setDescription(description);
        }
    }

    return (
        <HeaderContext.Provider value={{ headerLanguage, headerTitle, headerDescription, changeHeaderLanguage, changeHeaderTitle, changeHeaderDescription }}>
            {children}
        </HeaderContext.Provider>
    )
}