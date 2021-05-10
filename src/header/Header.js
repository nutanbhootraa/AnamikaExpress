import './Header.css';
import logo from './logo.png';
import React from "react";
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className="logo">
            <Link to="/App">
                <img src={logo} alt="logo" width="200px" height="150px" /> <br/>
            </Link>
        </div>
    );
}

export default Header;
