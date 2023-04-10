import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useInView } from 'react-intersection-observer';

import '../styles/App.css';
import Palm from '../images/palm_trees.png';

function Header() {

    const [isCalled] = useState("true");

    const { ref, inView } = useInView({
        /* Optional options */
        rootMargin: '0px',
        threshold: 1,
    });


    return (
        <header ref={ref}>
            {inView ? (
                <div className={isCalled ? "called" : "dropped"}>
                    <NavLink to="/" id='home'>Home</NavLink>
                    <NavLink to="/blog" id='home'>Blog</NavLink>
                    <h1>Dayne</h1>
                    <img src={Palm} id="palm" alt="palm tree" />
                </div>
            ) : (
                <div className={!isCalled ? "called" : "dropped"}>
                    <NavLink to="/" id='home'>Home</NavLink>
                    <NavLink to="/blog" id='home'>Blog</NavLink>
                </div>
            )}
        </header>
    );
}

export default Header;