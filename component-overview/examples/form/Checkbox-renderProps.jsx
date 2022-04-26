import { Checkbox } from '@sb1/ffe-form-react';

<Checkbox>
    {labelProps => (
        <label htmlFor={labelProps.htmlFor} className={labelProps.className}>
            Her benyttes render props
        </label>
    )}
</Checkbox>
