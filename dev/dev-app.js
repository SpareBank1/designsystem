import 'babel-polyfill';
import './styles.less';
import React from 'react';
import InfoIcon from 'ffe-icons-react/info-ikon';
import ShowerIcon from 'ffe-icons-react/badekar-dusj-ikon';
import BoatIcon from 'ffe-icons-react/bat-liten-ikon';
import { render } from 'react-dom';
import {
    ContextInfoMessage,
    ContextTipMessage,
    ContextSuccessMessage,
    ContextErrorMessage,
} from '../src';

render(
    <div className="ffe-body-text">
        <div style={{ margin: '25px 0' }}>
            <ContextInfoMessage
                header='Info'
                showCloseButton={true}
            >
                Her kan det stå en nyhet eller informasjon som ikke er kritisk.
                Her kan det stå en nyhet eller informasjon som ikke er kritisk.
                Her kan det stå en nyhet eller informasjon som ikke er kritisk.
            </ContextInfoMessage>
        </div>
        <div style={{ margin: '25px 0' }}>
            <ContextTipMessage
                icon={<InfoIcon />}
                showCloseButton={false}
            >
                Vekommen til betaversjonen av nye Sparebank1.no.
                Vekommen til betaversjonen av nye Sparebank1.no.
                Vekommen til betaversjonen av nye Sparebank1.no.
            </ContextTipMessage>
        </div>
        <div style={{ margin: '25px 0' }}>
            <ContextSuccessMessage
                locale='en'
                showCloseButton={true}
                icon={<ShowerIcon/>}
            >
                Vekommen til betaversjonen av nye Sparebank1.no.
                Vekommen til betaversjonen av nye Sparebank1.no.
                Vekommen til betaversjonen av nye Sparebank1.no.
            </ContextSuccessMessage>
        </div>

        <div style={{ margin: '25px 0' }}>
            <ContextErrorMessage
                locale='en'
                showCloseButton={true}
                icon={<BoatIcon/>}
            >
                Vekommen til betaversjonen av nye Sparebank1.no.
                Vekommen til betaversjonen av nye Sparebank1.no.
                Vekommen til betaversjonen av nye Sparebank1.no.
            </ContextErrorMessage>
        </div>
    </div>,
    document.getElementById('root')
);
