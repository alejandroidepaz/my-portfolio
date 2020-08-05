import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigator = () => {

    return(
    <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/projects">My Projects</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    </nav>
    )
};

export default Navigator;