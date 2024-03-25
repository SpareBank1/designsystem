import { TaskButton, ButtonGroup } from '@sb1/ffe-buttons-react';
import { Icon } from '@sb1/ffe-icons-react';
import addIcon from '@sb1/ffe-icons/icons/300/open/md/add.svg';

() => {
    return (
        <ButtonGroup thin={true}>
            <TaskButton icon={<Icon fileUrl={addIcon} />}>Legg til bruker</TaskButton>
        </ButtonGroup>
    );
}

