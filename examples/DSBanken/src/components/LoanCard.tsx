import { CardBase } from '@sb1/ffe-cards-react';
import { Heading2 } from '@sb1/ffe-core-react';
import { formatNumber } from '@sb1/ffe-formatters';
import { DescriptionList, DescriptionListDescription, DescriptionListTerm, DetailListCard, DetailListCardItem } from '@sb1/ffe-lists-react';
import { Progressbar } from '@sb1/ffe-progressbar-react';
import React from 'react';
import "./loan-card.less";

interface LoanCardProps {
    amount: number;
    maxAmount: number;
}

const LoanCard: React.FC<LoanCardProps> = ({ amount, maxAmount }) => {

    return (
        <CardBase>
            <Heading2 lookLike={5}>Boliglån</Heading2>
            <Progressbar value={amount} max={maxAmount} />
            <DescriptionList className="w-full" horizontal={true} size="lg">
                <DescriptionListTerm>
                    <span className='legend-dot legend-dot__first mr-1'></span>
                    Gjenstående lån
                </DescriptionListTerm>
                <DescriptionListDescription className='text-end'>
                    {`${formatNumber(amount, { locale: 'nb' })} kr`}
                </DescriptionListDescription>
                <DescriptionListTerm>
                    <span className='legend-dot legend-dot__second mr-1'></span>
                    Nedbetalt
                </DescriptionListTerm>
                <DescriptionListDescription className='text-end'>
                    {`${formatNumber((maxAmount - amount), { locale: 'nb' })} kr`}
                </DescriptionListDescription>
                <DescriptionListTerm>
                    Totalt lånebeløp
                </DescriptionListTerm>
                <DescriptionListDescription className='text-end'>
                    {`${formatNumber(maxAmount, { locale: 'nb' })} kr`}
                </DescriptionListDescription>
            </DescriptionList>
        </CardBase>
    );
};

export default LoanCard;