import React, { Fragment } from 'react';
import { Input, Label } from '../../../packages/ffe-form-react';

export default function TableOfContents(props) {
    const { children, onSearchTermChange, searchTerm } = props;

    return (
        <Fragment>
            <div className="sb1ds-search">
                <Input
                    aria-label="Søk etter en komponent"
                    onChange={event => onSearchTermChange(event.target.value)}
                    placeholder="Vis meg..."
                    value={searchTerm}
                />
            </div>
            {children}
        </Fragment>
    );
}
