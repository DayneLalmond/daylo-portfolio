import React, { useState } from 'react';
import '../styles/App.css';

function Menu() {

    const [btnState, setBtnState] = useState("false");

    // function chaining terrinary operator
    function handleClick() {
        setBtnState(btnState => !btnState);

    }

    let toggleBtn = btnState ? ' active': '';

    return (
        <div className={`btn${toggleBtn}`}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <span id="menu" className="material-symbols-outlined" onClick={handleClick}>menu</span>
        </div>
    )
}

export default Menu;