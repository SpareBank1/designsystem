import React from 'react';
import {
    DescriptionList,
    DescriptionListTerm,
    DescriptionListDescription,
} from '@sb1/ffe-lists-react';
import PropTypes from 'prop-types';

export default function ExpandInfo({ id, filename, dependencies }) {
    return (
        <DescriptionList horizontal={true}>
            <DescriptionListTerm>Id</DescriptionListTerm>
            <DescriptionListDescription>{id}</DescriptionListDescription>
            <DescriptionListTerm>Filnavn</DescriptionListTerm>
            <DescriptionListDescription>{filename}</DescriptionListDescription>
            <DescriptionListTerm>Dependencies</DescriptionListTerm>
            <DescriptionListDescription>
                {dependencies.join(', ')}
            </DescriptionListDescription>
        </DescriptionList>
    );
}

ExpandInfo.propTypes = {
    id: PropTypes.string,
    filename: PropTypes.string,
    dependencies: PropTypes.arrayOf(PropTypes.string),
};
