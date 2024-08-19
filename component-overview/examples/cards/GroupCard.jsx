import {
    GroupCard,
    GroupCardElement,
    GroupCardFooter,
    GroupCardTitle,
} from '@sb1/ffe-cards-react';
import { Heading2 } from '@sb1/ffe-core-react';

() => {
    return (
        <GroupCard>
            <GroupCardTitle>
                <Heading2 lookLike={5}>Tittel på gruppe</Heading2>
            </GroupCardTitle>
            <GroupCardElement>Dette er et element i GroupCard</GroupCardElement>
            <GroupCardElement>Dette er et element i GroupCard</GroupCardElement>
            <GroupCardElement>Dette er et element i GroupCard</GroupCardElement>
            <GroupCardFooter>
                {({ CardAction }) => (
                    <CardAction href="https://design.sparebank1.no">
                        Vis mer
                    </CardAction>
                )}
            </GroupCardFooter>
        </GroupCard>
    );
};
