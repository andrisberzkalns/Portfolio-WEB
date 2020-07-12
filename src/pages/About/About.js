import React from 'react';
import { Locale } from '../../contexts/localization/LocaleProvider';

const About = () => {

    return (
        <div style={{backgroundColor: 'white', height: '100vh'}}>About
            <div>Here: <Locale string={"home.intro"}/></div>
        </div>
    )
}

export default About;