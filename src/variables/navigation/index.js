import React from 'react';
import { Locale } from '../../contexts/localization/LocaleProvider';

// import Business from '@material-ui/icons/Business';
import Email from '@material-ui/icons/Email';
import Home from '@material-ui/icons/Home';
import School from '@material-ui/icons/School';
import Work from '@material-ui/icons/Work';

const links = [
    {
      label: <Locale string={"navigation.home"}/>,
      path: '/',
      icon: Home
    },
    // {
    //   label: <Locale string={"navigation.work"}/>,
    //   path: '/work-experience',
    //   icon: Business
    // },
    {
      label: <Locale string={"navigation.education"}/>,
      path: '/education',
      icon: School
    },
    {
      label: <Locale string={"navigation.projects"}/>,
      path: '/projects',
      icon: Work
    },
    {
      label: <Locale string={"navigation.contact"}/>,
      path: '/contact',
      icon: Email
    }
]

export default links;