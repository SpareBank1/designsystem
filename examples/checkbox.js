import React from 'react';
import {render} from 'react-dom';
import Checkbox from '../src/checkbox';

require('./example.less');

const heading = document.createElement('h1');
heading.textContent = 'Checkbox';
heading.className = 'ffe-h1';
document.body.appendChild(heading);

const checkboxDOM = document.createElement('section');
document.body.appendChild(checkboxDOM);

render(
    <div className="ffe-input-group">
        <Checkbox
            label="This is an example checkbox"
            name="justACheckbox"
            inline={ false }
        />

        <Checkbox
            label="This is an example checkbox with error"
            name="anotherCheckbox"
            inline={ false }
            invalid={ true }
        />
    </div>
    , checkboxDOM);
