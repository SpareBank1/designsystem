import { useState } from 'react';
import { AccountSelector } from '@sb1/ffe-account-selector-react';
import { InputGroup } from '@sb1/ffe-form-react';
import { fargeFjell } from '@sb1/ffe-core';

() => {
    const [selectedAccount, setSelectedAccount] = useState();

    const label1 = 'label1';
    return (
        <div style={{ background: fargeFjell, padding: 16 }}>
            <InputGroup label="Velg konto" onColoredBg={true} labelId={label1}>
                <AccountSelector
                    onColoredBg={true}
                    accounts={[
                        {
                            accountNumber: '1234 56 789101',
                            name: 'Brukskonto',
                            currencyCode: 'NOK',
                            balance: 1337,
                        },
                    ]}
                    id="account-selector-single"
                    locale="nb"
                    labelledById={label1}
                    onAccountSelected={val => setSelectedAccount(val)}
                    onReset={() => setSelectedAccount(null)}
                    selectedAccount={selectedAccount}
                />
            </InputGroup>
        </div>
    );
};
