import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from "@material-ui/core";
import "../styling/Projects.css";

const Projects = () => {

    const projects = {

        "KeySafe Password Manager": "Utilized industry-standard security practices to build a protected web application which maintains the integrity, accessibility, and confidentiality of user passwords."
    }

    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 140,
        },
    });
    const classes = useStyles();

    var proj_components = []
    
    for (const [key, value] of Object.entries(projects)){

        proj_components.push(
            <Card className={classes.root} key={key} style={{margin:"15px"}}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title={key}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {key}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {value}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        )
    }

    return (
    <div>
        <h1>My Projects</h1>
        <hr style={{width:"75%"}}></hr>
        <div id="project_cards">
            {proj_components}
        </div>
    </div>

    )
}

export default Projects;