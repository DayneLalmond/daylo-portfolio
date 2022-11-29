import React from 'react';
import '../styles/Nav.css';
import logo from '../styles/palm_trees.png';

function Home() {
  return (
    <div>
      <div>
        <img src={logo} alt="Logo" width="120px" />
        <h1 className="text-4xl font-bold">
          ALOHA, I'M DAYNE
        </h1>
      </div>
      <pre>
        <code>
          <i class="material-icons">work_history</i>My pre-formatted "quoted" code here.
        </code>
      </pre>
    </div>
  );
}

export default Home;