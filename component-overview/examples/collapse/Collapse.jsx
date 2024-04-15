import { useState } from 'react';
import { Collapse } from '@sb1/ffe-collapse-react';
import { ExpandButton } from '@sb1/ffe-buttons-react';

() => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <ExpandButton isExpanded={isOpen} onClick={() => setOpen(!isOpen)}>
                {isOpen ? 'Collapse' : 'Expand'}
            </ExpandButton>
            <Collapse isOpen={isOpen}>
                <div>
                    <p>Hello world</p>
                    <p>Hello world</p>
                </div>
            </Collapse>
        </>
    );
}
