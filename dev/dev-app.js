import 'babel-polyfill';
import './styles.less';

import React from 'react';
import { render } from 'react-dom';

import { SystemInfoMessage } from '../src';

render(
    <div className="ffe-section-wrapper ffe-body-text">
        <div className="ffe-content-container ffe-content-container--lg">
            <SystemInfoMessage header="Dette er typen system-info-message">
                Bacon ipsum dolor amet lorem cupim pork belly jowl strip steak minim ham boudin nulla
                incididunt shoulder. In meatball turkey, sed in strip steak enim rump cupidatat dolore
                cupim sunt spare ribs labore short ribs.
            </SystemInfoMessage>
        </div>
    </div>,
    document.getElementById('root')
);
