import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const styles = (theme) => ({
    background: {
        position: 'relative',
        backgroundColor: 'rgb(30,30,30)',
        height: '100vh'
    },
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    textContent: {
        minWidth: "40vw"
    }
});

const ProjectCard = ({classes, thumbnailPath, title, subheader, description}) => {

    return (
        <Card className={classes.root}>
            <CardHeader
                title={title}
                subheader={subheader}
            />
            <CardMedia
                className={classes.media}
                image={thumbnailPath}
                title={title}
            />
            <CardContent className={classes.textContent}>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default withStyles(styles)(ProjectCard);