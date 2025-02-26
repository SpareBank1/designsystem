import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Account, Locale } from '../types';
import { AccountSelector } from './AccountSelector';

describe('<AccountSelector/>', () => {
    const accounts: Account[] = [
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
    ] as const;

    let selectedAccount: Account | undefined;

    const handleAccountSelected = (value: Account) => {
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
                labelledById="labelId"
                accounts={accounts}
                onAccountSelected={handleAccountSelected}
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
                labelledById="labelId"
                accounts={accounts.concat([
                    {
                        accountNumber: '3485.42.80352',
                        name: 'Hopps.ann heisann',
                        currencyCode: 'NOK',
                        balance: 7488,
                    },
                ])}
                locale="nb"
                onAccountSelected={a => console.log(a.accountNumber)}
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
                labelledById="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={handleAccountSelected}
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
                labelledById="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={handleAccountSelected}
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
                labelledById="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={handleAccountSelected}
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
                labelledById="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={handleAccountSelected}
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
                labelledById="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={handleAccountSelected}
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
                labelledById="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={handleAccountSelected}
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
                labelledById="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={handleAccountSelected}
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
                labelledById="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={handleAccountSelected}
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
                labelledById="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={handleAccountSelected}
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
        const CustomListItemBody: React.FC<{
            item: Account;
            locale: Locale;
            isHighlighted: boolean;
            dropdownAttributes: (keyof Account)[];
        }> = ({ item: { accountNumber, name, balance, currencyCode } }) => (
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
                labelledById="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={handleAccountSelected}
                onReset={onReset}
                optionBody={CustomListItemBody}
                ariaInvalid={false}
            />,
        );

        const input = screen.getByRole('combobox');

        fireEvent.click(input);

        expect(
            screen.getByText('FOR et navn! Jeg er en konto'),
        ).toBeInTheDocument();
        expect(screen.getByText('Litt av en saldo! 1337')).toBeInTheDocument();
    });

    it('should format input field while typing if value only contains digits and/or spaces', () => {
        render(
            <AccountSelector
                id="id"
                labelledById="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={handleAccountSelected}
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
                labelledById="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={handleAccountSelected}
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
                labelledById="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={handleAccountSelected}
                onReset={onReset}
                selectedAccount={selectedAccount}
                ariaInvalid={false}
            />,
        );

        const input = screen.getByRole('combobox');

        expect(screen.getByText('2234 56 789102')).toBeInTheDocument();
        expect(screen.queryByText('1234 56 789102')).toBeNull();
        expect(input.getAttribute('value')).toBe('Sparekonto');

        fireEvent.click(input);
        fireEvent.click(screen.getByText('Jeg er en konto'));

        rerender(
            <AccountSelector
                id="id"
                labelledById="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={handleAccountSelected}
                onReset={onReset}
                selectedAccount={selectedAccount}
                ariaInvalid={false}
            />,
        );

        expect(screen.queryByText('2234 56 789102')).toBeNull();
        expect(screen.getByText('1234 56 789102')).toBeInTheDocument();
        expect(input.getAttribute('value')).toBe('Jeg er en konto');
    });

    it('Should not show account details when hideAccountDetails is set to false', async () => {
        const component = render(
            <AccountSelector
                className="testClass"
                id="id"
                labelledById="labelId"
                accounts={accounts}
                locale="nb"
                onAccountSelected={handleAccountSelected}
                onReset={onReset}
                selectedAccount={accounts[0]}
                ariaInvalid={false}
                hideAccountDetails={true}
            />,
        );

        expect(component.queryByText(accounts[0].accountNumber)).toBeNull();
    });

    it('should set a11y status message briefly on element change', async () => {
        const user = userEvent.setup({ delay: null });
        jest.useFakeTimers();

        render(
            <div>
                <button>Knapp</button>
                <AccountSelector
                    id="id"
                    labelledById="labelId"
                    accounts={accounts}
                    locale="nb"
                    onAccountSelected={handleAccountSelected}
                    onReset={onReset}
                    selectedAccount={selectedAccount}
                    ariaInvalid={false}
                />
            </div>,
        );

        const input = await screen.findByRole('combobox');

        await user.click(input);
        await user.type(input, '{arrowdown}');
        await user.type(input, '{enter}');

        const a11yStatusMessage = await screen.findByRole('status');

        await waitFor(() => {
            expect(a11yStatusMessage).toHaveTextContent(
                'Element Brukskonto er valgt.',
            );
        });
        await waitFor(() => {
            expect(a11yStatusMessage).toHaveTextContent('');
        });

        await user.clear(input);
        await user.click(screen.getByText('Knapp'));

        await waitFor(() => {
            expect(a11yStatusMessage).toHaveTextContent(
                'Valgt element har blitt fjernet.',
            );
        });
        await waitFor(() => {
            expect(a11yStatusMessage).toHaveTextContent('');
        });
        jest.useRealTimers();
    });

    it('should set a11y status message briefly on state change', async () => {
        const user = userEvent.setup({ delay: null });
        jest.useFakeTimers();

        render(
            <div>
                <button>Knapp</button>
                <AccountSelector
                    id="id"
                    labelledById="labelId"
                    accounts={accounts}
                    locale="nb"
                    onAccountSelected={handleAccountSelected}
                    onReset={onReset}
                    selectedAccount={selectedAccount}
                    ariaInvalid={false}
                />
            </div>,
        );

        const input = await screen.findByRole('combobox');

        await user.click(input);

        const a11yStatusMessage = await screen.findByRole('status');

        await waitFor(() => {
            expect(a11yStatusMessage).toHaveTextContent(
                '4 resultater er tilgjengelig, bruk opp- og nedpiltastene for å navigere. Trykk Enter for å velge.',
            );
        });
        await waitFor(() => {
            expect(a11yStatusMessage).toHaveTextContent('');
        });

        await user.type(input, 'spare');

        await waitFor(() => {
            expect(a11yStatusMessage).toHaveTextContent(
                '1 resultat er tilgjengelig, bruk opp- og nedpiltastene for å navigere. Trykk Enter for å velge.',
            );
        });
        await waitFor(() => {
            expect(a11yStatusMessage).toHaveTextContent('');
        });

        await user.clear(input);
        await user.type(input, 'ingen');

        await waitFor(() => {
            expect(a11yStatusMessage).toHaveTextContent(
                'Ingen resultater er tilgjengelige.',
            );
        });
        await waitFor(() => {
            expect(a11yStatusMessage).toHaveTextContent('');
        });

        await user.click(screen.getByText('Knapp'));

        expect(a11yStatusMessage).toHaveTextContent('');
        jest.useRealTimers();
    });

    it('allows passing a custom display attribute', async () => {
        const handleAccountSelectedMock = jest.fn();

        render(
            <AccountSelector
                id="id"
                labelledById="labelId"
                accounts={accounts}
                displayAttribute={'accountNumber'}
                locale="nb"
                onAccountSelected={handleAccountSelectedMock}
                onReset={onReset}
                selectedAccount={selectedAccount}
                ariaInvalid={false}
            />,
        );

        const input = screen.getByRole('combobox');

        expect(input.getAttribute('value')).toBe('');
        fireEvent.change(input, { target: { value: 'Gr' } });

        fireEvent.click(screen.getByText('Gris'));

        expect(handleAccountSelectedMock).toHaveBeenCalledTimes(1);
        expect(handleAccountSelectedMock).toHaveBeenCalledWith(accounts[3]);
        expect(input.getAttribute('value')).toEqual('1253 47 789102');
    });

    it('passing displayAttribute should make it searchable', async () => {
        type FunkyAccounts = Account & { funkySmell: string };
        const funkyAccounts: FunkyAccounts[] = accounts.map((account, idx) => ({
            ...account,
            funkySmell: `Smells like money${idx}`,
        }));

        render(
            <AccountSelector<FunkyAccounts>
                id="id"
                labelledById="labelId"
                accounts={funkyAccounts}
                displayAttribute={'funkySmell'}
                locale="nb"
                onAccountSelected={handleAccountSelected}
                onReset={onReset}
                selectedAccount={funkyAccounts[0]}
                ariaInvalid={false}
            />,
        );

        const input = screen.getByRole('combobox');
        fireEvent.click(input);

        expect(screen.queryByText('Ingen samsvarende konto')).toBeNull();
        fireEvent.change(input, {
            target: { value: 'Dette skal få ingen match' },
        });
        expect(
            screen.queryByText('Ingen samsvarende konto'),
        ).toBeInTheDocument();

        fireEvent.change(input, { target: { value: 'money3' } });
        fireEvent.click(screen.getByText('Gris'));
        expect(input.getAttribute('value')).toEqual('Smells like money3');
    });
});
