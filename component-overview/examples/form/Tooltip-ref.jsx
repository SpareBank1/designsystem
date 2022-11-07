import {useRef} from 'react';
import {Tooltip} from '@sb1/ffe-form-react';

() => {
    const ref = useRef();
    return (
        <Tooltip ref={ref} onClick={() => console.log(ref)}>Jeg har en ref</Tooltip>
    );
}


