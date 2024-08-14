import { TextArea, Label } from '@sb1/ffe-form-react';
import { useId } from 'react';

() => {
    const textAreaId = useId();

    return (
        <>
            <Label htmlFor={textAreaId}>Beskriv skaden</Label>
            <TextArea
                defaultValue="Dette er et tekstfelt for lengre tekster."
                id={textAreaId}
                rows={8}
            />
        </>
    );
};
