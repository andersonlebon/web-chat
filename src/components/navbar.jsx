import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Navbar = ({currentUser}) => {
    return ( <header className="navbar">
        <div className="navbar-container">
            <div className="navbar-logo">
                <FaUserCircle /> <span>{currentUser.name}</span>
            </div>
            <div className="navbar-menu">
                <ul className="navbar-menu-list">
                    <li className="navbar-menu-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="navbar-menu-item">
                        <Link to="/home">Conversation</Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    );

}
 
export default Navbar;