import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from "@material-ui/core";
import "../styling/Projects.css";

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    }
});

const Projects = () => {

    const img_paths = [require("../assets/keysafe_logo.png"), require("../assets/whatskraken_logo.png"), require("../assets/datatrack_logo.png")]

    const projects = {

        "KeySafe Password Manager": ["Utilized industry-standard security practices to build a protected web application which maintains the integrity, accessibility, and confidentiality of user passwords.", img_paths[0]],
        "Networking WebApp": ["Full-stack web application featuring the ability to registere for an account, build a comprehensive professional profile, with a bio, resume, coverletter, and more.", img_paths[1]],
        "DataTrack App": ["React Native application featuring the ability to track 2-dimensional data over time. Supports Google OAuth for account management, line chart, bar graph, and pie chart plotting.", img_paths[2]]

    }

    const classes = useStyles();

    var proj_components = []
    
    for (const [key, value] of Object.entries(projects)){

        proj_components.push(
            <Card className={classes.root} key={key} style={{margin:"0 auto", marginTop:"15px"}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        className={classes.media}
                        image={value[1]}
                        title={key}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {key}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {value[0]}
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