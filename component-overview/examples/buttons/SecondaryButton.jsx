import { SecondaryButton, ButtonGroup } from '@sb1/ffe-buttons-react';
import { Icon } from '@sb1/ffe-icons-react';
import checkIcon from '@sb1/ffe-icons/icons/open/300/md/check.svg';

() => {
    return (
        <ButtonGroup thin={true}>
        <SecondaryButton onClick={f => f}>Secondary knapp</SecondaryButton>
        <SecondaryButton leftIcon={<Icon fileUrl={checkIcon} />} onClick={f => f}>
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
    );
}
