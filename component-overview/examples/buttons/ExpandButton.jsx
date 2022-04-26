import { useState } from 'react';
import { ExpandButton } from '@sb1/ffe-buttons-react';

() => {
    const [isExpanded, setExpanded] = useState(false);

    return (
        <div>
            <ExpandButton
                isExpanded={isExpanded}
                onClick={() => setExpanded(!isExpanded)}
            >
                Vis mer
            </ExpandButton>
        </div>
    );
}
