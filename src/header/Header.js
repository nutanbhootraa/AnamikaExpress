import './Header.css';
import React from "react";
import { SocialIcon } from 'react-social-icons';

function Header() {
    return (
        <div>
            <div className="social">
                <SocialIcon url="https://twitter.com/AnamikaExpress" style={{ height: 25, width: 25 }}/>
                <SocialIcon url="https://facebook.com/anamikaexpress" style={{ height: 25, width: 25 }}/>
                <SocialIcon url="https://www.instagram.com/anamikaexpress" style={{ height: 25, width: 25 }}/>
                <SocialIcon url="https://www.linkedin.com/in/nutan-bhootra-40843851" style={{ height: 25, width: 25 }}/>
            </div>
            <div className="logo">
                <p style={{color:'#ffffff', fontFamily:'Times New Roman'}}>
                    <h2>Anamika Express</h2>
                    You are what you do
                </p>
            </div>
        </div>

    );
}

export default Header;
