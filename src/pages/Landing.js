import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import '../styles/index.css';

function Landing() {

  return (
    <div>
      <h1>Dayne</h1>
      <h2>Develop <NavLink to="/home" id="anchorHome">&lt;a&gt;</NavLink> solution.</h2>
    </div>
  );
}

export default Landing;