import React from 'react';
import classNames from 'classnames';
import {
    oneOfType,
    node,
    func,
    string,
    elementType,
    bool,
    oneOf,
} from 'prop-types';

const CardBase = React.forwardRef((props, ref) => {
    const {
        className,
        element: Element = 'a',
        bgColor,
        bgDarkmodeColor,
        shadow = false,
        noMargin = false,
        textCenter = false,
        children,
        ...rest
    } = props;
    return (
        <Element
            className={classNames('ffe-card-base', className, {
                [`ffe-card-base--bg-${bgColor}`]: bgColor,
                [`ffe-card-base--dm-bg-${bgDarkmodeColor}`]: bgDarkmodeColor,
                'ffe-card-base--box-shadow': shadow,
                'ffe-card-base--no-margin': noMargin,
                'ffe-card-base--text-center': textCenter,
            })}
            ref={ref}
            {...rest}
        >
            {children}
        </Element>
    );
});

CardBase.propTypes = {
    className: string,
    bgColor: oneOf(['sand-30', 'sand-70', 'frost-30', 'syrin-30', 'syrin-70']),
    bgDarkmodeColor: oneOf(['natt', 'svart', 'koksgraa']),
    shadow: bool,
    noMargin: bool,
    textCenter: bool,
    children: node,
    /** The element to render the card as */
    element: oneOfType([func, string, elementType]),
};

export default CardBase;
