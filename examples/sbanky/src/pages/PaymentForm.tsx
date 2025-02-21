import React, { useState } from 'react';
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';
import { Heading1, Paragraph } from '@sb1/ffe-core-react';
import { InputGroup, Input, TextArea } from '@sb1/ffe-form-react';
import { Dropdown } from '@sb1/ffe-dropdown-react';
import { PrimaryButton, TertiaryButton } from '@sb1/ffe-buttons-react';
import {
    SuccessMessage,
    ErrorMessage,
    InfoMessage,
} from '@sb1/ffe-message-box-react';

const accounts = [
    {
        value: '1234.56.78910',
        label: 'Brukskonto - 1234.56.78910 (45 678,90 kr)',
    },
    {
        value: '1234.56.78911',
        label: 'Sparekonto - 1234.56.78911 (150 000,00 kr)',
    },
];

export const PaymentForm = () => {
    const [fromAccount, setFromAccount] = useState('');
    const [toAccount, setToAccount] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!fromAccount || !toAccount || !amount) {
            setError('Vennligst fyll ut alle påkrevde felt');
            return;
        }
        setSubmitted(true);
        setError('');
    };

    return (
        <Grid>
            <GridRow>
                <GridCol sm={12}>
                    <Heading1>Ny betaling</Heading1>
                    <Paragraph>
                        Overfør penger mellom kontoer eller betal regninger
                    </Paragraph>
                </GridCol>
            </GridRow>

            {submitted ? (
                <GridRow>
                    <GridCol sm={12}>
                        <SuccessMessage title="Betalingen er registrert">
                            Din betaling på {amount} kr er registrert og vil bli
                            utført.
                        </SuccessMessage>
                    </GridCol>
                </GridRow>
            ) : (
                <form onSubmit={handleSubmit}>
                    <GridRow>
                        <GridCol sm={12} md={8} lg={6}>
                            {error && (
                                <ErrorMessage
                                    title="Feil i skjema"
                                    className="mb-4"
                                >
                                    {error}
                                </ErrorMessage>
                            )}

                            <InfoMessage title="Tips">
                                Du kan lagre denne betalingsmottakeren for
                                senere bruk
                            </InfoMessage>

                            <div>
                                <InputGroup label="Fra konto">
                                    <Dropdown
                                        onChange={e =>
                                            setFromAccount(e.target.value)
                                        }
                                        value={fromAccount}
                                    >
                                        <option value="">Velg konto</option>
                                        {accounts.map(account => (
                                            <option
                                                key={account.value}
                                                value={account.value}
                                            >
                                                {account.label}
                                            </option>
                                        ))}
                                    </Dropdown>
                                </InputGroup>
                            </div>

                            <InputGroup
                                label="Til kontonummer"
                                className="mt-4"
                            >
                                <Input
                                    type="text"
                                    value={toAccount}
                                    onChange={e => setToAccount(e.target.value)}
                                />
                            </InputGroup>

                            <InputGroup label="Beløp">
                                <Input
                                    type="number"
                                    value={amount}
                                    onChange={e => setAmount(e.target.value)}
                                />
                            </InputGroup>

                            <InputGroup label="Melding til mottaker">
                                <TextArea
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                />
                            </InputGroup>

                            <div className="flex gap-4">
                                <PrimaryButton type="submit">
                                    Utfør betaling
                                </PrimaryButton>
                                <TertiaryButton type="button">
                                    Avbryt
                                </TertiaryButton>
                            </div>
                        </GridCol>
                    </GridRow>
                </form>
            )}
        </Grid>
    );
};
