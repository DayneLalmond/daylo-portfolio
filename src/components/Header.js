import React from 'react';
import { NavLink } from "react-router-dom";

import '../styles/App.css';
import Palm from '../images/palm_trees.png';

function Header() {

    return (
        <header>
            <NavLink to="/" id='home'>Home</NavLink>
            <NavLink to="/projects" id='projects'>Projects</NavLink>
            <NavLink to="/contact" id='contact'>Contact</NavLink>
            <h1>Dayne Lalmond</h1>
            <img src={Palm} id="palm" alt="palm tree" />

        </header>
    );
}

export default Header;