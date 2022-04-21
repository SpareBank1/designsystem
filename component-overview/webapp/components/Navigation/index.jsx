import React from 'react';
import TocFilter from './TocFilter';
import Toc from './Toc';
import InpageNav from './InpageNav';
import { useNavProvider } from '../../context/NavContext';

export default function Navigation() {
    const context = useNavProvider();
    return (
        <>
            <div className="sb1ex-toc-container">
                <InpageNav
                    sections={context.exampleTree.childEdges}
                    filteredSections={context.filteredTree.childEdges}
                />
                <div className="sb1ex-toc__search">
                    <TocFilter
                        value={context.filter}
                        onChange={context.setFilter}
                    />
                    <Toc exampleTree={context.filteredTree} />
                </div>
            </div>
        </>
    );
}
