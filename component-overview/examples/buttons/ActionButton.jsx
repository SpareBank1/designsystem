import { ActionButton, ButtonGroup } from '@sb1/ffe-buttons-react';

<>
    <ButtonGroup thin={true}>
        <ActionButton onClick={f => f}>Action knapp</ActionButton>
        <ActionButton
            isLoading={true}
            onClick={f => f}
            ariaLoadingMessage="Vennligst vent..."
        >
            Action knapp
        </ActionButton>
    </ButtonGroup>
</>
