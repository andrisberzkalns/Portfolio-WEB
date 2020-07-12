import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    container: {
        padding: 20
    },
    thumbnail: {
        width: "100%"
    },
    button: {
        height: 40,
        color: '#000'
    },
});

const ProjectPaper = ({classes, details}) => {

    return (
        <Paper className={classes.container}>
            <Grid container spacing={16}>
                <Grid item className={classes.title}>
                    <Typography color="textSecondary" variant="h6">
                        {details.title}
                    </Typography>
                </Grid>
                <Grid container spacing={16}>
                    <Grid item xs={12} sm={6} md={5}>
                        <img src={details.thumbnailPath} className={classes.thumbnail} alt={`thumbnail of ${details.title} project}`}></img>
                    </Grid>
                    <Grid container item xs={12} sm={6} md={7}spacing={8}>
                        <Grid container item xs={12}>
                            <Typography variant="body2" color="textSecondary" component="p" dangerouslySetInnerHTML={{__html: details.description}} />
                        </Grid>
                        <Grid container item xs={12} my={32}>
                            {details.keywords && details.keywords.map((keyword, index) => 
                                <Chip
                                    key={index}
                                    label={keyword}
                                    variant="outlined"
                                />
                            )}
                        </Grid>
                        <Grid container item xs={12}>
                        {
                            details.buttonText &&
                            <>
                                <Button 
                                    variant="outlined" 
                                    href={details.buttonLink} 
                                    target="_blank"
                                    className={classes.button}
                                >
                                    {details.buttonText}
                                </Button>
                            </>
                        }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default withStyles(styles)(ProjectPaper);