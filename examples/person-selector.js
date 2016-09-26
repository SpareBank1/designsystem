import React from 'react';
import { people } from './example-data';
import BaseSelector from '../src/selectors/base-selector';

const PersonSelectorExample = () => {

  const onChange = (accountNumberOrUserInput) => {
    console.log('person selector changed', accountNumberOrUserInput);
  };

  const onFocus = () => {
    console.log('person selector gained focus');
  };

  const renderPersonRow = ({item}) => {
    return (
      <div className="person-suggestion">
        <strong>{item.name}</strong>
        <p>
          Alder: {item.age}
        </p>
      </div>
    );
  };

  const personFilter = (query) => {
    return (item) => {
      if (item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
        return true;
      } else if (item.age.indexOf(query) !== -1) {
        return true;
      }
      return false;
    };
  };

  const personSelected = (person) => {
    console.log('selected person', person);
  };

  return (
    <div className="selector">
      <label htmlFor="person-selector" className="ffe-form-label selector-label">Velg person</label>
      <BaseSelector
        items={ people }
        renderItemRow={ renderPersonRow }
        multiple={ false }
        onChange={ onChange }
        filter={ personFilter }
        locale="nb"
        inputId="person-selector"
        placeholder="Velg person"
        noMatches="Ingen personer matchet"
        selectedItems={[]}
        onFocus={onFocus}
        value=""
        onItemSelected={personSelected}
      />
    </div>
  );
};

export default PersonSelectorExample;
