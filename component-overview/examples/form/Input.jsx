import { Input, Label } from '@sb1/ffe-form-react';
import { useId } from 'react';

() => {
    const inputId = useId();

    return (
        <>
            <Label htmlFor={inputId}>Fornavn</Label>
            <Input id={inputId} />
        </>
    );
};
