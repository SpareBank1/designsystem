import React from 'react';
import { func, arrayOf, number, string, object, bool } from 'prop-types';
import Checkbox from 'ffe-checkbox-react';
import Suggestion from './suggestion-item';
import txt from '../i18n/i18n';

const renderSelectAll = (allSelected, locale) => {
  return (
    <div className='ffe-account-suggestion__account--multi ffe-account-suggestion__select-all'>
      <Checkbox
        checked={allSelected}
        name='ffe-account-suggestion__select-all-label'
        inline={ false }
        tabIndex={-1}
        disabled={ true }
      />
      <div className='ffe-account-suggestion__content-wrapper'>
        <span className='ffe-account-suggestion__name'>{txt[locale].SELECT_ALL}</span>
      </div>
    </div>);
};

export default function SuggestionList(props) {
  const {
    suggestions,
    highlightedIndex,
    renderSuggestion,
    renderNoMatches,
    id,
    allSelected,
    locale
  } = props;
  return (
    <ul
      className='ffe-base-selector__suggestion-container-list'
      role='listbox'
      id={id}
    >
      { suggestions.length > 0 ?
        suggestions.map((item, index) => {
          return (
            <Suggestion
              {...props}
              key={index}
              item={item}
              id={`suggestion-item-${index}`}
              isHighlighted={index === highlightedIndex}
              render={item.id !=="all-accounts" ? renderSuggestion : () => renderSelectAll(allSelected, locale)}
            />);
        }) :
        <li>{renderNoMatches()}</li>
      }
    </ul>
  );
}

SuggestionList.propTypes = {
  suggestions: arrayOf(object).isRequired,
  highlightedIndex: number.isRequired,
  renderSuggestion: func.isRequired,
  renderNoMatches: func,
  allSelected: bool,
  locale: string,
  id: string.isRequired
};

SuggestionList.defaultProps = {
  renderNoMatches: () => {}
};
