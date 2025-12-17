import { Heading2, Paragraph } from '@sb1/ffe-core-react';
import React, { useState } from 'react';
import { Source } from '@storybook/blocks';
import { TabGroup, Tab } from '@sb1/ffe-tabs-react';

const packageStyles = {
    '@sb1/ffe-accordion': {
        less: '@sb1/ffe-accordion/less/ffe-accordion',
    },
    '@sb1/ffe-collapse-react': {
        less: '@sb1/ffe-collapse-react/less/collapse',
    },
    '@sb1/ffe-core': {
        less: '@sb1/ffe-core/less/ffe',
    },
    '@sb1/ffe-icons': {
        less: '@sb1/ffe-icons/less/ffe-icons',
    },
    '@sb1/ffe-searchable-dropdown-react': {
        less: '@sb1/ffe-searchable-dropdown-react/less/searchable-dropdown',
    },
    '@sb1/ffe-form': {
        less: '@sb1/ffe-form/less/form',
    },
    '@sb1/ffe-chips': {
        less: '@sb1/ffe-chips/less/chip',
    },
    '@sb1/ffe-buttons': {
        less: '@sb1/ffe-buttons/less/buttons',
    },
    '@sb1/ffe-spinner': {
        less: '@sb1/ffe-spinner/less/spinner',
    },
    '@sb1/ffe-badge': {
        less: '@sb1/ffe-badge/less/badge',
    },
    '@sb1/ffe-cards': {
        less: '@sb1/ffe-cards/less/cards',
    },
    '@sb1/ffe-chart-donut-react': {
        less: '@sb1/ffe-chart-donut-react/less/ffe-chart-donut',
    },
    '@sb1/ffe-datepicker': {
        less: '@sb1/ffe-datepicker/less/datepicker',
    },

    '@sb1/ffe-feedback': {
        less: '@sb1/ffe-feedback/less/feedback',
    },
    '@sb1/ffe-file-upload': {
        less: '@sb1/ffe-file-upload/less/file-upload',
    },
    '@sb1/ffe-grid': {
        less: '@sb1/ffe-grid/less/ffe-grid',
    },
    '@sb1/ffe-lists': {
        less: '@sb1/ffe-lists/less/lists',
    },
    '@sb1/ffe-messages': {
        less: '@sb1/ffe-messages/less/messages',
    },
    '@sb1/ffe-modals': {
        less: '@sb1/ffe-modals/less/modal',
    },
    '@sb1/ffe-pagination': {
        less: '@sb1/ffe-pagination/less/pagination',
    },
    '@sb1/ffe-shapes': {
        less: '@sb1/ffe-shapes/less/shapes',
    },
    '@sb1/ffe-tables': {
        less: '@sb1/ffe-tables/less/tables',
    },
    '@sb1/ffe-tabs': {
        less: '@sb1/ffe-tabs/less/tabs',
    },
    '@sb1/ffe-tags': {
        less: '@sb1/ffe-tags/less/tag',
    },
    '@sb1/ffe-progressbar': {
        less: '@sb1/ffe-progressbar/less/progressbar',
    },
    '@sb1/ffe-skeleton': {
        less: '@sb1/ffe-skeleton/less/skeleton',
    },
};

type Props = {
    packageName: string;
    dependencies?: string[];
};

export const InstallImport: React.FC<Props> = ({
    packageName,
    dependencies,
}) => {
    const [activeTabId, setActiveTabId] = useState('all');
    const [activeStyling, setActiveStyling] = useState('less');
    const [styleDependencies] = useState([
        packageName,
        ...(dependencies || []),
    ]);
    const installCodeDirect = `npm install ${packageName}`;
    const installCodeAll = `npm install ${packageName} ${dependencies ? dependencies?.join(' ') : ''}`;
    const innstallStyling = styleDependencies
        //@ts-expect-error kan vurdere å type denne opp riktig på sikt, men ikke verdt det nå
        .map(dep => packageStyles[dep])
        .filter(Boolean)
        .sort((a, b) =>
            a.less === '@sb1/ffe-core/less/ffe'
                ? -1
                : b.less === '@sb1/ffe-core/less/ffe'
                  ? 1
                  : a.less.localeCompare(b.less),
        )
        .map(dep =>
            activeStyling === 'less'
                ? `@import '${dep.less}';`
                : `@import '${dep.less.replace('less', 'css')}.css';`,
        )
        .join('\n');
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

            {innstallStyling && (
                <>
                    <Paragraph>
                        I prosjektets hovedstylingsfil importer stylingen
                    </Paragraph>
                    <TabGroup>
                        <Tab
                            selected={activeStyling === 'less'}
                            onClick={() => setActiveStyling('less')}
                        >
                            less
                        </Tab>

                        <Tab
                            selected={activeStyling === 'css'}
                            onClick={() => setActiveStyling('css')}
                        >
                            CSS
                        </Tab>
                    </TabGroup>
                    <Source code={innstallStyling} />
                </>
            )}
        </>
    );
};
