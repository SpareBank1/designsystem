import React from 'react';
import HighCapacityResults from './HighCapacityResults';
import { SearchableDropdown } from './SearchableDropdown';
import { propTypes } from './propTypes';

export const SearchableDropdownHighCapacity = ({ ...rest }) => {
    return <SearchableDropdown {...rest} results={HighCapacityResults} />;
};

SearchableDropdownHighCapacity.propTypes = propTypes;
