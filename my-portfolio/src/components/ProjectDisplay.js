import React from "react";
import "../styling/ProjectDisplay.css";
const ProjectDisplay = (props) => {

    const projects = {

        "keysafe": ["KeySafe", "STUFF ABOUT KEYSAFE", "https://www.youtube.com/embed/-PqbBv6uTA0"],
        "whatskraken": ["What's Kraken", "STUFF ABOUT WHAT'S KRAKEN", "https://www.youtube.com/embed/-PqbBv6uTA0"],
        "datatrack": ["DataTrack", "STUFF ABOUT DATATRACK", "https://www.youtube.com/embed/-PqbBv6uTA0"]
    }

    const {match : {params}} = props; // react-router-dom automatically passes us the url parameter

    const key = params.projectName;
    const proj_details = projects[key]
    const title = proj_details[0], 
        desc = proj_details[1],
        video_link = proj_details[2];

    return(

        <div>
            <h1>{title}</h1>
            <hr style={{width:"75%"}}></hr>
            <article>
                <p>{desc}</p>
                <div className="video-container">
                    <iframe width="420" height="315" title={title} src={video_link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </article>
        </div>
    )
    
}

export default ProjectDisplay;