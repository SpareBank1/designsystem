import { Heading2, Paragraph } from '@sb1/ffe-core-react';
import React from 'react';
import { Source } from '@storybook/blocks';

type Props = {
    dependencies: string[];
    stylingDependencies: string[];
};

export const InstallImport: React.FC<Props> = ({
    dependencies,
    stylingDependencies,
}) => {
    const installCode = `npm install @sb1/ffe-core ${dependencies.join(' ')}`;
    const innstallStyling = `@import '@sb1/ffe-core/less/ffe-core';\n${stylingDependencies.map(dep => `@import '${dep}';`).join('\n')}`;
    return (
        <>
            <Heading2>Installasjon</Heading2>
            <Paragraph>Innstaller pakken med avhangigheter</Paragraph>
            <Source code={installCode} />
            <Paragraph>
                I prosjektets hovedstylingsfil importer stylingen
            </Paragraph>
            <Source code={innstallStyling} />
        </>
    );
};
