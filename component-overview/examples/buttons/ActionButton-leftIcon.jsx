import { ActionButton, ButtonGroup } from '@sb1/ffe-buttons-react';
import { Icon } from '@sb1/ffe-icons-react';
import checkIcon from '@sb1/ffe-icons/icons/open/300/md/check.svg';

() => {
    return (
        <>
            <ButtonGroup thin={true}>
                <ActionButton
                    onClick={f => f}
                    ariaLoadingMessage="Vennligst vent..."
                    leftIcon={<Icon fileUrl={checkIcon} />}
                >
                    Bekreft
                </ActionButton>
            </ButtonGroup>
        </>
    );
}

