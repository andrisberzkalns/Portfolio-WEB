
import Home           from '../../pages/Home';
import Contact        from '../../pages/Contact';
import Projects       from '../../pages/Projects';
import WorkExperience from '../../pages/WorkExperience';
import Education      from '../../pages/Education';

// import Page from '../../layouts/Page';
import Fullscreen from '../../layouts/Fullscreen';

export default [
  { 
    path: '/', 
    name: 'Home', 
    Component: Home, 
    Layout: Fullscreen 
  },
  { 
    path: '/projects', 
    name: 'Projects', 
    Component: Projects,
    Layout: Fullscreen 
  },
  { 
    path: '/work-experience', 
    name: 'Work experience', 
    Component: WorkExperience,
    Layout: Fullscreen 
  },
  { 
    path: '/education', 
    name: 'Education', 
    Component: Education,
    Layout: Fullscreen 
  },
  { 
    path: '/contact', 
    name: 'Contact', 
    Component: Contact,
    Layout: Fullscreen 
  },
]