import React from 'react';
import { examples } from '../../lib/esm';
import { useParams } from 'react-router-dom';

export const WithExampleById = ({ component: Component }) => {
    const { exampleId } = useParams();
    const example = examples[exampleId];
    if (!example) {
        return (
            <div>
                Error: No such example <code>{exampleId}</code>.
            </div>
        );
    }
    return <Component {...{ exampleId, example }} />;
};
