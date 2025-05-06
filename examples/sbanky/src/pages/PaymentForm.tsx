import React, { useState } from 'react';
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';
import { Heading1, Paragraph } from '@sb1/ffe-core-react';
import { Input, InputGroup, Label, ErrorFieldMessage } from '@sb1/ffe-form-react';
import { PrimaryButton } from '@sb1/ffe-buttons-react';

export const PaymentForm = () => {
    const [account, setAccount] = useState('');
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    const [accountError, setAccountError] = useState<string | undefined>(undefined);
    const [nameError, setNameError] = useState<string | undefined>(undefined);
    const [amountError, setAmountError] = useState<string | undefined>(undefined);
    const [submitted, setSubmitted] = useState(false);

    const validateForm = (): boolean => {
        let isValid = true;
        // Enkel validering - sjekk om feltene er tomme
        if (!account) {
            setAccountError('Kontonummer må fylles ut');
            isValid = false;
        } else {
            setAccountError(undefined);
        }

        if (!name) {
            setNameError('Navn må fylles ut');
            isValid = false;
        } else {
            setNameError(undefined);
        }

        if (!amount || parseFloat(amount) <= 0) {
            setAmountError('Beløp må være et positivt tall');
            isValid = false;
        } else {
            setAmountError(undefined);
        }
        return isValid;
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setSubmitted(true);

        if (validateForm()) {
            // Her ville man typisk sendt data til en API
            alert(`Betaling sendt:\nKonto: ${account}\nNavn: ${name}\nBeløp: ${amount}`);
            // Reset form eller naviger bort
            setAccount('');
            setName('');
            setAmount('');
            setSubmitted(false);
        }
    };

    return (
        <Grid>
            <GridRow>
                <GridCol sm={12}>
                    <Heading1>Ny betaling</Heading1>
                    <Paragraph>Fyll ut detaljene for betalingen.</Paragraph>
                </GridCol>
            </GridRow>

            <form onSubmit={handleSubmit} noValidate>
                <GridRow>
                    <GridCol sm={12} md={6}>
                        <InputGroup 
                            label="Mottakers kontonummer"
                            fieldMessage={submitted && accountError ? <ErrorFieldMessage>{accountError}</ErrorFieldMessage> : undefined}
                        >
                            <Input 
                                type="text" 
                                value={account} 
                                onChange={e => {
                                    setAccount(e.target.value);
                                    if (submitted) validateForm(); // Revalider ved endring etter submit
                                }} 
                                aria-invalid={!!(submitted && accountError)}
                            />
                        </InputGroup>
                    </GridCol>
                    <GridCol sm={12} md={6}>
                        <InputGroup 
                            label="Mottakers navn"
                            fieldMessage={submitted && nameError ? <ErrorFieldMessage>{nameError}</ErrorFieldMessage> : undefined}
                        >
                            <Input 
                                type="text" 
                                value={name} 
                                onChange={e => {
                                    setName(e.target.value);
                                    if (submitted) validateForm();
                                }}
                                aria-invalid={!!(submitted && nameError)}
                            />
                        </InputGroup>
                    </GridCol>
                </GridRow>

                <GridRow>
                    <GridCol sm={12} md={6}>
                        <InputGroup 
                            label="Beløp"
                            fieldMessage={submitted && amountError ? <ErrorFieldMessage>{amountError}</ErrorFieldMessage> : undefined}
                        >
                            <Input 
                                type="number" 
                                value={amount} 
                                onChange={e => {
                                    setAmount(e.target.value);
                                    if (submitted) validateForm();
                                }}
                                aria-invalid={!!(submitted && amountError)}
                            />
                        </InputGroup>
                    </GridCol>
                </GridRow>

                <GridRow>
                    <GridCol sm={12} md={6}>
                        <PrimaryButton type="submit" className="mt-4">
                            Send betaling
                        </PrimaryButton>
                    </GridCol>
                </GridRow>
            </form>
        </Grid>
    );
};
