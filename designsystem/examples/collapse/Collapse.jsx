import { useState } from 'react';
import Collapse from '@sb1/ffe-collapse-react';


() => {
    const [isOpen, setOpen] = useState(false);

    return <>
        <button onClick={() => setOpen(!isOpen)}>
            {isOpen ? 'Collapse' : 'Expand'}
        </button>
        <Collapse isOpen={isOpen}>
            <div>
                <p>Hello world</p>
                <p>Hello world</p>
            </div>
        </Collapse>
    </>;
}
