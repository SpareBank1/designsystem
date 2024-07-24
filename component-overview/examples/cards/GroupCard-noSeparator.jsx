import { GroupCard, GroupCardElement } from '@sb1/ffe-cards-react';

() => {
    return (
        <GroupCard shadow={true}>
            <GroupCardElement noSeparator={true}>
                Dette er et element i GroupCard en linje mellom elementene
            </GroupCardElement>
            <GroupCardElement noSeparator={true}>
                Dette er et element i GroupCard en linje mellom elementene
            </GroupCardElement>
            <GroupCardElement noSeparator={true}>
                Dette er et element i GroupCard en linje mellom elementene
            </GroupCardElement>
        </GroupCard>
    );
};
