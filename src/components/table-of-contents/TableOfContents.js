import React, { Fragment } from 'react';
import { Input, Label } from '../../../packages/ffe-form-react';

export default function TableOfContents(props) {
    const { children, onSearchTermChange, searchTerm } = props;

    return (
        <Fragment>
            <div className="sb1ds-search">
                <Input
                    value={searchTerm}
                    placeholder="Vis meg..."
                    onChange={event => onSearchTermChange(event.target.value)}
                />
            </div>
            {children}
        </Fragment>
    );
}
