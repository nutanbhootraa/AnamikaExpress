import './Header.css';
import logo from './logo.png';
import React from "react";

function Header() {
    return (
        <div className="logo">
            <img src={logo} alt="logo" width="200px" height="150px" /> <br/>
        </div>
    );
}

export default Header;
