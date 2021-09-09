import { useState } from 'react';
import Collapse from '@sb1/ffe-collapse-react';

() => {
    const [isOpen, setOpen] = useState(false);
    const [rand, setRand] = useState(Math.random());

    return (
        <>
            <button onClick={() => setOpen(!isOpen)}>
                {isOpen ? 'Collapse' : 'Expand'}
            </button>
            <Collapse isOpen={isOpen} onRest={() => setRand(Math.random())}>
                <div>
                    <p>Hello world</p>
                    <p>Hello world</p>
                </div>
            </Collapse>
            <p>This number will change on transition complete: {rand}</p>
        </>
    );
};
