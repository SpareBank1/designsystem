import React from 'react';
import { InputGroup } from './InputGroup';
import type { StoryObj, Meta } from '@storybook/react';
import { AmountInput } from './AmountInput';
import { PrimaryButton } from '@sb1/ffe-buttons-react';
import { Paragraph } from '@sb1/ffe-core-react';

const meta: Meta<typeof AmountInput> = {
    title: 'Komponenter/Form/AmountInput',
    component: AmountInput,
};
export default meta;

type Story = StoryObj<typeof AmountInput>;

export const Uncontrolled: Story = {
    args: {
        locale: 'nb',
        defaultValue: 1,
    },
    render: args => (
        <InputGroup label="Navn">
            <AmountInput {...args} />
        </InputGroup>
    ),
};

export const Controlled: Story = {
    args: {
        locale: 'nb',
    },
    render: args => {
        const [amount, setAmount] = React.useState(0);
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const newAmount = parseFloat(event.target.value);
            setAmount(newAmount);
        };
        return (
            <div>
                <InputGroup label="Navn">
                    <AmountInput
                        {...args}
                        value={amount}
                        onChange={handleChange}
                    />
                </InputGroup>
                <PrimaryButton
                    onClick={() => setAmount(amount ? amount + 1 : 1)}
                >
                    Øk beløpet med 1
                </PrimaryButton>
                <Paragraph>
                    Indre verdi:{' '}
                    <pre style={{ display: 'inline-block' }}>{amount}</pre>
                </Paragraph>
            </div>
        );
    },
};
