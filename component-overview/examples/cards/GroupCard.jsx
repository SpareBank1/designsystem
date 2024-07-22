import { GroupCard } from '@sb1/ffe-cards-react/src/GroupCard/GroupCard';
import { GroupCardElement } from '@sb1/ffe-cards-react/es/GroupCard/GroupCardElement';

() => {
    return (
        <GroupCard shadow={true}>
            <GroupCardElement>Dette er et element i GroupCard</GroupCardElement>
            <GroupCardElement>Dette er et element i GroupCard</GroupCardElement>
            <GroupCardElement>Dette er et element i GroupCard</GroupCardElement>
        </GroupCard>
    );
};
