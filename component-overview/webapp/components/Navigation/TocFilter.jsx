import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, Input } from '@sb1/ffe-form-react';
import { TertiaryButton } from '@sb1/ffe-buttons-react';

export default function TocFilter({
    value = '',
    onChange = () => {},
    focusable = true,
}) {
    const conditionalTabIndex = focusable ? {} : { tabIndex: -1 };

    const cb = evt => {
        onChange(evt.target.value);
    };

    return (
        <div className="sb1ex-toc-filter">
            <InputGroup
                className="sb1ex-toc-filter__input-group"
                label="Filtrer"
            >
                {<Input value={value} onChange={cb} {...conditionalTabIndex} />}
            </InputGroup>
            {value.length > 0 && (
                <TertiaryButton onClick={() => onChange('')}>
                    Nullstill
                </TertiaryButton>
            )}
        </div>
    );
}

TocFilter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    focusable: PropTypes.bool,
};
