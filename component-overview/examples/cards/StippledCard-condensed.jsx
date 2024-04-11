import { StippledCard } from '@sb1/ffe-cards-react';
import { Icon } from '@sb1/ffe-icons-react';
import monitoringIconLarge from '@sb1/ffe-icons/icons/open/300/lg/monitoring.svg';

() => {
    return (
        <StippledCard href="https://design.sparebank1.no" img={{ type: 'icon', element: <Icon fileUrl={monitoringIconLarge} size="lg" /> }} condensed={true}>
            {({ Title, Subtext }) => (
                <>
                    <Title>Sparekonto voksen 25</Title>
                    <Subtext>7 004,00</Subtext>
                </>
            )}
        </StippledCard>

    );
}
