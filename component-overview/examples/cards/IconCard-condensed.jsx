import { IconCard } from '@sb1/ffe-cards-react';
import { Icon } from '@sb1/ffe-icons-react';
import savingsIconLarge from '@sb1/ffe-icons/icons/open/300/lg/savings.svg';

() => {

    return (
        <IconCard href="https://design.sparebank1.no" icon={<Icon fileUrl={savingsIconLarge} size="lg" />} condensed={true}>
            {({ Title, Subtext }) => (
                <>
                    <Title>Sparekonto voksen 25</Title>
                    <Subtext>7 004,00</Subtext>
                </>
            )}
        </IconCard>
    );
}


