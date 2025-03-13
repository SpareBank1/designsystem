import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { RadioBlock } from './RadioBlock';
import { RadioButtonInputGroup } from './RadioButtonInputGroup';

const meta: Meta<typeof RadioBlock> = {
    title: 'Komponenter/Form/RadioBlock',
    component: RadioBlock,
};
export default meta;

type Story = StoryObj<typeof RadioBlock>;

export const Standard: Story = {
    args: {
        showChildren: true,
    },
    render: function Render(args) {
        const [selected, setSelected] = useState('you');
        return (
            <RadioButtonInputGroup
                label="Hvem eier bilen du skal forsikre?"
                name="owner"
                onChange={e => setSelected(e.target.value)}
                selectedValue={selected}
            >
                {inputProps => (
                    <>
                        <RadioBlock
                            {...args}
                            {...inputProps}
                            label="Ektefelle, samboer eller registrert partner"
                            value="partner"
                        >
                            Da må ektefelle, samboer eller registrert partner
                            skrive inn detaljene sine under.
                        </RadioBlock>
                        <RadioBlock
                            {...args}
                            {...inputProps}
                            label="Du"
                            value="you"
                        >
                            Da må du skrive inn detaljene dine under.
                        </RadioBlock>
                        <RadioBlock
                            {...args}
                            {...inputProps}
                            label="Leasingselskap"
                            value="leasing-company"
                        >
                            Da må leasingselskapet gi deg noen detaljer som du
                            må skrive inn under.
                        </RadioBlock>
                    </>
                )}
            </RadioButtonInputGroup>
        );
    },
};
