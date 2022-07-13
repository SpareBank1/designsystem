import { useState } from 'react';
import { Tooltip } from '@sb1/ffe-form-react';

() => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Tooltip
                aria-controls="tooltip-text"
                onClick={() => setOpen(!open)}
            />
            <div hidden={open} id="tooltip-text">
                Titt tei!
            </div>
        </>
    );
}
