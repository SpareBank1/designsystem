import React from 'react';
import { bool, node, string } from 'prop-types';
import classNames from 'classnames';

export default function Paragraph(props) {
    const {
        children,
        className,
        lead,
        subLead,
        textCenter,
        textLeft,
        ...rest
    } = props;

    const [mainClass] = [
        lead && 'ffe-lead-paragraph',
        subLead && 'ffe-sub-lead-paragraph',
        'ffe-body-paragraph',
    ].filter(Boolean);

    return (
        <p
            className={classNames(
                mainClass,
                { 'ffe-body-paragraph--text-center': textCenter },
                { 'ffe-body-paragraph--text-left': textLeft },
                className,
            )}
            {...rest}
        >
            {children}
        </p>
    );
}

Paragraph.propTypes = {
    children: node.isRequired,
    className: string,
    /** Makes this paragraph a lead paragraph, typically used directly below a heading. */
    lead: bool,
    /** Makes this paragraph a sub-lead paragraph, typically used directly below a lead paragraph. */
    subLead: bool,
    /** Use if text alignment should override that of its container. */
    textCenter: bool,
    /** Use if text alignment should override that of its container. */
    textLeft: bool,
};
