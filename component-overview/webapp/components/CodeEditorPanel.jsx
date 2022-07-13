import React from 'react';
import PropTypes from 'prop-types';
import { LiveEditor } from 'react-live';
import { MicroText } from '@sb1/ffe-core-react';

export default function CodeEditorPanel({ exampleId, example }) {
    return (
        <>
            <div className="sb1ex-live__imports">{example.sourceImports}</div>
            <LiveEditor className="sb1ex-live__editor" />
            <div className="sb1ex-live__id">
                <MicroText>ID: {exampleId}</MicroText>
            </div>
        </>
    );
}

CodeEditorPanel.propTypes = {
    exampleId: PropTypes.string.isRequired,
    example: PropTypes.object.isRequired,
};
