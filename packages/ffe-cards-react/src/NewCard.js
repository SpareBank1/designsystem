import React from 'react';
import classNames from 'classnames';
import { node, string, bool } from 'prop-types';

import GenericCard from './GenericCard';

const NewCard = props => {
    const {
        className,
        details,
        heading,
        icon,
        condensed,
        greyCharcoal,
        ...rest
    } = props;

    return (
        <GenericCard
            className={ classNames(
                'ffe-new-card',
                { 'ffe-new-card--condensed': condensed },
                { 'ffe-new-card--grey-charcoal': greyCharcoal },
                className
            ) }
            { ...rest }
        >
            {icon &&
            React.cloneElement(icon, {
                className: classNames(
                    'ffe-new-card__icon',
                    icon.props.className
                ),
            })}
            <div className="ffe-new-card__body">
                {heading && <p className="ffe-new-card__heading">{heading}</p>}
                {details && <p className="ffe-new-card__details">{details}</p>}
            </div>
        </GenericCard>
    );
};

NewCard.propTypes = {
    className: string,
    /** Text shown at the top */
    heading: string,
    /** Bottom text */
    details: node,
    /** A rendered icon */
    icon: node,
    /** Smaller icon and less space */
    condensed: bool,
    /** Icon and text will all be ffe-grey-charcoal */
    greyCharcoal: bool,
};

export default NewCard;
