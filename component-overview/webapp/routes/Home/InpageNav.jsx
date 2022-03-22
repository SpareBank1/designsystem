import React from 'react';
import PropTypes from 'prop-types';
import { title } from 'case';

export default function InpageNav({ sections, filteredSections }) {
    return (
        <aside className="sb1ex-inpage-nav">
            <ul className="sb1ex-inpage-nav__list">
                {sections.map(section => (
                    <li key={section} className="sb1ex-inpage-nav__list-item">
                        {filteredSections.includes(section) ? (
                            <a
                                href={`#toc_${section}`}
                                className="sb1ex-inpage-nav__link"
                            >
                                {title(section)}
                            </a>
                        ) : (
                            title(section)
                        )}
                    </li>
                ))}
            </ul>
        </aside>
    );
}

InpageNav.propTypes = {
    sections: PropTypes.arrayOf(PropTypes.string),
    filteredSections: PropTypes.arrayOf(PropTypes.string),
};
