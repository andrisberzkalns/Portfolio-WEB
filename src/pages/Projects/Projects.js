import React, { useContext } from 'react';
import { Locale, getLocale, LocaleContext } from '../../contexts/localization';
import { withStyles } from '@material-ui/core/styles';

import ProjectCard from './Components/ProjectCard';
import Grid from '@material-ui/core/Grid';
import projects from '../../variables/projects';

const styles = (theme) => ({
    container: {
        // position: 'relative',
        backgroundColor: 'rgb(30,30,30)',

        [theme.breakpoints.down('sm')]: {
            minHeight: '100vh',
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: '60px',
            paddingBottom: '60px',
            minHeight: 'calc(100vh - 120px)'
        }
    }
});

const Projects = ({classes}) => {

    const { language, } = useContext(LocaleContext);

    return (
        <div className={classes.container}>
            <div><Locale string={"experience.work.text"}/></div>
            <Grid 
                container 
                spacing={0}
                justify="center"
                alignItems="center"
            >
                {
                    projects.map((project) => (
                        <Grid 
                            container 
                            item 
                            spacing={0}
                            xs={12}
                            sm={12}
                            md={6}
                            lg={4}
                            xl={3}

                            key={project.title}
                            justify="center"
                            alignItems="center"
                        >
                            <ProjectCard
                                details={{
                                    ...project,
                                    description: getLocale(language, project.description),
                                }}
                            >
                            </ProjectCard>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default withStyles(styles)(Projects);