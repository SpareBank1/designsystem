import { GroupCard, GroupCardElement } from '@sb1/ffe-cards-react';

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
