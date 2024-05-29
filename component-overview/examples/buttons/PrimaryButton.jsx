import { PrimaryButton, ButtonGroup } from '@sb1/ffe-buttons-react';

<ButtonGroup thin={true} ariaLabel="Knappegruppe">
    <PrimaryButton onClick={f => f}>Primary knapp</PrimaryButton>
    <PrimaryButton
        isLoading={true}
        onClick={f => f}
        ariaLoadingMessage="Vennligst vent..."
    >
        Primary knapp
    </PrimaryButton>
</ButtonGroup>
