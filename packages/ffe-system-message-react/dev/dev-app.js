import 'babel-polyfill';
import './styles.less';

import React from 'react';
import { render } from 'react-dom';

import {
    SystemErrorMessage,
    SystemInfoMessage,
    SystemNewsMessage,
    SystemSuccessMessage,
} from '../src';

render(
    <div className="ffe-body-text">
        <div style={{margin: '25px 0'}}>
            <SystemErrorMessage>
                Vi opplever for tiden problemer med nettbank og kortbetaling. Vi gir en lyd så snart dette er løst.
            </SystemErrorMessage>
        </div>
        <div style={{margin: '25px 0'}}>
            <SystemInfoMessage>
                Her kan det stå en nyhet eller informasjon som ikke er kritisk.
            </SystemInfoMessage>
        </div>
        <div style={{margin: '25px 0'}}>
            <SystemNewsMessage>
                Vekommen til betaversjonen av nye Sparebank1.no
            </SystemNewsMessage>
        </div>
        <div style={{margin: '25px 0'}}>
            <SystemSuccessMessage>
                En gladnyhet. Nå er nettbanken oppe og går igjen!
            </SystemSuccessMessage>
        </div>
    </div>,
    document.getElementById('root')
);
