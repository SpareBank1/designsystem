import { GroupCard } from '@sb1/ffe-cards-react/src/GroupCard/GroupCard';
import { GroupCardElement } from '@sb1/ffe-cards-react/es/GroupCard/GroupCardElement';

() => {
    return (
        <GroupCard shadow={false}>
            <GroupCardElement>Innhold nr 1</GroupCardElement>
            <GroupCardElement>Innhold nr 2</GroupCardElement>
            <GroupCardElement>Innhold nr 3</GroupCardElement>
        </GroupCard>
    );
};
