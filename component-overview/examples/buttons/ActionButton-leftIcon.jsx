import { ActionButton, ButtonGroup } from '@sb1/ffe-buttons-react';
import { HakeIkon } from '@sb1/ffe-icons-react';
<>
    <ButtonGroup thin={true}>
        <ActionButton
            onClick={f => f}
            ariaLoadingMessage="Vennligst vent..."
            leftIcon={<HakeIkon />}
        >
            Bekreft
        </ActionButton>
    </ButtonGroup>
</>;
