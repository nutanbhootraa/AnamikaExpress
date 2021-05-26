import './Header.css';
import React from "react";
import SocialMedia from './SocialMedia';
import ShowMetaData from './ShowMetaData';

function Header() {
    return (
        <div>
            <SocialMedia/>
            <ShowMetaData/>
        </div>

    );
}

export default Header;
