import React from 'react';
import {render} from 'react-dom';
import Dropdown from '../src/dropdown';

require('./example.less');

const heading = document.createElement('h1');
heading.textContent = 'Dropdown';
heading.className = 'ffe-h1';
document.body.appendChild(heading);

const dropdownDOM = document.createElement('section');
document.body.appendChild(dropdownDOM);

const items = [
    {id: 0, name: "Ola"},
    {id: 1, name: "Kari"}
];

render(
    <div>
        This is an example dropdown
        <Dropdown id="myDropdown" onChange={ (e) => console.log("You chose " + items[e.target.value].name) } defaultValue="default">
            <option value="default" disabled="true">Choose</option>
            { items.map(i => <option key={ i.id } value={ i.id }>{ i.name }</option>) }
        </Dropdown>

        This is an example dropdown with error
        <Dropdown id="errorDropdown" onChange={ (e) => console.log("You chose " + items[e.target.value].name) } defaultValue="default" invalid="true" errorMessage="Something's wrong">
            <option value="default" disabled="true">Choose</option>
            { items.map(i => <option key={ i.id } value={ i.id }>{ i.name }</option>) }
        </Dropdown>

        This is an example dropdown with spinner
        <Dropdown id="errorDropdown" defaultValue="default" isLoading>
            <option value="default" disabled="true">Loading...</option>
        </Dropdown>
    </div>
    , dropdownDOM);
