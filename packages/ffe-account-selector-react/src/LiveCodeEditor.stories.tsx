import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { AccountSelector } from './account-selector/AccountSelector';
import { AccountSelectorMulti } from './account-selector-multi/AccountSelectorMulti';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';

const meta: Meta<typeof AccountSelector> = {
    title: 'Komponenter/AccountSelector/Live Code Editor',
    component: AccountSelector,
    parameters: {
        docs: {
            description: {
                component: 'Comprehensive live code editor for all account selector components in the FFE AccountSelector package. Explore AccountSelector and AccountSelectorMulti with interactive examples for single and multi-account selection scenarios.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof AccountSelector>;

// Define comprehensive templates for all account selector components
const accountSelectorTemplates = {
    simple: {
        name: 'Grunnleggende',
        code: `function SimpleAccountSelector() {
    const [selectedAccount, setSelectedAccount] = useState(null);
    
    const accounts = [
        {
            accountNumber: '1234.56.78901',
            name: 'Brukskonto',
            balance: 15420.50,
            currencyCode: 'NOK'
        },
        {
            accountNumber: '1234.56.78902',
            name: 'Sparekonto',
            balance: 85750.00,
            currencyCode: 'NOK'
        },
        {
            accountNumber: '1234.56.78903',
            name: 'BSU-konto',
            balance: 125000.00,
            currencyCode: 'NOK'
        }
    ];
    
    return (
        <div style={{ maxWidth: '500px' }}>
            <h4 style={{ margin: '0 0 16px 0' }}>🏦 Enkel kontovalg</h4>
            
            <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                    Velg konto for overføring
                </label>
                <AccountSelector
                    id="simple-account-selector"
                    accounts={accounts}
                    selectedAccount={selectedAccount}
                    onAccountSelected={setSelectedAccount}
                    locale="nb"
                />
            </div>
            
            {selectedAccount && (
                <div style={{ 
                    padding: '16px', 
                    backgroundColor: 'var(--ffe-color-background-success-subtle)', 
                    borderRadius: '8px'
                }}>
                    <h5 style={{ margin: '0 0 8px 0' }}>✅ Valgt konto</h5>
                    <div style={{ fontSize: '14px' }}>
                        <div><strong>{selectedAccount.name}</strong></div>
                        <div>Kontonummer: {selectedAccount.accountNumber}</div>
                        <div>Saldo: {selectedAccount.balance.toLocaleString('nb-NO', { 
                            style: 'currency', 
                            currency: selectedAccount.currencyCode 
                        })}</div>
                    </div>
                </div>
            )}
        </div>
    );
}

render(<SimpleAccountSelector />);`
    },
    multi: {
        name: 'Flervalg',
        code: `function MultiAccountSelector() {
    const [selectedAccounts, setSelectedAccounts] = useState([]);
    
    const accounts = [
        {
            accountNumber: '1234.56.78901',
            name: 'Hovedkonto',
            balance: 45200.30,
            currencyCode: 'NOK'
        },
        {
            accountNumber: '1234.56.78902',
            name: 'Sparekonto høy rente',
            balance: 125000.00,
            currencyCode: 'NOK'
        },
        {
            accountNumber: '1234.56.78903',
            name: 'BSU-konto',
            balance: 200000.00,
            currencyCode: 'NOK'
        },
        {
            accountNumber: '1234.56.78904',
            name: 'Investeringskonto',
            balance: 89400.25,
            currencyCode: 'NOK'
        }
    ];
    
    const totalBalance = selectedAccounts.reduce((sum, account) => sum + account.balance, 0);
    
    return (
        <div style={{ maxWidth: '600px' }}>
            <h3 style={{ margin: '0 0 16px 0' }}>☑️ Flervalg av kontoer</h3>
            
            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                    Velg kontoer for rapport ({selectedAccounts.length} valgt)
                </label>
                <AccountSelectorMulti
                    id="multi-account-selector"
                    accounts={accounts}
                    selectedAccounts={selectedAccounts}
                    onAccountSelected={setSelectedAccounts}
                    locale="nb"
                />
            </div>
            
            {selectedAccounts.length > 0 && (
                <div style={{ 
                    padding: '20px', 
                    backgroundColor: 'var(--ffe-color-background-subtle)', 
                    borderRadius: '8px'
                }}>
                    <h5 style={{ margin: '0 0 12px 0' }}>📋 Valgte kontoer</h5>
                    <div>Total saldo: {totalBalance.toLocaleString('nb-NO', { 
                        style: 'currency', 
                        currency: 'NOK' 
                    })}</div>
                </div>
            )}
        </div>
    );
}

render(<MultiAccountSelector />);`
    },
    interactive: {
        name: 'Interaktiv',
        code: `function InteractiveAccountSelector() {
    const [fromAccount, setFromAccount] = useState(null);
    const [toAccount, setToAccount] = useState(null);
    const [amount, setAmount] = useState('');
    const [transferStatus, setTransferStatus] = useState('');
    
    const accounts = [
        {
            accountNumber: '1234.56.78901',
            name: 'Brukskonto',
            balance: 25420.50,
            currencyCode: 'NOK'
        },
        {
            accountNumber: '1234.56.78902',
            name: 'Sparekonto',
            balance: 185750.00,
            currencyCode: 'NOK'
        },
        {
            accountNumber: '1234.56.78903',
            name: 'BSU-konto',
            balance: 145000.00,
            currencyCode: 'NOK'
        }
    ];
    
    const availableToAccounts = accounts.filter(acc => 
        !fromAccount || acc.accountNumber !== fromAccount.accountNumber
    );
    
    const canTransfer = fromAccount && toAccount && amount && 
        parseFloat(amount) > 0 && parseFloat(amount) <= fromAccount.balance;
    
    const handleTransfer = () => {
        if (!canTransfer) return;
        
        setTransferStatus('processing');
        
        setTimeout(() => {
            setTransferStatus('success');
            setTimeout(() => {
                setFromAccount(null);
                setToAccount(null);
                setAmount('');
                setTransferStatus('');
            }, 3000);
        }, 2000);
    };
    
    return (
        <div style={{ maxWidth: '700px' }}>
            <h3 style={{ margin: '0 0 24px 0' }}>⚡ Interaktiv overføring</h3>
            
            {transferStatus === 'success' && (
                <div style={{ 
                    padding: '16px', 
                    backgroundColor: 'var(--ffe-color-background-success-subtle)', 
                    borderRadius: '8px',
                    marginBottom: '20px',
                    textAlign: 'center'
                }}>
                    <h4 style={{ margin: '0 0 8px 0' }}>✅ Overføring fullført!</h4>
                </div>
            )}
            
            <div style={{ 
                padding: '24px', 
                backgroundColor: 'var(--ffe-color-background-subtle)', 
                borderRadius: '8px'
            }}>
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1fr', 
                    gap: '20px',
                    marginBottom: '20px'
                }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                            Fra konto
                        </label>
                        <AccountSelector
                            id="from-account-selector"
                            accounts={accounts}
                            selectedAccount={fromAccount}
                            onAccountSelected={setFromAccount}
                            locale="nb"
                            disabled={transferStatus === 'processing'}
                        />
                    </div>
                    
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                            Til konto
                        </label>
                        <AccountSelector
                            id="to-account-selector"
                            accounts={availableToAccounts}
                            selectedAccount={toAccount}
                            onAccountSelected={setToAccount}
                            locale="nb"
                            disabled={!fromAccount || transferStatus === 'processing'}
                        />
                    </div>
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                        Beløp (NOK)
                    </label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.00"
                        min="0"
                        max={fromAccount?.balance || 0}
                        step="0.01"
                        disabled={transferStatus === 'processing'}
                        style={{
                            width: '200px',
                            padding: '8px 12px',
                            border: '1px solid var(--ffe-color-border-subtle)',
                            borderRadius: '4px',
                            fontSize: '16px'
                        }}
                    />
                </div>
                
                <button
                    onClick={handleTransfer}
                    disabled={!canTransfer || transferStatus === 'processing'}
                    style={{
                        padding: '12px 24px',
                        backgroundColor: canTransfer && transferStatus !== 'processing' ? 
                            'var(--ffe-color-background-primary)' : 'var(--ffe-color-background-disabled)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: canTransfer && transferStatus !== 'processing' ? 'pointer' : 'not-allowed',
                        fontWeight: '500'
                    }}
                >
                    {transferStatus === 'processing' ? '⏳ Behandler...' : '💸 Overfør'}
                </button>
            </div>
        </div>
    );
}

render(<InteractiveAccountSelector />);`
    },
    showcase: {
        name: 'Showcase',
        code: `function AccountSelectorShowcase() {
    const [selectedAccounts, setSelectedAccounts] = useState([]);
    
    const accounts = [
        {
            accountNumber: '1234.56.78901',
            name: 'Hovedkonto',
            balance: 45200.30,
            currencyCode: 'NOK',
            type: 'checking'
        },
        {
            accountNumber: '1234.56.78902',
            name: 'Sparekonto høy rente',
            balance: 125000.00,
            currencyCode: 'NOK',
            type: 'savings'
        },
        {
            accountNumber: '1234.56.78903',
            name: 'BSU-konto',
            balance: 200000.00,
            currencyCode: 'NOK',
            type: 'savings'
        },
        {
            accountNumber: '1234.56.78904',
            name: 'Investeringskonto',
            balance: 89400.25,
            currencyCode: 'NOK',
            type: 'investment'
        }
    ];
    
    const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);
    
    return (
        <div style={{ 
            padding: '24px', 
            backgroundColor: 'var(--ffe-color-background-subtle)', 
            borderRadius: '8px',
            maxWidth: '800px'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <h2 style={{ margin: '0 0 8px 0' }}>🏆 Kontooversikt</h2>
                <p style={{ margin: 0, color: 'var(--ffe-color-text-subtle)' }}>
                    Komplett løsning for kontoadministrasjon
                </p>
            </div>
            
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
                gap: '16px',
                marginBottom: '24px'
            }}>
                <div style={{ 
                    padding: '16px', 
                    backgroundColor: 'var(--ffe-color-background-primary)', 
                    color: 'white',
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{accounts.length}</div>
                    <div style={{ fontSize: '14px' }}>Kontoer</div>
                </div>
                <div style={{ 
                    padding: '16px', 
                    backgroundColor: 'var(--ffe-color-background-success)', 
                    color: 'white',
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        {totalBalance.toLocaleString('nb-NO', { 
                            style: 'currency', 
                            currency: 'NOK',
                            maximumFractionDigits: 0
                        })}
                    </div>
                    <div style={{ fontSize: '14px' }}>Total saldo</div>
                </div>
            </div>
            
            <div style={{ 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                padding: '20px'
            }}>
                <h3 style={{ margin: '0 0 16px 0' }}>☑️ Velg kontoer for analyse</h3>
                <AccountSelectorMulti
                    id="showcase-selector"
                    accounts={accounts}
                    selectedAccounts={selectedAccounts}
                    onAccountSelected={setSelectedAccounts}
                    locale="nb"
                />
                
                {selectedAccounts.length > 0 && (
                    <div style={{ 
                        marginTop: '20px',
                        padding: '16px', 
                        backgroundColor: 'var(--ffe-color-background-info-subtle)', 
                        borderRadius: '8px'
                    }}>
                        <h4>📊 Analyse av valgte kontoer</h4>
                        <div>Antall valgte: {selectedAccounts.length}</div>
                        <div>Total saldo: {selectedAccounts.reduce((sum, acc) => sum + acc.balance, 0).toLocaleString('nb-NO', { 
                            style: 'currency', 
                            currency: 'NOK' 
                        })}</div>
                    </div>
                )}
            </div>
        </div>
    );
}

render(<AccountSelectorShowcase />);`
    }
};

export const LiveCodeEditor: Story = createLiveCodeStory(AccountSelector, {
    templates: accountSelectorTemplates,
    additionalComponents: {
        AccountSelectorMulti
    },
    defaultTemplate: 'simple',
    title: 'AccountSelector Live Code Editor',
    description: 'Comprehensive live code editor for all account selector components in the FFE AccountSelector package. Explore AccountSelector and AccountSelectorMulti with interactive examples for single and multi-account selection scenarios.'
});
