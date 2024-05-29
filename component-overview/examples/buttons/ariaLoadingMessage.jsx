import {
    ButtonGroup,
    ActionButton,
    PrimaryButton,
    SecondaryButton,
} from '@sb1/ffe-buttons-react';

<ButtonGroup ariaLabel="Knappegruppe">
    <ActionButton
        isLoading={true}
        onClick={f => f}
        ariaLoadingMessage="Vennligst vent..."
    >
        Action knapp
    </ActionButton>
    <PrimaryButton
        isLoading={true}
        onClick={f => f}
        ariaLoadingMessage="Vennligst vent..."
    >
        Primary knapp
    </PrimaryButton>
    <SecondaryButton
        isLoading={true}
        onClick={f => f}
        ariaLoadingMessage="Vennligst vent..."
    >
        Secondary knapp
    </SecondaryButton>
</ButtonGroup>
