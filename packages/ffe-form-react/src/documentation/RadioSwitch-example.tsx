import React, { useState } from 'react';
import { RadioButtonInputGroup } from '../RadioButtonInputGroup.js';
import { RadioSwitch } from '../RadioSwitch.js';

export default () => {
    const [selected, setSelected] = useState<string>('yes'); // Initialize with a default value

    return (
        <RadioButtonInputGroup
            label="Do you want email notifications?"
            description="Choose whether to receive email notifications for important updates"
            name="email-notifications"
            onChange={e => setSelected(e.target.value)}
            selectedValue={selected}
        >
            {inputProps => (
                <RadioSwitch
                    leftLabel="Yes"
                    leftValue="yes"
                    rightLabel="No"
                    rightValue="no"
                    {...inputProps}
                />
            )}
        </RadioButtonInputGroup>
    );
};
