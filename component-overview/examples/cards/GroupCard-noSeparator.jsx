import { GroupCard } from '@sb1/ffe-cards-react/src/GroupCard/GroupCard';
import { GroupCardElement } from '@sb1/ffe-cards-react/es/GroupCard/GroupCardElement';

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
