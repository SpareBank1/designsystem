import { useState } from 'react';
import {
    RadioButtonInputGroup,
    RadioButton,
} from '@sb1/ffe-form-react';

export default () => {
    const [accountType, setAccountType] = useState<string>('savings');
    const [paymentFreq, setPaymentFreq] = useState<string>('monthly');
    const [insuranceType, setInsuranceType] = useState<string>('full');

    return (
        <div className="ffe-grid">
            <div className="ffe-grid__row">
                <div className="ffe-grid__col--md-12 ffe-grid__col--sm-12">
                    {/* Standard vertical layout with tooltips */}
                    <RadioButtonInputGroup
                        label="Choose your account type"
                        description="Select the type of account that best suits your needs"
                        name="account-type"
                        onChange={e => setAccountType(e.target.value)}
                        selectedValue={accountType}
                    >
                        {inputProps => (
                            <>
                                <RadioButton
                                    value="savings"
                                    tooltip="Best for long-term savings with higher interest rates"
                                    {...inputProps}
                                >
                                    Savings Account
                                </RadioButton>
                                <RadioButton
                                    value="checking"
                                    tooltip="Perfect for daily transactions and bill payments"
                                    {...inputProps}
                                >
                                    Checking Account
                                </RadioButton>
                                <RadioButton
                                    value="investment"
                                    tooltip="Ideal for growing your wealth through various investment options"
                                    {...inputProps}
                                >
                                    Investment Account
                                </RadioButton>
                            </>
                        )}
                    </RadioButtonInputGroup>
                </div>
            </div>

            <div className="ffe-grid__row" style={{ marginTop: '2rem' }}>
                <div className="ffe-grid__col--md-12 ffe-grid__col--sm-12">
                    {/* Inline layout */}
                    <RadioButtonInputGroup
                        label="Payment frequency"
                        name="payment-frequency"
                        onChange={e => setPaymentFreq(e.target.value)}
                        selectedValue={paymentFreq}
                        inline={true}
                    >
                        {inputProps => (
                            <>
                                <RadioButton value="monthly" {...inputProps}>
                                    Monthly
                                </RadioButton>
                                <RadioButton value="quarterly" {...inputProps}>
                                    Quarterly
                                </RadioButton>
                                <RadioButton value="yearly" {...inputProps}>
                                    Yearly
                                </RadioButton>
                            </>
                        )}
                    </RadioButtonInputGroup>
                </div>
            </div>

            <div className="ffe-grid__row" style={{ marginTop: '2rem' }}>
                <div className="ffe-grid__col--md-12 ffe-grid__col--sm-12">
                    {/* On colored background */}
                    <div style={{ background: 'var(--ffe-color-surface-highlight)', padding: '2rem' }}>
                        <RadioButtonInputGroup
                            label="Insurance coverage"
                            name="insurance-type"
                            onChange={e => setInsuranceType(e.target.value)}
                            selectedValue={insuranceType}
                            onColoredBg={true}
                        >
                            {inputProps => (
                                <>
                                    <RadioButton value="full" {...inputProps}>
                                        Full Coverage
                                    </RadioButton>
                                    <RadioButton value="partial" {...inputProps}>
                                        Partial Coverage
                                    </RadioButton>
                                    <RadioButton value="basic" {...inputProps}>
                                        Basic Coverage
                                    </RadioButton>
                                </>
                            )}
                        </RadioButtonInputGroup>
                    </div>
                </div>
            </div>
        </div>
    );
};
