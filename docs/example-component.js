import Dropdown from '../lib/dropdown';
import React, { cloneElement } from 'react';

export const Example = (
    <Dropdown label="Velg måned" id="month">
        <option value="0">Januar</option>                    
        <option value="1">Februar</option>
        <option value="2">Mars</option>
        <option value="3">April</option> 
    </Dropdown>
);

export default (props={}) => cloneElement(Example, props)