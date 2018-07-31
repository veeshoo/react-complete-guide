import React from 'react';

const cockpit = (props) => {
    return 
        <div>
            <h1>Hi, I am a React App!</h1>
            <p className={props.className}>This is really working.</p>
            <button style={props.style}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    ;
};

export default cockpit;