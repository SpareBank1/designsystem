import type { Meta, StoryObj } from '@storybook/react';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';
import { AccountSelectorMulti } from './account-selector-multi/AccountSelectorMulti';
import { AccountSelector } from './account-selector/AccountSelector';

const meta: Meta<typeof AccountSelector> = {
    title: 'Komponenter/AccountSelector/Live Code Editor',
    component: AccountSelector,
    parameters: {
        docs: {
            description: {
                component:
                    'Comprehensive live code editor for all account selector components in the FFE AccountSelector package. Explore AccountSelector and AccountSelectorMulti with interactive examples for single and multi-account selection scenarios.',
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
            <h4 style={{ margin: '0 0 16px 0' }}>Enkel kontovalg</h4>
            
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
                    <h5 style={{ margin: '0 0 8px 0' }}>Valgt konto</h5>
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

render(<SimpleAccountSelector />);`,
    },
};

export const LiveCodeEditor: Story = createLiveCodeStory(AccountSelector, {
    templates: accountSelectorTemplates,
    additionalComponents: {
        AccountSelectorMulti,
    },
    defaultTemplate: 'simple',
    title: 'AccountSelector Live Code Editor',
    description:
        'Comprehensive live code editor for all account selector components in the FFE AccountSelector package. Explore AccountSelector and AccountSelectorMulti with interactive examples for single and multi-account selection scenarios.',
});
