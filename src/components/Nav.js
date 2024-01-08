import React, { useState } from 'react';
import { NavLink } from "react-router-dom";


import '../styles/App.css';

function Nav() {

    const [menuState, setMenuState] = useState("false");
    const [nav, setNav] = useState("false");
    const [body, setBody] = useState("false");

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
                        <NavLink to="/resume" id='blog' onClick={handleClick}>Resume</NavLink>
                        <NavLink to="/connect" id='blog' onClick={handleClick}>Connect</NavLink>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Nav;