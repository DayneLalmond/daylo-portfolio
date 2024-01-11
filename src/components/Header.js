import React from 'react';
import * as ReactDOM from 'react-dom';
import { NavLink } from "react-router-dom";

import '../styles/App.css';
import Palm from '../images/palm_trees.png'

function Header() {
    // var ReactDOM = require('react-dom');

    // function UserGreeting(props) {
    //   return <h1>Welcome back!</h1>;
    // }
    
    // function GuestGreeting(props) {
    //   return <h1>Please sign up.</h1>;
    // }
    
    // function Greeting(props) {
    //   const isLoggedIn = props.isLoggedIn;
    //   if (isLoggedIn) {
    //     return <UserGreeting />;
    //   }
    //   return <GuestGreeting />;
    // }
    
    // const root = ReactDOM.createRoot(document.getElementById('root')); 
    // Try changing to isLoggedIn={true}:
    // root.render(<Greeting isLoggedIn={false} />);
  
    return (
        <header>
            {/* Would like to create a react props to change the header depending on page */}
            

        </header>
    );
}

export default Header;