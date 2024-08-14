import { useId, useState } from 'react';
import { AccountSelector } from '@sb1/ffe-account-selector-react';
import { InputGroup } from '@sb1/ffe-form-react';
import { fargeFjell } from '@sb1/ffe-core';

() => {
    const [selectedAccount, setSelectedAccount] = useState();
    const labelId = useId();
    const inputId = useId();

    return (
        <div style={{ background: fargeFjell, padding: 16 }}>
            <InputGroup
                label="Velg konto"
                onColoredBg={true}
                labelId={labelId}
                inputId={inputId}
            >
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
                    id={inputId}
                    labelledById={labelId}
                    locale="nb"
                    onAccountSelected={val => setSelectedAccount(val)}
                    onReset={() => setSelectedAccount(null)}
                    selectedAccount={selectedAccount}
                />
            </InputGroup>
        </div>
    );
};
