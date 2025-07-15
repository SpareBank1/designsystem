import { ChipSelectable } from '@sb1/ffe-chips-react';
import { MessageBox } from '@sb1/ffe-messages-react';
import { MessageType } from '@sb1/ffe-messages-react/types/types';
import React from 'react';

const MessagesView: React.FC = () => {
    const [type, setType] = React.useState<MessageType>('info');

    return (
        <div>
            <MessageBox type={type} className="mb-4">
                {type === 'info' && 'Dette er en informasjonsmelding. Her kan du finne viktig informasjon om tjenesten.'}
                {type === 'success' && 'Dette er en suksessmelding. Alt gikk som forventet, og du kan fortsette videre.'}
                {type === 'error' && 'Dette er en feilmelding. Noe gikk galt, vennligst prøv igjen senere eller kontakt support.'}
                {type === 'tips' && 'Dette er et tips. Husk å lagre arbeidet ditt jevnlig for å unngå tap av data.'}
                {type === 'warning' && 'Dette er en advarsel. Vær oppmerksom på mulige endringer som kan påvirke kontoen din.'}
            </MessageBox>
            <div className='flex gap-1 flex-wrap'>
                <ChipSelectable size="md" isSelected={type === 'info'} onClick={() => setType("info")}>Informasjon</ChipSelectable>
                <ChipSelectable size="md" isSelected={type === 'success'} onClick={() => setType("success")}>Sukkess</ChipSelectable>
                <ChipSelectable size="md" isSelected={type === 'error'} onClick={() => setType("error")}>Error</ChipSelectable>
                <ChipSelectable size="md" isSelected={type === 'tips'} onClick={() => setType("tips")}>Tips</ChipSelectable>
                <ChipSelectable size="md" isSelected={type === 'warning'} onClick={() => setType("warning")}>Advarsel</ChipSelectable>
            </div>
        </div>
    );
};

export default MessagesView;