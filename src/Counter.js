import React, {useState} from 'react';

function Counter() {
    return (
        window.location.href.includes('counterNutan') ?
        <div>
            <a href='https://www.counter12.com'>
                <img src='https://www.counter12.com/img-65dYD8a4Z2881wY7-1.gif' border='0' alt='counter12'/>
            </a><script type='text/javascript' src='https://www.counter12.com/ad.js?id=65dYD8a4Z2881wY7'></script>
        </div> : null
    );
}

export default Counter;
