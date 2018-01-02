import React from 'react';
import ReactDOM from 'react-dom';
import * as icons from '../lib';

ReactDOM.render(
    <div className="example-container">
        {Object.entries(icons).map(([iconName, Icon]) => (
            <div className="icon-container" key={iconName}>
                <Icon className="icon" />
                <p>{iconName}</p>
            </div>
        ))}
    </div>,
    document.getElementById('app')
);
