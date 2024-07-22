import { GroupCard } from '@sb1/ffe-cards-react/src/GroupCard/GroupCard';
import { GroupCardElement } from '@sb1/ffe-cards-react/es/GroupCard/GroupCardElement';

() => {
    return (
        <GroupCard shadow={true}>
            <GroupCardElement noPadding={true}>
                Dette er et element i GroupCard uten padding
            </GroupCardElement>
            <GroupCardElement noPadding={true}>
                Dette er et element i GroupCard uten padding
            </GroupCardElement>
            <GroupCardElement noPadding={true}>
                Dette er et element i GroupCard uten padding
            </GroupCardElement>
        </GroupCard>
    );
};
