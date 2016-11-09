import 'babel-polyfill';
import './styles.less';

import React from 'react';
import { render } from 'react-dom';

import {
    ContextInfoMessage,
    ContextTipMessage,
} from '../src';

render(
    <div className="ffe-body-text">
        <div style={{margin: '25px 0'}}>
            <ContextInfoMessage>
                Her kan det stå en nyhet eller informasjon som ikke er kritisk.
                Her kan det stå en nyhet eller informasjon som ikke er kritisk.
                Her kan det stå en nyhet eller informasjon som ikke er kritisk.
            </ContextInfoMessage>
        </div>
        <div style={{margin: '25px 0'}}>
            <ContextTipMessage>
                Vekommen til betaversjonen av nye Sparebank1.no.
                Vekommen til betaversjonen av nye Sparebank1.no.
                Vekommen til betaversjonen av nye Sparebank1.no.
            </ContextTipMessage>
        </div>
    </div>

    ,
    document.getElementById('root')
);
