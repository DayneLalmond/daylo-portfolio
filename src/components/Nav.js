import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

import github from '../images/github.png';
import '../styles/App.css';

function Nav() {

    const [menuState, setMenuState] = useState("false");
    const [nav, setNav] = useState("false");

    // function chaining which handles the changed state
    function handleClick() {
        setMenuState(menuState => !menuState);
        setNav(nav => !nav);
    }

    let toggleMenu = !menuState ? ' active' : '';

    return (
      /* Toggle nav from clicking the menu item */
        <nav className={`${toggleMenu}`}>
            <div>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                <span id="menu" className="material-symbols-outlined" onClick={handleClick}>menu</span>
                {!nav && (
                    <div>
                        <NavLink to="/home" id='home' onClick={handleClick}>Home</NavLink>
                        <NavLink to="/projects" id='work' onClick={handleClick}>Projects</NavLink>
                        <NavLink to="/resume" id='resume' onClick={handleClick}>Resume</NavLink>
                        <NavLink to="/connect" id='connect' onClick={handleClick}>Connect</NavLink>
                        <a rel="noreferrer" href="https://github.com/DayneLalmond" target="_blank"><img src={github} id="github" alt="GitHub"/></a>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Nav;