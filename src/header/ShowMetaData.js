import React from "react";

function ShowMetaData() {
    const siteName = "Anamika Express";
    const tagline= "You are what you do";
    return (
        <div className="logo">
            <p style={{color:'#ffffff', fontFamily:'Times New Roman', lineHeight:'0.4'}}>
                <h2>{siteName}</h2>
                <h5>{tagline}</h5>
            </p>
        </div>
    );
}

export default ShowMetaData;
