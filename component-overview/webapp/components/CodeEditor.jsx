import React from 'react';
import PropTypes from 'prop-types';
import { LiveEditor } from 'react-live';
export default function CodeEditor({ imports }) {
    return (
        <>
            <div className="sb1ex-live__imports">{imports}</div>
            <LiveEditor className="sb1ex-live__editor" />
        </>
    );
}

CodeEditor.propTypes = {
    imports: PropTypes.string,
};
