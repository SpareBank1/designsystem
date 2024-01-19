import React from 'react';
import { render, fireEvent, screen, wait } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AccountSelector } from './AccountSelector';

describe('AccountSelector', () => {
    beforeAll(() => {
        /*
         * Mocking offsetHeight and offsetWidth makes AutoSizer from react-virtualized work as expected.
         * Based on https://github.com/bvaughn/react-virtualized/issues/493#issuecomment-640084107.
         */
        jest.spyOn(
            HTMLElement.prototype,
            'offsetHeight',
            'get',
        ).mockReturnValue(50);
        jest.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockReturnValue(
            50,
        );
    });

    afterAll(() => {
        jest.restoreAllMocks();
    });

    const accounts = [
        {
            accountNumber: '1234 56 789101',
            name: 'Brukskonto',
            currencyCode: 'NOK',
            balance: 1337,
        },
        {
            accountNumber: '1234 56 789102',
            name: 'Jeg er en konto',
            currencyCode: 'NOK',
            balance: 13337,
        },
        {
            accountNumber: '2234 56 789102',
            name: 'Sparekonto',
            currencyCode: 'NOK',
            balance: 109236,
        },
        {
            accountNumber: '1253 47 789102',
            name: 'Gris',
            currencyCode: 'NOK',
            balance: 0,
        },
    ];

    let selectedAccount;

    const onAccountSelected = value => {
        selectedAccount = value;
    };

    const onReset = () => {
        selectedAccount = undefined;
    };

    beforeEach(() => {
        selectedAccount = undefined;
    });

    it('should show filtered result', () => {
        render(
            <AccountSelector
                id="id"
                labelId="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={onAccountSelected}
                onReset={onReset}
                ariaInvalid={false}
            />,
        );

        const input = screen.getByRole('combobox');

        fireEvent.click(input);

        expect(screen.getByText('Brukskonto')).toBeInTheDocument();
        expect(screen.getByText('1234 56 789101')).toBeInTheDocument();
        expect(screen.getByText('Jeg er en konto')).toBeInTheDocument();
        expect(screen.getByText('1234 56 789102')).toBeInTheDocument();
        expect(screen.getByText('Sparekonto')).toBeInTheDocument();
        expect(screen.getByText('2234 56 789102')).toBeInTheDocument();
        expect(screen.getByText('Gris')).toBeInTheDocument();
        expect(screen.getByText('1253 47 789102')).toBeInTheDocument();

        fireEvent.change(input, { target: { value: 'konto' } });

        expect(screen.getByText('Brukskonto')).toBeInTheDocument();
        expect(screen.getByText('1234 56 789101')).toBeInTheDocument();
        expect(screen.getByText('Jeg er en konto')).toBeInTheDocument();
        expect(screen.getByText('1234 56 789102')).toBeInTheDocument();
        expect(screen.getByText('Sparekonto')).toBeInTheDocument();
        expect(screen.getByText('2234 56 789102')).toBeInTheDocument();
        expect(screen.queryByText('Gris')).toBeNull();
        expect(screen.queryByText('1253 47 789102')).toBeNull();
    });

    it('should ignore spaces, periods and case when filtering', () => {
        render(
            <AccountSelector
                id="id"
                labelId="labelId"
                accounts={accounts.concat([
                    {
                        accountNumber: '3485.42.80352',
                        name: 'Hopps.ann heisann',
                        currencyCode: 'NOK',
                        balance: 7488,
                    },
                ])}
                locale="nb"
                onAccountSelected={onAccountSelected}
                onReset={onReset}
                ariaInvalid={false}
            />,
        );

        const input = screen.getByRole('combobox');

        fireEvent.click(input);

        expect(screen.getByText('Brukskonto')).toBeInTheDocument();
        expect(screen.getByText('1234 56 789101')).toBeInTheDocument();
        expect(screen.getByText('Jeg er en konto')).toBeInTheDocument();
        expect(screen.getByText('1234 56 789102')).toBeInTheDocument();
        expect(screen.getByText('Sparekonto')).toBeInTheDocument();
        expect(screen.getByText('2234 56 789102')).toBeInTheDocument();
        expect(screen.getByText('Gris')).toBeInTheDocument();
        expect(screen.getByText('1253 47 789102')).toBeInTheDocument();
        expect(screen.getByText('Hopps.ann heisann')).toBeInTheDocument();
        expect(screen.getByText('3485.42.80352')).toBeInTheDocument();

        fireEvent.change(input, { target: { value: 'JeG.eRe.n Kont o' } });

        expect(screen.queryByText('Brukskonto')).toBeNull();
        expect(screen.queryByText('1234 56 789101')).toBeNull();
        expect(screen.getByText('Jeg er en konto')).toBeInTheDocument();
        expect(screen.getByText('1234 56 789102')).toBeInTheDocument();
        expect(screen.queryByText('Sparekonto')).toBeNull();
        expect(screen.queryByText('2234 56 789102')).toBeNull();
        expect(screen.queryByText('Gris')).toBeNull();
        expect(screen.queryByText('1253 47 789102')).toBeNull();
        expect(screen.queryByText('Hopps.ann heisann')).toBeNull();
        expect(screen.queryByText('3485.42.80352')).toBeNull();

        fireEvent.change(input, { target: { value: '3485 4280352' } });

        expect(screen.queryByText('Brukskonto')).toBeNull();
        expect(screen.queryByText('1234 56 789101')).toBeNull();
        expect(screen.queryByText('Jeg er en konto')).toBeNull();
        expect(screen.queryByText('1234 56 789102')).toBeNull();
        expect(screen.queryByText('Sparekonto')).toBeNull();
        expect(screen.queryByText('2234 56 789102')).toBeNull();
        expect(screen.queryByText('Gris')).toBeNull();
        expect(screen.queryByText('1253 47 789102')).toBeNull();
        expect(screen.getByText('Hopps.ann heisann')).toBeInTheDocument();
        expect(screen.getByText('3485.42.80352')).toBeInTheDocument();
    });

    it('should display account info after selection', () => {
        const { rerender } = render(
            <AccountSelector
                id="id"
                labelId="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={onAccountSelected}
                onReset={onReset}
                selectedAccount={selectedAccount}
                ariaInvalid={false}
            />,
        );
        expect(screen.queryByText('1234 56 789102')).toBeNull();

        const input = screen.getByRole('combobox');

        fireEvent.click(input);
        fireEvent.click(screen.getByText('Jeg er en konto'));

        rerender(
            <AccountSelector
                id="id"
                labelId="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={onAccountSelected}
                onReset={onReset}
                selectedAccount={selectedAccount}
                ariaInvalid={false}
            />,
        );

        expect(screen.getByText('1234 56 789102')).toBeInTheDocument();
    });

    it('should display balance when specified', () => {
        const { rerender } = render(
            <AccountSelector
                id="id"
                labelId="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={onAccountSelected}
                onReset={onReset}
                selectedAccount={selectedAccount}
                showBalance={true}
                ariaInvalid={false}
            />,
        );

        const input = screen.getByRole('combobox');

        fireEvent.click(input);
        expect(screen.getByText('1 337,00 kr')).toBeInTheDocument();
        fireEvent.click(screen.getByText('Brukskonto'));

        rerender(
            <AccountSelector
                id="id"
                labelId="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={onAccountSelected}
                onReset={onReset}
                selectedAccount={selectedAccount}
                showBalance={true}
                ariaInvalid={false}
            />,
        );

        expect(screen.getByText('1 337,00 kr')).toBeInTheDocument();
        expect(screen.getByText('1234 56 789101')).toBeInTheDocument();

        rerender(
            <AccountSelector
                id="id"
                labelId="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={onAccountSelected}
                onReset={onReset}
                selectedAccount={selectedAccount}
                showBalance={false}
                ariaInvalid={false}
            />,
        );

        expect(screen.queryByText('1 337,00 kr')).toBeNull();
        expect(screen.getByText('1234 56 789101')).toBeInTheDocument();

        fireEvent.click(input);
        expect(screen.queryByText('1 337,00 kr')).toBeNull();
    });

    it('should allow selecting custom account when specified', () => {
        const { rerender } = render(
            <AccountSelector
                id="id"
                labelId="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={onAccountSelected}
                onReset={onReset}
                selectedAccount={selectedAccount}
                allowCustomAccount={true}
                ariaInvalid={false}
            />,
        );

        const input = screen.getByRole('combobox');

        fireEvent.click(input);

        expect(screen.getByText('Brukskonto')).toBeInTheDocument();
        expect(screen.queryByText('BrukskoABC')).toBeNull();

        fireEvent.change(input, { target: { value: 'BrukskoABC' } });

        expect(screen.queryByText('Brukskonto')).toBeNull();
        expect(screen.getByText('BrukskoABC')).toBeInTheDocument();

        fireEvent.click(screen.getByText('BrukskoABC'));

        rerender(
            <AccountSelector
                id="id"
                labelId="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={onAccountSelected}
                onReset={onReset}
                selectedAccount={selectedAccount}
                allowCustomAccount={true}
                ariaInvalid={false}
            />,
        );

        expect(screen.getByText('BrukskoABC')).toBeInTheDocument();
    });

    it('should allow passing custom selected account when specified', () => {
        render(
            <AccountSelector
                id="id"
                labelId="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={onAccountSelected}
                onReset={onReset}
                selectedAccount={{
                    accountNumber: '2234 56 789101',
                    name: 'Brukskonto 9',
                    currencyCode: 'NOK',
                    balance: 133,
                }}
                allowCustomAccount={true}
                ariaInvalid={false}
            />,
        );

        const input = screen.getByRole('combobox');

        expect(input.getAttribute('value')).toEqual('Brukskonto 9');
        expect(screen.getByText('2234 56 789101')).toBeInTheDocument();
    });

    it('should not show custom account when some account matches search', () => {
        render(
            <AccountSelector
                id="id"
                labelId="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={onAccountSelected}
                onReset={onReset}
                selectedAccount={selectedAccount}
                allowCustomAccount={true}
                ariaInvalid={false}
            />,
        );

        const input = screen.getByRole('combobox');

        fireEvent.click(input);

        expect(screen.getByText('Brukskonto')).toBeInTheDocument();
        expect(screen.queryByText('BrukskoABC')).toBeNull();

        fireEvent.change(input, { target: { value: 'Bruksko' } });

        expect(screen.getAllByText('Bruksko', { exact: false })).toHaveLength(
            1,
        );
    });

    it('should be able to render custom list items', () => {
        const CustomListItemBody = ({
            // eslint-disable-next-line react/prop-types
            item: { accountNumber, name, balance, currencyCode },
        }) => (
            <div>
                <span>{accountNumber}</span>
                <span>FOR et navn! {name}</span>
                <span>Litt av en saldo! {balance}</span>
                <span>{currencyCode}</span>
            </div>
        );

        render(
            <AccountSelector
                id="id"
                labelId="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={onAccountSelected}
                onReset={onReset}
                listElementBody={CustomListItemBody}
                ariaInvalid={false}
            />,
        );

        const input = screen.getByRole('combobox');

        fireEvent.click(input);

        expect(
            screen.getByText('FOR et navn! Jeg er en konto'),
        ).toBeInTheDocument();
        expect(screen.getByText('Litt av en saldo! 13337')).toBeInTheDocument();
    });

    it('should format input field while typing if value only contains digits and/or spaces', () => {
        render(
            <AccountSelector
                id="id"
                labelId="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={onAccountSelected}
                onReset={onReset}
                ariaInvalid={false}
            />,
        );

        const input = screen.getByRole('combobox');

        fireEvent.change(input, { target: { value: 'ab1de' } });
        expect(input.getAttribute('value')).toEqual('ab1de');

        fireEvent.change(input, { target: { value: 'ab1de ' } });
        expect(input.getAttribute('value')).toEqual('ab1de ');

        fireEvent.change(input, { target: { value: '1234.' } });
        expect(input.getAttribute('value')).toEqual('1234.');

        fireEvent.change(input, { target: { value: '1234.5' } });
        expect(input.getAttribute('value')).toEqual('1234.5');

        fireEvent.change(input, { target: { value: '4321' } });
        expect(input.getAttribute('value')).toEqual('4321');

        fireEvent.change(input, { target: { value: '54321' } });
        expect(input.getAttribute('value')).toEqual('5432 1');

        fireEvent.change(input, { target: { value: '5432 1 ' } });
        expect(input.getAttribute('value')).toEqual('5432 1');

        fireEvent.change(input, { target: { value: '543216789101' } });
        expect(input.getAttribute('value')).toEqual('5432 16 789101');
    });

    it('should not format input field when formatAccountNumber is false', () => {
        render(
            <AccountSelector
                id="id"
                labelId="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={onAccountSelected}
                onReset={onReset}
                formatAccountNumber={false}
                ariaInvalid={false}
            />,
        );

        const input = screen.getByRole('combobox');

        fireEvent.change(input, { target: { value: '54321' } });
        expect(input.getAttribute('value')).toEqual('54321');

        fireEvent.change(input, { target: { value: '543216789101' } });
        expect(input.getAttribute('value')).toEqual('543216789101');
    });

    it('should allow changing selectedAccount even if selectedAccount is defined on first render (initial value)', () => {
        selectedAccount = accounts[2];

        const { rerender } = render(
            <AccountSelector
                id="id"
                labelId="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={onAccountSelected}
                onReset={onReset}
                selectedAccount={selectedAccount}
                ariaInvalid={false}
            />,
        );

        const input = screen.getByRole('combobox');

        expect(screen.getByText('2234 56 789102')).toBeInTheDocument();
        expect(screen.queryByText('1234 56 789102')).toBeNull();
        expect(input.value).toBe('Sparekonto');

        fireEvent.click(input);
        fireEvent.click(screen.getByText('Jeg er en konto'));

        rerender(
            <AccountSelector
                id="id"
                labelId="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={onAccountSelected}
                onReset={onReset}
                selectedAccount={selectedAccount}
                ariaInvalid={false}
            />,
        );

        expect(screen.queryByText('2234 56 789102')).toBeNull();
        expect(screen.getByText('1234 56 789102')).toBeInTheDocument();
        expect(input.value).toBe('Jeg er en konto');
    });

    it('should apply the given className prop', () => {
        const component = shallow(
            <AccountSelector
                className="testClass"
                id="id"
                labelId="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={onAccountSelected}
                onReset={onReset}
                selectedAccount={selectedAccount}
                ariaInvalid={false}
            />,
        );

        expect(component.hasClass('testClass')).toBe(true);
    });

    it('Should not show account details when hideAccountDetails is set to false', async () => {
        const component = render(
            <AccountSelector
                className="testClass"
                id="id"
                labelId="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={onAccountSelected}
                onReset={onReset}
                selectedAccount={accounts[0]}
                ariaInvalid={false}
                hideAccountDetails={true}
            />,
        );

        expect(component.queryByText(accounts[0].accountNumber)).toBeNull();
    });

    it('should set a11y status message briefly on element change', async () => {
        render(
            <div>
                <button>Knapp</button>
                <AccountSelector
                    id="id"
                    labelId="labelId"
                    accounts={accounts}
                    locale="nb"
                    onAccountSelected={onAccountSelected}
                    onReset={onReset}
                    selectedAccount={selectedAccount}
                    ariaInvalid={false}
                />
            </div>,
        );

        const input = await screen.findByRole('combobox');

        userEvent.click(input);
        userEvent.type(input, '{arrowdown}');
        userEvent.type(input, '{enter}');

        const a11yStatusMessage = await screen.findByRole('status');

        await wait(() => {
            expect(a11yStatusMessage).toHaveTextContent(
                'Element Brukskonto er valgt.',
            );
        });
        await wait(() => {
            expect(a11yStatusMessage).toHaveTextContent('');
        });

        userEvent.clear(input);
        userEvent.click(screen.getByText('Knapp'));

        await wait(() => {
            expect(a11yStatusMessage).toHaveTextContent(
                'Valgt element har blitt fjernet.',
            );
        });
        await wait(() => {
            expect(a11yStatusMessage).toHaveTextContent('');
        });
    });

    it('should set a11y status message briefly on state change', async () => {
        render(
            <div>
                <button>Knapp</button>
                <AccountSelector
                    id="id"
                    labelId="labelId"
                    accounts={accounts}
                    locale="nb"
                    onAccountSelected={onAccountSelected}
                    onReset={onReset}
                    selectedAccount={selectedAccount}
                    ariaInvalid={false}
                />
            </div>,
        );

        const input = await screen.findByRole('combobox');

        userEvent.click(input);

        const a11yStatusMessage = await screen.findByRole('status');

        await wait(() => {
            expect(a11yStatusMessage).toHaveTextContent(
                '4 resultater er tilgjengelig, bruk opp- og nedpiltastene for å navigere. Trykk Enter for å velge.',
            );
        });
        await wait(() => {
            expect(a11yStatusMessage).toHaveTextContent('');
        });

        userEvent.type(input, 'spare');

        await wait(() => {
            expect(a11yStatusMessage).toHaveTextContent(
                '1 resultat er tilgjengelig, bruk opp- og nedpiltastene for å navigere. Trykk Enter for å velge.',
            );
        });
        await wait(() => {
            expect(a11yStatusMessage).toHaveTextContent('');
        });

        userEvent.clear(input);
        userEvent.type(input, 'ingen');

        await wait(() => {
            expect(a11yStatusMessage).toHaveTextContent(
                'Ingen resultater er tilgjengelige.',
            );
        });
        await wait(() => {
            expect(a11yStatusMessage).toHaveTextContent('');
        });

        userEvent.click(screen.getByText('Knapp'));
        expect(a11yStatusMessage).toHaveTextContent('');
    });
});
