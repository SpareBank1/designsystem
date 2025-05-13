import React, { useState, useId } from 'react';
import { GridRow, GridCol } from '@sb1/ffe-grid-react';
import { Heading1, Paragraph } from '@sb1/ffe-core-react';
import {
    Input,
    InputGroup,
    ErrorFieldMessage,
    TextArea,
    RadioButtonInputGroup,
    RadioButton,
} from '@sb1/ffe-form-react';
import { Dropdown } from '@sb1/ffe-dropdown-react';
import { PrimaryButton, SecondaryButton, ButtonGroup } from '@sb1/ffe-buttons-react';
import { Datepicker } from '@sb1/ffe-datepicker-react';
import { SuccessMessage } from '@sb1/ffe-message-box-react';
import { format } from 'date-fns';
import { formatNumber } from '@sb1/ffe-formatters';

// Eksempelkontodata
const accounts = [
    { value: '1234.56.78910', label: 'Brukskonto - 1234.56.78910' },
    { value: '9876.54.32100', label: 'Sparekonto - 9876.54.32100' },
];

export const PaymentForm = () => {
    const datepickerLabelId = useId();
    const [fromAccount, setFromAccount] = useState('');
    const [account, setAccount] = useState('');
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [paymentDate, setPaymentDate] = useState(format(new Date(), 'dd.MM.yyyy'));
    const [paymentType, setPaymentType] = useState('vanlig');

    const [fromAccountError, setFromAccountError] = useState<string | undefined>(undefined);
    const [accountError, setAccountError] = useState<string | undefined>(undefined);
    const [nameError, setNameError] = useState<string | undefined>(undefined);
    const [amountError, setAmountError] = useState<string | undefined>(undefined);
    const [submitted, setSubmitted] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const parseAmount = (value: string): number | null => {
        if (!value) return null;
        const cleanedValue = value.replace(/\s/g, '').replace(',', '.');
        const number = parseFloat(cleanedValue);
        return isNaN(number) ? null : number;
    };

    const validateForm = (): boolean => {
        let isValid = true;
        setShowSuccess(false);

        if (!fromAccount) {
            setFromAccountError('Du må velge en konto å betale fra');
            isValid = false;
        } else {
            setFromAccountError(undefined);
        }

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

        const numericAmount = parseAmount(amount);
        if (numericAmount === null || numericAmount <= 0) {
            setAmountError('Beløp må være et gyldig positivt tall');
            isValid = false;
        } else {
            setAmountError(undefined);
        }
        return isValid;
    }

    const handleAmountBlur = () => {
        const numericValue = parseAmount(amount);
        if (numericValue !== null) {
            setAmount(String(formatNumber(numericValue, { locale: 'nb', decimals: 2 })));
        } else if (amount.trim() !== '' && amount.trim() !== '-') {
            // Beholder ugyldig input for validering, eller kan tømmes: setAmount('');
        }
    };

    const resetForm = () => {
        setFromAccount('');
        setAccount('');
        setName('');
        setAmount('');
        setMessage('');
        setPaymentDate(format(new Date(), 'dd.MM.yyyy'));
        setPaymentType('vanlig');
        setSubmitted(false);
        setFromAccountError(undefined);
        setAccountError(undefined);
        setNameError(undefined);
        setAmountError(undefined);
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setSubmitted(true);
        setShowSuccess(false);

        if (validateForm()) {
            const numericAmount = parseAmount(amount);
            console.log('Betaling sendt:', { fromAccount, account, name, amount: numericAmount, paymentDate, message, paymentType });
            setShowSuccess(true);
            resetForm();
        }
    };

    return (
        <>
            <GridRow>
                <GridCol sm={12} md={8} lg={6}>
                    <Heading1>Ny betaling</Heading1>
                    <Paragraph>Fyll ut detaljene for betalingen.</Paragraph>

                    {showSuccess && (
                        <SuccessMessage title="Betaling sendt!" className="mt-4">
                            Din betaling er registrert.
                        </SuccessMessage>
                    )}
                </GridCol>
            </GridRow>

            <form onSubmit={handleSubmit} noValidate>
                 <GridRow>
                    <GridCol sm={12} md={8} lg={6}>
                        <InputGroup
                            label="Fra konto"
                            fieldMessage={submitted && fromAccountError ? <ErrorFieldMessage>{fromAccountError}</ErrorFieldMessage> : undefined}
                        >
                            <Dropdown
                                value={fromAccount}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                    setFromAccount(e.target.value);
                                    if (submitted) validateForm();
                                }}
                                aria-invalid={!!(submitted && fromAccountError)}
                            >
                                <option value="" disabled>Velg konto</option>
                                {accounts.map(acc => (
                                    <option key={acc.value} value={acc.value}>{acc.label}</option>
                                ))}
                            </Dropdown>
                        </InputGroup>
                    </GridCol>
                </GridRow>

                <GridRow>
                    <GridCol sm={12} md={8} lg={6}>
                        <InputGroup
                            label="Mottakers kontonummer"
                            fieldMessage={submitted && accountError ? <ErrorFieldMessage>{accountError}</ErrorFieldMessage> : undefined}
                        >
                            <Input
                                type="text"
                                value={account}
                                onChange={e => {
                                    setAccount(e.target.value);
                                    if (submitted) validateForm();
                                }}
                                aria-invalid={!!(submitted && accountError)}
                            />
                        </InputGroup>
                    </GridCol>
                     <GridCol sm={12} md={8} lg={6}>
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
                    <GridCol sm={12} md={4} lg={3}>
                         <InputGroup
                            label="Beløp"
                            fieldMessage={submitted && amountError ? <ErrorFieldMessage>{amountError}</ErrorFieldMessage> : undefined}
                        >
                            <Input
                                type="text"
                                inputMode="decimal"
                                value={amount}
                                onChange={e => {
                                    setAmount(e.target.value);
                                    if (submitted) validateForm();
                                }}
                                onBlur={handleAmountBlur}
                                aria-invalid={!!(submitted && amountError)}
                            />
                        </InputGroup>
                    </GridCol>
                     <GridCol sm={12} md={4} lg={3}>
                        <InputGroup label="Betalingsdato" labelId={datepickerLabelId}>
                           <Datepicker
                                value={paymentDate}
                                onChange={setPaymentDate}
                                locale="nb"
                                labelId={datepickerLabelId}
                            />
                        </InputGroup>
                    </GridCol>
                </GridRow>

                <GridRow>
                    <GridCol sm={12} md={8} lg={6}>
                        <InputGroup label="Melding til mottaker (valgfritt)">
                            <TextArea
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                            />
                        </InputGroup>
                    </GridCol>
                </GridRow>

                <GridRow>
                    <GridCol sm={12} md={8} lg={6}>
                        <RadioButtonInputGroup
                            label="Betalingstype"
                            name="paymentType"
                            selectedValue={paymentType}
                            onChange={e => setPaymentType(e.target.value)}
                            inline={true}
                            className="mt-4"
                        >
                            {innerProps => (
                                <>
                                    <RadioButton {...innerProps} value="straks">
                                        Straksbetaling
                                    </RadioButton>
                                    <RadioButton {...innerProps} value="vanlig">
                                        Vanlig betaling
                                    </RadioButton>
                                </>
                            )}
                        </RadioButtonInputGroup>
                    </GridCol>
                </GridRow>

                <GridRow>
                    <GridCol sm={12} md={8} lg={6}>
                        <ButtonGroup className="mt-4" ariaLabel="Betalingshandlinger">
                            <PrimaryButton type="submit">
                                Send betaling
                            </PrimaryButton>
                            <SecondaryButton type="button" onClick={resetForm}>
                                Avbryt
                            </SecondaryButton>
                        </ButtonGroup>
                    </GridCol>
                </GridRow>
            </form>
        </>
    );
};
