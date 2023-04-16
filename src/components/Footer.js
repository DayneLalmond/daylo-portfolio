import React from 'react';

import '../styles/App.css';
import Palm from '../images/palm_trees.png'

function Footer() {
    return (
        <footer>
            <p className="end-note">Dayne Lalmond</p>
            <img src={Palm} id="palm" alt="palm tree"/>
        </footer>
    );
}

export default Footer;