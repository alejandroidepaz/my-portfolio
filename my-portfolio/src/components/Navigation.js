import React from 'react';
import { NavLink } from 'react-router-dom';
import {Paper, AppBar, Button, ButtonGroup} from '@material-ui/core';
import "../styling/Nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigator = () => {

    return(

    <div>
        
        <div id="header">
            <div className="column1">
                <div className="icon_div"><a className="icon" href="https://www.linkedin.com/in/alejandrodepaz/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" color="white" /></a></div>
                <div className="icon_div"><a className="icon" href="mailto:adepaz@cs.uoregon.edu"><FontAwesomeIcon icon={['fas', 'envelope']} size="lg" color="white" /></a></div>
                <div className="icon_div"><a className="icon" href="tel:503-997-1658"><FontAwesomeIcon icon={['fas', 'phone']} size="lg" color="white" /></a></div>
            </div>
            <div className="column2"><img id="headshot" src={require("../assets/Professional_Pic.jpg")} width="25%" height="auto" alt="Alejandro De Paz Headshot"></img></div>
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