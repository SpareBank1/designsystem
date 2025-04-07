import { Heading2, Paragraph } from '@sb1/ffe-core-react';
import React, { useState } from 'react';
import { Source } from '@storybook/blocks';
import { TabGroup, Tab } from '@sb1/ffe-tabs-react';

type Props = {
    packageName: string;
    dependencies?: string[];
    stylingDependencies?: string[];
};

export const InstallImport: React.FC<Props> = ({
    packageName,
    stylingDependencies,
    dependencies,
}) => {
    const [activeTabId, setActiveTabId] = useState('all');
    const installCodeDirect = `npm install ${packageName}`;
    const installCodeAll = `npm install ${packageName} ${dependencies ? dependencies?.join(' ') : ''}`;
    const innstallStyling =
        stylingDependencies &&
        `@import '@sb1/ffe-core/less/ffe-core';\n${stylingDependencies.map(dep => `@import '${dep}';`).join('\n')}`;
    return (
        <>
            <Heading2>Installasjon</Heading2>
            {dependencies ? (
                <>
                    <TabGroup>
                        <Tab
                            selected={activeTabId === 'all'}
                            onClick={() => setActiveTabId('all')}
                        >
                            Pakke og avhengigheter
                        </Tab>

                        <Tab
                            selected={activeTabId === 'direct'}
                            onClick={() => setActiveTabId('direct')}
                        >
                            Kun pakke
                        </Tab>
                    </TabGroup>
                    <div
                        id="all-dep"
                        style={{
                            display: activeTabId === 'all' ? 'block' : 'none',
                        }}
                    >
                        <Source code={installCodeAll} />
                    </div>
                    <div
                        id="direct-dep"
                        style={{
                            display:
                                activeTabId === 'direct' ? 'block' : 'none',
                        }}
                    >
                        <Source code={installCodeDirect} />
                    </div>
                </>
            ) : (
                <Source code={installCodeDirect} />
            )}

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
