import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'rsg-components/Link';

export function ComponentsListRenderer({ classes, items }) {
    items = items.filter(item => item.name);

    if (!items.length) {
        return null;
    }

    return (
        <ul className="sb1ds-components-list">
            {items.map(({ heading, name, slug, content }) => (
                <li
                    className={classNames(
                        heading && 'sb1ds-components-list__item--heading',
                        'sb1ds-components-list__item',
                    )}
                    key={name}
                >
                    <Link
                        className={classNames('sb1ds-components-list__link', {
                            'sb1ds-components-list__link--heading': heading,
                        })}
                        href={`#${slug}`}
                    >
                        {name}
                    </Link>
                    {content}
                </li>
            ))}
        </ul>
    );
}

ComponentsListRenderer.propTypes = {
    items: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
};

export default ComponentsListRenderer;
