import React, {useState} from 'react';

function Counter() {
    return (
        window.location.href.includes('counterNutan') ?
            <div align=center>
                <a href='https://www.counter12.com'>
                    <img src='https://www.counter12.com/img-by27d33aD834842c-13.gif' border='0' alt='free web counter'/>
                </a>
                <script type='text/javascript' src='https://www.counter12.com/ad.js?id=by27d33aD834842c'></script>
            </div> : null
    );
}

export default Counter;
