import React from 'react';
import '../styles/Nav.css';
import Palm from '../images/palm_trees.png';

function Home() {
  return (
    <div>
      <div>
        <h1 id="home-text">
          Aloha, I'm Dayne
        </h1>
        <img src={Palm} id="palm" alt="palm tree" width="100px"/>
      </div>
    </div>
  );
}

export default Home;