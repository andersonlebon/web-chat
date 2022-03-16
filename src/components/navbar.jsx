import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdOutlineLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';


const Navbar = ({currentUser}) => {
    return ( 
    <header className="navbar-chat d-flex  justify-content-between align-items-center">
        <div className="navbar-container w-100 d-flex align-items-center justify-content-between">
            <div className="navbar-menu">
                <ul className="d-flex  justify-content-center align-items-center">
                    <li className="navbar-menu-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="navbar-menu-item">
                        <Link to="/newconversation">new conversation</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-logo d-flex flex-column align-items-center justify-content-around">
                <div className="icon text-primary"><FaUserCircle /></div> <div>{currentUser.name || ''}</div>
            </div>
            <button className="btn log-out btn-primary"><MdOutlineLogout/></button>
        </div>
    </header>
    );

}
 
export default Navbar;