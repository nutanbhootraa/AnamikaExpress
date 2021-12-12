import React from "react";
import { SocialIcon } from 'react-social-icons';

function SocialMedia() {
    return (
        <div className="social">
            <SocialIcon url="https://twitter.com/AnamikaExpress" style={{ height: 25, width: 25 }}/>
            <SocialIcon url="https://www.instagram.com/anamikaexpress" style={{ height: 25, width: 25 }}/>
            <SocialIcon url="https://www.linkedin.com/in/nutan-bhootra-40843851" style={{ height: 25, width: 25 }}/>
        </div>
    );
}

export default SocialMedia;
