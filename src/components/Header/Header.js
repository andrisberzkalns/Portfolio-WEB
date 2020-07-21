import React, { useContext } from 'react';
import { HeaderContext } from '../../contexts/header';
import { Helmet } from "react-helmet";

const Header = ({ title = '', description = '' }) => {

    const { headerLanguage, headerTitle, headerDescription } = useContext(HeaderContext);

    return (
        <Helmet htmlAttributes={{ lang: headerLanguage }}>
            <title>{ headerTitle }</title>
            <meta name="description" content={ headerDescription} />
        </Helmet>
    )
}

export default Header;