import React from 'react';
import { Locale } from '../../contexts/localization';

import Home           from '../../pages/Home';
import Contact        from '../../pages/Contact';
import Projects       from '../../pages/Projects';
import WorkExperience from '../../pages/WorkExperience';
import Education      from '../../pages/Education';
import UndefinedUrl   from '../../pages/UndefinedUrl';

// import Page from '../../layouts/Page';
import Fullscreen from '../../layouts/Fullscreen';

export default [
  { 
    path: "/",
    name: <Locale string={"path.home.name"}/>,
    Component: Home, 
    Layout: Fullscreen,
    exact: true,
    meta: {
        title: "meta.portfolio.title",
        description: "meta.portfolio.description"
    }
  },
  { 
    path: "/projects",
    name: <Locale string={"path.projects.name"}/>, 
    Component: Projects,
    Layout: Fullscreen,
    exact: true,
    meta: {
        title: 'meta.projects.title',
        description: 'meta.projects.description'
    }
  },
  { 
    path: "/work-experience",
    name: <Locale string={"path.workexperience.name"}/>, 
    Component: WorkExperience,
    Layout: Fullscreen,
    exact: true,
    meta: {
      title: 'meta.workexperience.title',
      description: 'meta.workexperience.description'
    }
  },
  { 
    path: "/education",
    name: <Locale string={"path.education.name"}/>, 
    Component: Education,
    Layout: Fullscreen,
    exact: true,
    meta: {
      title: 'meta.education.title',
      description: 'meta.education.description'
    }
  },
  { 
    path: "/contact",
    name: <Locale string={"path.contact.name"}/>, 
    Component: Contact,
    Layout: Fullscreen,
    exact: true,
    meta: {
      title: 'meta.contact.title',
      description: 'meta.contact.description'
    }
  },
  { 
    path: "*",
    name: <Locale string={"path.404.name"}/>, 
    Component: UndefinedUrl,
    Layout: Fullscreen,
    exact: true,
    meta: {
      title: 'meta.error.title',
      description: 'meta.error.description'
    }
  },
]