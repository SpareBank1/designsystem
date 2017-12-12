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

    return (
        <p
            className={classNames(
                { 'ffe-body-paragraph': !lead && !subLead },
                { 'ffe-body-paragraph--text-center': !lead && !subLead && textCenter },
                { 'ffe-body-paragraph--text-left': !lead && !subLead && textLeft },
                { 'ffe-lead-paragraph': lead },
                { 'ffe-sub-lead-paragraph': subLead },
                className
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
