import React from 'react';
import { NavLink } from 'react-router-dom';
import {Paper, AppBar, Button, ButtonGroup} from '@material-ui/core'
import "../styling/Nav.css";

const Navigator = () => {

    return(

    <div>
        
        <div id="header">
            <img id="headshot" src={require("../assets/Professional_Pic.jpg")} width="150px" height="auto" alt="Alejandro De Paz Headshot"></img>
        </div>

        <Paper className="nav">
            <AppBar position="static" color="transparent" id="nav_bar">
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    <Button><NavLink to="/" className="nav_link">Home</NavLink></Button>
                    <Button><NavLink to="/projects" className="nav_link">Projects</NavLink></Button>
                    <Button><NavLink to="/blog" className="nav_link">Blog</NavLink></Button>
                    <Button><NavLink to="/contact" className="nav_link">Contact</NavLink></Button>
                </ButtonGroup>
            </AppBar>
        </Paper>
    </div>
    )
};

export default Navigator;