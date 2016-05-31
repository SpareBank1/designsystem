import { SuccessMessage, ErrorMessage, TipsMessage, InfoMessage } from '../lib/index';
import React from 'react';

export const SuccessExample = (
    <SuccessMessage title="Betalingen er gjennomført" content="Her står det en lengre melding, kanskje med HTML." />
);

export const ErrorExample = (
    <ErrorMessage title="Noe gikk galt" content="Noe gikk galt. Vennligst prøv igjen senere!" />
);

export const TipsExample = (
    <TipsMessage title="Et tips til deg" content="Følger du dette tipset i denne boksen kan du spare mange penger." />
);

export const InfoExample = (
    <InfoMessage title="Du har ingen kort" content="Denne tjenesten er kun tilgjengelig for deg med et debitkort eller kredittkort fra SpareBank1" />
);

export const MainExample = (
    <SuccessMessage title="Betalingen er gjennomført" content="Her står det en lengre melding, kanskje med HTML." />
);

export default MainExample;