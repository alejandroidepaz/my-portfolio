import React from 'react';
import { NavLink } from 'react-router-dom';
import {Paper, AppBar, Button, ButtonGroup} from '@material-ui/core'
import "../styling/Nav.css";

const Navigator = () => {

    return(

    <Paper className="nav">
        <AppBar position="static" color="white" id="nav_bar">
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                <Button><NavLink to="/" className="nav_link">Home</NavLink></Button>
                <Button><NavLink to="/projects" className="nav_link">Projects</NavLink></Button>
                <Button><NavLink to="/blog" className="nav_link">Blog</NavLink></Button>
                <Button><NavLink to="/contact" className="nav_link">Contact</NavLink></Button>
            </ButtonGroup>
        </AppBar>
    </Paper>
    )
};

export default Navigator;