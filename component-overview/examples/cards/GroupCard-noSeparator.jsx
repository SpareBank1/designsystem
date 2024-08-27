import {
    GroupCard,
    GroupCardElement,
    GroupCardFooter,
    GroupCardTitle,
} from '@sb1/ffe-cards-react';
import { Heading2 } from '@sb1/ffe-core-react';

() => {
    return (
        <GroupCard shadow={true}>
            <GroupCardTitle noSeparator={true}>
                <Heading2 lookLike={5}>Tittel på gruppe</Heading2>
            </GroupCardTitle>
            <GroupCardElement noSeparator={true}>
                Dette er et element i GroupCard en linje mellom elementene
            </GroupCardElement>
            <GroupCardElement noSeparator={true}>
                Dette er et element i GroupCard en linje mellom elementene
            </GroupCardElement>
            <GroupCardElement noSeparator={true}>
                Dette er et element i GroupCard en linje mellom elementene
            </GroupCardElement>
            <GroupCardFooter>Footer</GroupCardFooter>
        </GroupCard>
    );
};
