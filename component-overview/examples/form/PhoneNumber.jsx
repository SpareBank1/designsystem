import { PhoneNumber } from '@sb1/ffe-form-react';
import { useRef } from 'react';

() => {
    const phoneNumberRef = useRef(null);

    return (
        <PhoneNumber
            numberInputProps={{
                value: '123123123',
            }}
            ref={phoneNumberRef}
        />
    );
};
