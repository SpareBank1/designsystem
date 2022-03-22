import React from 'react';
import PropTypes from 'prop-types';

import { examples } from '../../lib/esm';

export default function withExampleById(Component) {
    const WrappedComponent = ({ match }) => {
        const { exampleId } = match.params;
        const example = examples[exampleId];
        if (!example) {
            return (
                <div>
                    Error: No such example <code>{exampleId}</code>.
                </div>
            );
        }

        return <Component {...{ match, exampleId, example }} />;
    };

    WrappedComponent.propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                exampleId: PropTypes.string,
            }),
        }),
    };

    return WrappedComponent;
}
