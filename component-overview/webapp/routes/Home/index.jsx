import React, { useState } from 'react';
import Header from '../../components/Header';
import createExampleTree from '../../util/createExampleTree';
import Toc from './Toc';
import TocFilter from './TocFilter';
import InpageNav from './InpageNav';

import { examples } from '../../../lib/esm/';

export default function Home() {
    const [filter, setFilter] = useState('');

    const exampleTree = createExampleTree(examples);
    const filteredTree = exampleTree.filteredTree(
        filter === ''
            ? () => true
            : d => d.value.key.toLowerCase().includes(filter),
    );

    return (
        <>
            <Header title="@sb1/ffe-*-react by example" />
            <div className="sb1ex-toc-container">
                <TocFilter value={filter} onChange={setFilter} />
                <Toc exampleTree={filteredTree} />
                <InpageNav
                    sections={exampleTree.childEdges}
                    filteredSections={filteredTree.childEdges}
                />
            </div>
        </>
    );
}
