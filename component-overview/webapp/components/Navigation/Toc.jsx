import React from 'react';
import PropTypes from 'prop-types';
import TocGroup from './TocGroup';

export default function Toc({ exampleTree, focusable = true }) {
    return (
        <nav className="sb1ex-toc" aria-label="Eksempler">
            {exampleTree.children.map(example => (
                <TocGroup
                    key={example.edge}
                    group={example}
                    focusable={focusable}
                />
            ))}
        </nav>
    );
}

Toc.propTypes = {
    exampleTree: PropTypes.object.isRequired,
    focusable: PropTypes.bool,
};
