import { PrimaryButton, SecondaryButton } from '@sb1/ffe-buttons-react';
import { BodyText, DividerLine, Heading3, Paragraph } from '@sb1/ffe-core-react';
import { CheckList, CheckListItem, NumberedList, NumberedListItem } from '@sb1/ffe-lists-react';
import { ContextMessage } from '@sb1/ffe-messages-react';
import { MessageType } from '@sb1/ffe-messages-react/types/types';
import React from 'react';

type SafetyViewProps = {
    onTriggerContextMessage: () => void;
};

const SafetyView: React.FC<SafetyViewProps> = ({ onTriggerContextMessage }) => {
    const [constextMessageVisible, setContextMessageVisible] = React.useState(false);
    const [contextMessageType, setContextMessageType] = React.useState<MessageType>('info');

    return (
        <div>
            <Paragraph>
                Klikk på knappen for å utløse en systemmelding. Dette kan være nyttig for å teste hvordan systemet håndterer kontekstuelle meldinger.
            </Paragraph>
            <PrimaryButton onClick={onTriggerContextMessage}>
                Trigg en systemmelding
            </PrimaryButton>
            <DividerLine className='mt-2' />
            <Heading3>Husk på sikkerheten</Heading3>
            <BodyText>
                I sommerferien er det viktig å huske på sikkerheten. Sørg for at du har oppdatert alle passord og at du har aktivert tofaktorautentisering der det er mulig. Dette vil bidra til å beskytte kontoen din mot uautorisert tilgang.
                <NumberedList>
                    <NumberedListItem>Bruk sterke og unike passord for hver tjeneste.</NumberedListItem>
                    <NumberedListItem>Aktiver tofaktorautentisering der det er mulig.</NumberedListItem>
                    <NumberedListItem>Vær oppmerksom på phishing-forsøk i e-post og SMS.</NumberedListItem>
                    <NumberedListItem>Oppdater programvare og apper regelmessig.</NumberedListItem>
                </NumberedList>
                I tillegg er det viktig å huske på
                følgende sikkerhetstiltak:
                <Paragraph>Her er noen ekstra tips:</Paragraph>
                <CheckList>
                    <CheckListItem>Bruk VPN når du er på offentlige WiFi-nettverk.</CheckListItem>
                    <CheckListItem>Logg alltid ut av viktige tjenester etter bruk.</CheckListItem>
                    <CheckListItem isCross={true}>Vær skeptisk til ukjente lenker og vedlegg.</CheckListItem>
                </CheckList>
            </BodyText>
            <SecondaryButton onClick={() => {
                setContextMessageVisible(!constextMessageVisible)
                setContextMessageType(['info', 'success', 'error', 'warning', 'tips'][Math.floor(Math.random() * 4)] as MessageType);
            }}>
                Jeg har byttet passord!
            </SecondaryButton>
            {constextMessageVisible && (
                <ContextMessage type={contextMessageType} className="mt-4" closeButton={true} onClose={() => setContextMessageVisible(false)}>
                    Så flink du har vært!
                </ContextMessage>)}
        </div>
    );
};

export default SafetyView;