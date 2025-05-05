import React from 'react';
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';
import { Heading1, Paragraph } from '@sb1/ffe-core-react';
import { Input, InputGroup, Label } from '@sb1/ffe-form-react';
import { PrimaryButton } from '@sb1/ffe-buttons-react';

export const PaymentForm = () => {
    const [account, setAccount] = React.useState('');
    const [name, setName] = React.useState('');
    const [amount, setAmount] = React.useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert(`Betaling sendt:\nKonto: ${account}\nNavn: ${name}\nBeløp: ${amount}`);
    };

    return (
        <Grid>
            <GridRow>
                <GridCol sm={12}>
                    <Heading1>Ny betaling</Heading1>
                    <Paragraph>Fyll ut detaljene for betalingen.</Paragraph>
                </GridCol>
            </GridRow>

            <form onSubmit={handleSubmit}>
                <GridRow>
                    <GridCol sm={12} md={6}>
                        <InputGroup label="Mottakers kontonummer">
                            <Input 
                                type="text" 
                                value={account} 
                                onChange={e => setAccount(e.target.value)} 
                            />
                        </InputGroup>
                    </GridCol>
                    <GridCol sm={12} md={6}>
                        <InputGroup label="Mottakers navn">
                            <Input 
                                type="text" 
                                value={name} 
                                onChange={e => setName(e.target.value)} 
                            />
                        </InputGroup>
                    </GridCol>
                </GridRow>

                <GridRow>
                    <GridCol sm={12} md={6}>
                        <InputGroup label="Beløp">
                            <Input 
                                type="number" 
                                value={amount} 
                                onChange={e => setAmount(e.target.value)} 
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
