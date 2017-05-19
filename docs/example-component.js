import { SuccessMessage, ErrorMessage, TipsMessage, InfoMessage, InfoMessageList, InfoMessageListItem } from '../lib/index';
import React from 'react';

export const SuccessExample = (
    <SuccessMessage title="Betalingen er gjennomført" content="Her står det en lengre melding, kanskje med HTML." />
);

export const ErrorExample = (
    <ErrorMessage title="Noe gikk galt" content={
        <span>Noe gikk galt. Vennligst prøv igjen senere! <a className="ffe-message-box__link" href="#">Finn ut hva som gikk galt</a></span>}
    />
);

export const ErrorListExample = (
    <ErrorMessage title="Feil">
        <InfoMessageList>
            <InfoMessageListItem>
                Feltet må fylles ut
            </InfoMessageListItem>
            <InfoMessageListItem href="#email">
                Skriv inn en gyldig e-postadresse
            </InfoMessageListItem>
            <InfoMessageListItem href="#phone">
                Skriv inn gyldig telefonnummer, 8 siffer
            </InfoMessageListItem>
        </InfoMessageList>
    </ErrorMessage>
);

export const TipsExample = (
    <TipsMessage title="Et tips til deg" content={"Følger du dette tipset i denne boksen kan du spare mange penger."} />
);

export const TipsListExample = (
    <TipsMessage title="Tips">
        <InfoMessageList>
            <InfoMessageListItem>
                Dette er det første tipset
            </InfoMessageListItem>
            <InfoMessageListItem>
                Det er lurt å følge disse tipsene dersom du ønsker å spare penger.
            </InfoMessageListItem>
            <InfoMessageListItem>
                Følger du tipsene over gjør du noe lurt!
            </InfoMessageListItem>
        </InfoMessageList>
    </TipsMessage>
);

export const InfoExample = (
    <InfoMessage title="Du har ingen kort" content="Denne tjenesten er kun tilgjengelig for deg med et debitkort eller kredittkort fra SpareBank1" />
);

export const MainExample = (
    <SuccessMessage title="Betalingen er gjennomført" content="Her står det en lengre melding, kanskje med HTML." />
);

export default MainExample;
