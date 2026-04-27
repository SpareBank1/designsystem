import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { CopyText } from './CopyText';
import { Paragraph } from './typography/Paragraph';

const meta: Meta<typeof CopyText> = {
    title: 'Komponenter/Core/CopyText',
    component: CopyText,
};
export default meta;

type Story = StoryObj<typeof CopyText>;

export const Standard: Story = {
    args: {
        children: '1234 56 78901',
        label: 'Kopier',
        copiedLabel: 'Kopiert',
    },
    render: args => (
        <Paragraph>
            <CopyText {...args} />
        </Paragraph>
    ),
};

export const MedCopyTextOverride: Story = {
    args: {
        children: 'Kontonummer: 1234 56 78901',
        copyText: '12345678901',
        label: 'Kopier kontonummer',
        copiedLabel: 'Kontonummer kopiert',
    },
    render: args => (
        <Paragraph>
            <CopyText {...args} />
        </Paragraph>
    ),
};

export const InlineITekst: Story = {
    render: () => (
        <Paragraph>
            Send betaling til kontonummer{' '}
            <CopyText copyText="12345678901">1234 56 78901</CopyText> innen
            fredag.
        </Paragraph>
    ),
};

export const FlereLinjer: Story = {
    render: () => (
        <Paragraph style={{ maxWidth: '320px' }}>
            Husk å lagre den nye kontoen din. Betalinger til denne kontoen vil
            gå til kontonummer{' '}
            <CopyText copyText="12345678901">1234 56 78901</CopyText>, som er
            registrert på SpareBank 1.
        </Paragraph>
    ),
};

export const Detaljliste: Story = {
    render: () => (
        <dl
            className="ffe-body"
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                rowGap: 0,
                columnGap: '16px',
                alignItems: 'center',
                margin: 0,
            }}
        >
            {[
                {
                    label: 'Kontonummer',
                    display: '1234 56 78901',
                    copy: '12345678901',
                },
                {
                    label: 'Kontonavn',
                    display: 'Brukskonto',
                    copy: 'Brukskonto',
                },
                { label: 'BIC/SWIFT', display: 'SPRONO22', copy: 'SPRONO22' },
                {
                    label: 'IBAN',
                    display: 'NO93 1234 5678 901',
                    copy: 'NO9312345678901',
                },
            ].map(({ label, display, copy }) => (
                <React.Fragment key={label}>
                    <dt style={{ margin: 0 }}>{label}</dt>
                    <dd style={{ margin: 0, textAlign: 'right' }}>
                        <CopyText copyText={copy} label={`Kopier ${label}`}>
                            {display}
                        </CopyText>
                    </dd>
                </React.Fragment>
            ))}
        </dl>
    ),
};
