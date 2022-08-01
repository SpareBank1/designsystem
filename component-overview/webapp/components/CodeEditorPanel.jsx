import React from 'react';
import PropTypes from 'prop-types';
import { LiveEditor } from 'react-live';
import { MicroText } from '@sb1/ffe-core-react';
import { packages } from '../../lib/esm';

const packageVersions = packages.reduce((acc, pkg) => {
    // eslint-disable-next-line no-param-reassign
    acc[pkg.name] = pkg.version;
    return acc;
}, {});

const getVersions = deps =>
    deps.reduce((acc, pkg) => {
        if (packageVersions[pkg]) {
            // eslint-disable-next-line no-param-reassign
            acc.push(`${pkg}@${packageVersions[pkg]}`);
        }

        return acc;
    }, []);

export default function CodeEditorPanel({ exampleId, example }) {
    return (
        <>
            <div className="sb1ex-live__imports">{example.sourceImports}</div>
            <LiveEditor className="sb1ex-live__editor" />
            <div className="sb1ex-live__id">
                <MicroText>ID: {exampleId}</MicroText>
            </div>
            <div>
                <MicroText>
                    {getVersions(example.dependencies).join(', ')}
                </MicroText>
            </div>
        </>
    );
}

CodeEditorPanel.propTypes = {
    exampleId: PropTypes.string.isRequired,
    example: PropTypes.object.isRequired,
};
