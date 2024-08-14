import { useState, useId } from 'react';
import { Tooltip } from '@sb1/ffe-form-react';

() => {
    const [open, setOpen] = useState(false);
    const contentId = useId();
    return (
        <>
            <Tooltip aria-controls={contentId} onClick={() => setOpen(!open)} />
            <div hidden={!open} id={contentId}>
                Husk at Tooltip alltid skal være skjult ved default, men du kan
                styre visningen gjennom en onClick om du vil!
            </div>
        </>
    );
};
