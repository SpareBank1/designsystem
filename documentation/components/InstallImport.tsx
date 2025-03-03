import { Heading2, Paragraph } from '@sb1/ffe-core-react';
import React from 'react';
import { Source } from '@storybook/blocks';

type Props = {
    dependencies: string[];
    stylingDependencies?: string[];
    nocore?: boolean;
};

export const InstallImport: React.FC<Props> = ({
    dependencies,
    stylingDependencies,
    nocore,
}) => {
    const installCode = `npm install${!nocore ? ' @sb1/ffe-core' : ''} ${dependencies.join(' ')}`;
    const innstallStyling =
        stylingDependencies &&
        `@import '@sb1/ffe-core/less/ffe-core';\n${stylingDependencies.map(dep => `@import '${dep}';`).join('\n')}`;
    return (
        <>
            <Heading2>Installasjon</Heading2>
            <Paragraph>Innstaller pakken med avhangigheter</Paragraph>
            <Source code={installCode} />
            {stylingDependencies && (
                <>
                    <Paragraph>
                        I prosjektets hovedstylingsfil importer stylingen
                    </Paragraph>
                    <Source code={innstallStyling} />
                </>
            )}
        </>
    );
};
