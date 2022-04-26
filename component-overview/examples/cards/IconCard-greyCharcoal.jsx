import { IconCard } from '@sb1/ffe-cards-react';
import { KryssSirkelIkon } from '@sb1/ffe-icons-react';

<IconCard
    icon={<KryssSirkelIkon style={{ transform: 'rotate(45deg)' }} />}
    greyCharcoal={true}
    condensed={true}
>
    {({ Title, Subtext }) => (
        <>
            <Title>Start ny sparing</Title>
            <Subtext>Det er mange måter å spare på</Subtext>
        </>
    )}
</IconCard>
