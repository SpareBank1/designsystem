import FileUploader from '@/components/FileUploader';
import { AccountSelector } from '@sb1/ffe-account-selector-react';
import { Account } from '@sb1/ffe-account-selector-react/types/types';
import { ButtonGroup, PrimaryButton, SecondaryButton, TertiaryButton } from '@sb1/ffe-buttons-react';
import { Heading1, Paragraph } from '@sb1/ffe-core-react';
import { Datepicker } from '@sb1/ffe-datepicker-react';
import { Dropdown } from '@sb1/ffe-dropdown-react';

import {
    Checkbox,
    ErrorFieldMessage,
    Input,
    InputGroup,
    InputTextLike,
    PhoneNumber,
    RadioBlock,
    RadioButton,
    RadioButtonInputGroup,
    RadioSwitch,
    TextArea,
    ToggleSwitch,
} from '@sb1/ffe-form-react';
import { formatNumber } from '@sb1/ffe-formatters';
import { GridCol, GridRow } from '@sb1/ffe-grid-react';
import { SuccessMessage } from '@sb1/ffe-message-box-react';
import { SearchableDropdownMultiSelect } from '@sb1/ffe-searchable-dropdown-react';
import { format } from 'date-fns';
import React, { useId, useState } from 'react';

// Eksempelkontodata
const accounts: Account[] = [
    { accountNumber: '1234.56.78910', name: 'Brukskonto', balance: 10000, },
    { accountNumber: '9876.54.32100', name: 'Sparekonto', balance: 5000 },
];

export const PaymentForm = () => {
    const [isAllError, setIsAllError] = useState(false)
    const datepickerLabelId = useId();
    const [fromAccount, setFromAccount] = useState<Account>();
    const [account, setAccount] = useState('');
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [paymentDate, setPaymentDate] = useState(format(new Date(), 'dd.MM.yyyy'));
    const [paymentType, setPaymentType] = useState('vanlig');
    const [ownershipType, setOwnershipType] = useState('');
    const [radioSwitchValue, setRadioSwitchValue] = useState('');
    const [checkedServices, setCheckedServices] = React.useState<string[]>([]);
    const [accentContext, setAccentContext] = useState<boolean>(false);

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
        setFromAccount(undefined);
        setAccount('');
        setName('');
        setAmount('');
        setMessage('');
        setPaymentDate(format(new Date(), 'dd.MM.yyyy'));
        setPaymentType('vanlig');
        setSubmitted(false);
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
                <GridCol sm={12} md={8} lg={6} className='mt-4'>
                    <Heading1>Ny betaling</Heading1>
                    <Paragraph>Fyll ut detaljene for betalingen.</Paragraph>
                </GridCol>
                <GridCol sm={12} md={8} lg={6} className='mt-5'>
                    <ToggleSwitch offText='Default' onText='Accent' checked={accentContext}
                        onChange={(e) => setAccentContext(e.target.checked)} />
                </GridCol>
                <GridCol>
                    {showSuccess && (
                        <SuccessMessage title="Betaling sendt!" className="mt-4">
                            Din betaling er registrert.
                        </SuccessMessage>
                    )}
                </GridCol>
            </GridRow>


            <div className={accentContext ? 'ffe-accent-mode' : ''}
                style={{ backgroundColor: 'var(--ffe-color-background-default)' }}>
                <form onSubmit={handleSubmit} noValidate>
                    <GridRow>
                        <GridCol sm={12} md={8} lg={6}>
                            <InputGroup
                                label="Velg konto"
                                fieldMessage={isAllError ? <ErrorFieldMessage>Du må velge en konto</ErrorFieldMessage> : undefined} >
                                <AccountSelector id="frakonto" accounts={accounts} selectedAccount={fromAccount}
                                    onReset={() => setFromAccount(undefined)}
                                    onAccountSelected={setFromAccount}
                                    aria-invalid={isAllError} />
                            </InputGroup>
                        </GridCol>
                    </GridRow>

                    <GridRow>
                        <GridCol sm={12} md={8} lg={6}>
                            <InputGroup
                                label="Mottakers kontonummer"
                                fieldMessage={isAllError ? <ErrorFieldMessage>Kontonummer må fylles ut</ErrorFieldMessage> : undefined}
                            >
                                <Input
                                    type="text"
                                    value={account}
                                    onChange={e => {
                                        setAccount(e.target.value);
                                        if (submitted) validateForm();
                                    }}
                                    aria-invalid={isAllError}
                                />
                            </InputGroup>
                        </GridCol>
                        <GridCol sm={12} md={8} lg={6}>
                            <InputGroup
                                label="Mottakers navn"
                                fieldMessage={isAllError ? <ErrorFieldMessage>Navn må fylles ut</ErrorFieldMessage> : undefined}
                                tooltip="Navnet på mottakeren av betalingen. Dette kan være en person eller en bedrift."
                            >
                                <Input
                                    type="text"
                                    value={name}
                                    onChange={e => {
                                        setName(e.target.value);
                                        if (submitted) validateForm();
                                    }}
                                    aria-invalid={isAllError}
                                />
                            </InputGroup>
                        </GridCol>
                    </GridRow>

                    <GridRow>
                        <GridCol sm={12} md={4}>
                            <InputGroup
                                label="Beløp"
                                fieldMessage={isAllError || amountError ? <ErrorFieldMessage>Ugyldig</ErrorFieldMessage> : undefined}
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
                            <InputGroup
                                label="Betalingsdato"
                                labelId={datepickerLabelId}
                                fieldMessage={isAllError ? <ErrorFieldMessage>Du må velge en gyldig dato</ErrorFieldMessage> : undefined}
                            >
                                <Datepicker
                                    value={paymentDate}
                                    onChange={setPaymentDate}
                                    locale="nb"
                                    labelId={datepickerLabelId}
                                    aria-invalid={!!isAllError}
                                />
                            </InputGroup>
                        </GridCol>
                    </GridRow>

                    <GridRow>
                        <GridCol sm={12} md={8}>
                            <InputGroup
                                label="Melding til mottaker (valgfritt)"
                                fieldMessage={isAllError ? <ErrorFieldMessage>Melding er ugyldig</ErrorFieldMessage> : undefined}
                            >
                                <TextArea
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                    aria-invalid={!!isAllError}
                                />
                            </InputGroup>
                            <InputGroup
                                label="Velg Kategori (valgfritt)"
                                fieldMessage={isAllError ? <ErrorFieldMessage>Du må velge en kategori</ErrorFieldMessage> : undefined}
                            >
                                <Dropdown
                                    value=""
                                    onChange={() => { }}
                                    aria-label="Velg kategori"
                                    aria-invalid={isAllError}
                                >
                                    <option value="">Velg kategori</option>
                                    <option value="mat">Mat og dagligvarer</option>
                                    <option value="reise">Reise</option>
                                    <option value="underholdning">Underholdning</option>
                                    <option value="annet">Annet</option>
                                </Dropdown>
                            </InputGroup>
                            <InputGroup
                                label="Velg tags"
                                tooltip="Legg til relevante tags for betalingen. Dette kan hjelpe med organisering og søk senere."
                                fieldMessage={isAllError ? <ErrorFieldMessage>Du må velge minst én tag</ErrorFieldMessage> : undefined}
                            >
                                <SearchableDropdownMultiSelect
                                    dropdownList={[
                                        { value: 'husleie', label: 'Husleie' },
                                        { value: 'strøm', label: 'Strøm' },
                                        { value: 'mat', label: 'Mat' },
                                        { value: 'trening', label: 'Trening' },
                                    ]}
                                    onChange={() => { }}
                                    aria-label="Velg tags"
                                    aria-invalid={!!isAllError}
                                    id={''}
                                    dropdownAttributes={['label']}
                                    searchAttributes={['value', 'label']}
                                />
                            </InputGroup>
                        </GridCol>
                    </GridRow>

                    <GridRow>
                        <GridCol sm={12} md={8}>
                            <RadioButtonInputGroup
                                label="Betalingstype"
                                name="paymentType"
                                selectedValue={paymentType}
                                onChange={e => setPaymentType(e.target.value)}
                                inline={true}
                                className="mt-4"
                                fieldMessage={isAllError ? <ErrorFieldMessage>Du må velge betalingstype</ErrorFieldMessage> : undefined}
                            >
                                {innerProps => (
                                    <>
                                        <RadioButton
                                            {...innerProps}
                                            value="straks"
                                            aria-invalid={isAllError}
                                        >
                                            Straksbetaling
                                        </RadioButton>
                                        <RadioButton
                                            {...innerProps}
                                            value="vanlig"
                                            aria-invalid={isAllError}
                                        >
                                            Vanlig betaling
                                        </RadioButton>
                                    </>
                                )}
                            </RadioButtonInputGroup>
                            <RadioButtonInputGroup
                                label="Hvem eier bilen du skal forsikre?"
                                name="owner"
                                selectedValue={ownershipType}
                                fieldMessage={isAllError ? <ErrorFieldMessage>Du må velge en eier</ErrorFieldMessage> : undefined}
                            >
                                {inputProps => (
                                    <>
                                        <RadioBlock
                                            {...inputProps}
                                            label="Ektefelle, samboer eller registrert partner"
                                            value="partner"
                                            onClick={() => setOwnershipType('partner')}
                                            aria-invalid={isAllError}
                                        >
                                            Da må ektefelle, samboer eller registrert partner
                                            skrive inn detaljene sine under.
                                        </RadioBlock>
                                        <RadioBlock
                                            {...inputProps}
                                            label="Du"
                                            value="you"
                                            onClick={() => setOwnershipType('you')}
                                            aria-invalid={isAllError}
                                        >
                                            Da må du skrive inn detaljene dine under.
                                        </RadioBlock>
                                        <RadioBlock
                                            {...inputProps}
                                            label="Leasingselskap"
                                            value="leasing-company"
                                            onClick={() => setOwnershipType('leasing-company')}
                                            aria-invalid={isAllError}
                                        >
                                            Da må leasingselskapet gi deg noen detaljer som du
                                            må skrive inn under.
                                        </RadioBlock>
                                    </>
                                )}
                            </RadioButtonInputGroup>
                            <RadioButtonInputGroup
                                label="Vil du vi skal kontakte deg angående denne betalingen?"
                                name="radio-switch-demo"
                                onChange={e => setRadioSwitchValue(e.target.value)}
                                selectedValue={radioSwitchValue}
                            >
                                {inputProps => <RadioSwitch {...inputProps} aria-invalid={isAllError} leftLabel={'Ja'} leftValue={'ja'} rightLabel={'Nei'} rightValue={'nei'} />}
                            </RadioButtonInputGroup>
                            <InputGroup
                                label="Velg tilleggstjenester"
                                tooltip="Du kan velge en eller flere tilleggstjenester for betalingen."
                                fieldMessage={isAllError ? <ErrorFieldMessage>Du må velge minst én tilleggstjeneste</ErrorFieldMessage> : undefined}
                            >
                                {(() => {
                                    // Flytt state ut av render-funksjonen for å unngå reinitialisering
                                    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
                                        const { value, checked } = event.target;
                                        setCheckedServices(prev =>
                                            checked
                                                ? [...prev, value]
                                                : prev.filter(v => v !== value)
                                        );
                                    };

                                    return (
                                        <>
                                            <Checkbox
                                                value="varsling"
                                                checked={checkedServices.includes('varsling')}
                                                onChange={handleCheckboxChange}
                                                aria-invalid={isAllError}
                                            >
                                                Motta varsling ved gjennomført betaling
                                            </Checkbox>
                                            <Checkbox
                                                value="kvittering"
                                                checked={checkedServices.includes('kvittering')}
                                                onChange={handleCheckboxChange}
                                                aria-invalid={isAllError}
                                            >
                                                Send kvittering på e-post
                                            </Checkbox>
                                            <Checkbox
                                                value="automatisk"
                                                checked={checkedServices.includes('automatisk')}
                                                onChange={handleCheckboxChange}
                                                aria-invalid={isAllError}
                                            >
                                                Gjenta denne betalingen automatisk
                                            </Checkbox>
                                        </>
                                    );
                                })()}
                            </InputGroup>
                        </GridCol>
                    </GridRow>

                    <GridRow>
                        <GridCol sm={12} md={8} lg={6}>
                            <PhoneNumber
                                countryCodeAndNumberFieldMessage={isAllError ? "Feil landskode og telefonnummer" : undefined}
                                countryCodeFieldMessage={isAllError ? "Feil landskode" : undefined}
                                isMobileNumber
                                locale="nb"
                                numberFieldMessage={isAllError ? "Feil telefonnummer" : undefined}
                                numberInputProps={{}}
                            />
                            <Paragraph className='mt-4'>
                                Jeg er{' '}
                                <InputTextLike
                                    ariaLabel="Skriv inn alder"
                                    style={{
                                        width: 47
                                    }}
                                    aria-invalid={isAllError}
                                />
                                {' '}år gammel
                            </Paragraph>
                        </GridCol>
                        <GridCol lg={12}>
                            <FileUploader />
                        </GridCol>
                    </GridRow>

                    <GridRow>
                        <GridCol>
                            <ButtonGroup className="mt-4" ariaLabel="Betalingshandlinger">
                                <PrimaryButton type="submit">
                                    Send betaling
                                </PrimaryButton>
                                <SecondaryButton type="button" onClick={() => setIsAllError(true)}>
                                    Trigg alle feil
                                </SecondaryButton>
                                <TertiaryButton type="button" onClick={() => {
                                    resetForm();
                                    setIsAllError(false);
                                }}>
                                    Nullstill skjema
                                </TertiaryButton>
                            </ButtonGroup>
                        </GridCol>
                    </GridRow>
                </form>
            </div>
        </>
    );
};
