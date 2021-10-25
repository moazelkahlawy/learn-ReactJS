import React from 'react';
import './myStyle.css';

function Stylesheet(props) {
    let className = props.gold ? 'gold' : ''
    return (
        <div>
            <h1 className={className}>moaz</h1>
        </div>
    )
}

export default Stylesheet
