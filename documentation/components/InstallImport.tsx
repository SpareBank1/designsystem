import { Heading2, Paragraph } from '@sb1/ffe-core-react';
import React from 'react';
import { Source } from '@storybook/blocks';

type Props = {
    dependencies: string[];
    stylingDependencies?: string[];
};

export const InstallImport: React.FC<Props> = ({
    dependencies,
    stylingDependencies,
}) => {
    const installCode = `npm install ${dependencies.join(' ')}`;
    const innstallStyling =
        stylingDependencies &&
        `@import '@sb1/ffe-core/less/ffe-core';\n${stylingDependencies.map(dep => `@import '${dep}';`).join('\n')}`;
    return (
        <>
            <Heading2>Installasjon</Heading2>
            <Paragraph>Installer pakken med avhengigheter</Paragraph>
            <Source type="bash" code={installCode} />
            {stylingDependencies && (
                <>
                    <Paragraph>
                        I prosjektets hovedstylingsfil importer stylingen
                    </Paragraph>
                    <Source type="css" code={innstallStyling} />
                </>
            )}
        </>
    );
};
