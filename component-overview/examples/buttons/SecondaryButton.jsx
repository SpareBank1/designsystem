import { SecondaryButton, ButtonGroup } from '@sb1/ffe-buttons-react';
import { BindersIkon } from '@sb1/ffe-icons-react';

<ButtonGroup thin={true}>
    <SecondaryButton onClick={f => f}>Secondary knapp</SecondaryButton>
    <SecondaryButton leftIcon={<BindersIkon />} onClick={f => f}>
        Secondary m/ ikon
    </SecondaryButton>
    <SecondaryButton
        isLoading={true}
        onClick={f => f}
        ariaLoadingMessage="Vennligst vent..."
    >
        Secondary knapp
    </SecondaryButton>
</ButtonGroup>
