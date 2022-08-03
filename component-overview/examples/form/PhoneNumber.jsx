import { PhoneNumber } from '@sb1/ffe-form-react';
import { useState } from 'react';

() => {
    const [countryCode, setCountryCode] = useState('47');
    const [number, setNumber] = useState('123123123');

    return (
        <PhoneNumber
            countryCode={countryCode}
            number={number}
            onCountryCodeChange={(e) => setCountryCode(e.currentTarget.value)}
            onNumberChange={(e) => setNumber(e.currentTarget.value)}
        />
    );
}
