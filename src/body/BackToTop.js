import './Body.css';
import React, {useState} from 'react';
import Button from "@material-ui/core/Button";

function BackToTop() {

    return (
            <a href={'/#top'} style={{textDecoration:'none'}}>
                <Button color="primary" variant="contained"> Back to Top</Button>
            </a>
    );
}

export default BackToTop;
