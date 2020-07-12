import React, { useContext } from 'react';
import { Locale, getLocale, LocaleContext } from '../../contexts/localization/LocaleProvider';
import { withStyles } from '@material-ui/core/styles';

// import ProjectCard from './Components/ProjectCard';
import ProjectPaper from './Components/ProjectPaper';
import Grid from '@material-ui/core/Grid';
import projects from '../../variables/projects';

const styles = (theme) => ({
    container: {
        // position: 'relative',
        backgroundColor: 'rgb(30,30,30)',
        // height: '100vh',
        paddingTop: '80px',
        paddingBottom: '80px'
    }
});

const WorkExperience = ({classes}) => {

    const { language, } = useContext(LocaleContext);

    return (
        <div className={classes.container}>
            <div><Locale string={"experience.work.text"}/></div>
            <Grid 
                container 
                spacing={16}
                justify="center"
                alignItems="center"
            >
                {
                    projects.map((project) => (
                        <Grid 
                            container 
                            item 
                            xs={12} 
                            key={project.title}
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item xs={12} sm={10} md={8} xl={6} key={project.title}>
                                <ProjectPaper 
                                    details={{
                                        ...project,
                                        description: getLocale(language, project.description),
                                    }}
                                >
                                </ProjectPaper>
                            </Grid>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default withStyles(styles)(WorkExperience);