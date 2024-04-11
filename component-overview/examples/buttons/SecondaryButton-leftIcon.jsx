import { SecondaryButton, ButtonGroup } from '@sb1/ffe-buttons-react';
import { Icon } from '@sb1/ffe-icons-react';
import checkIcon from '@sb1/ffe-icons/icons/open/300/md/check.svg';

() => {
    return (
        <ButtonGroup thin={true}>
            <SecondaryButton leftIcon={<Icon fileUrl={checkIcon} />} onClick={f => f}>
                Secondary m/ ikon
            </SecondaryButton>
        </ButtonGroup>
    );

}
