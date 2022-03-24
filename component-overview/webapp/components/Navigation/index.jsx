import React from 'react';
import { bool } from 'prop-types';
import TocFilter from './TocFilter';
import Toc from './Toc';
import InpageNav from './InpageNav';
import { useNavProvider } from '../../context/NavContext';

export default function Navigation({ focusable = true }) {
    const { exampleTree, filteredTree, filter, setFilter } = useNavProvider();

    return (
        <div
            id="navigation-overlay"
            className="sb1ex-toc-container"
            aria-hidden={!focusable}
        >
            <InpageNav
                sections={exampleTree.childEdges}
                filteredSections={filteredTree.childEdges}
                focusable={focusable}
            />
            <div className="sb1ex-toc__search">
                <TocFilter
                    value={filter}
                    onChange={setFilter}
                    focusable={focusable}
                />
                <Toc exampleTree={filteredTree} focusable={focusable} />
            </div>
        </div>
    );
}

Navigation.propTypes = {
    focusable: bool,
};
