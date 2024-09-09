import React from 'react';
import PropTypes from 'prop-types';
import { title } from 'case';
import { LinkText } from '@sb1/ffe-core-react';

export default function InpageNav({
    sections,
    filteredSections,
    focusable = true,
}) {
    const conditionalTabIndex = focusable ? {} : { tabIndex: -1 };
    return (
        <nav className="sb1ex-inpage-nav" aria-label="Eksempelgrupper">
            <ul className="sb1ex-inpage-nav__list">
                {sections.map(section => (
                    <li key={section} className="sb1ex-inpage-nav__list-item">
                        {filteredSections.includes(section) ? (
                            <LinkText
                                href={`#toc_${section}`}
                                {...conditionalTabIndex}
                            >
                                {title(section)}
                            </LinkText>
                        ) : (
                            title(section)
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

InpageNav.propTypes = {
    sections: PropTypes.arrayOf(PropTypes.string),
    filteredSections: PropTypes.arrayOf(PropTypes.string),
    focusable: PropTypes.bool,
};
