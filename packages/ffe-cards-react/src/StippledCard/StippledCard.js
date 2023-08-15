import React from 'react';
import classNames from 'classnames';
import {
    bool,
    elementType,
    element,
    func,
    node,
    oneOfType,
    string,
    shape,
    oneOf,
} from 'prop-types';
import { Text, Title, Subtext, CardName } from '../components';

const StippledCard = ({
    className,
    element: Element,
    children,
    img,
    condensed,
    ...rest
}) => {
    return (
        <Element
            className={classNames(
                'ffe-stippled-card',
                { 'ffe-stippled-card--condensed': condensed },
                className,
            )}
            {...rest}
        >
            <div
                className={classNames('ffe-stippled-card__img', {
                    'ffe-stippled-card__img--icon': img?.type === 'icon',
                })}
                aria-hidden={img?.type === 'icon'}
            >
                {img?.element}
            </div>
            <div>
                {typeof children === 'function'
                    ? children({ CardName, Title, Text, Subtext })
                    : children}
            </div>
        </Element>
    );
};

StippledCard.defaultProps = {
    element: 'a',
};

StippledCard.propTypes = {
    className: string,
    /** The element to render the card as */
    element: oneOfType([func, string, elementType]),
    /** Function that's passed available sub-components as arguments, or regular children */
    children: oneOfType([func, node]).isRequired,
    /** Image to be rendered*/
    img: shape({
        element: element.isRequired,
        type: oneOf(['icon', 'custom']).isRequired,
    }),
    /** Smaller icon and less space */
    condensed: bool,
};

export default StippledCard;
