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
    lead: bool,
    subLead: bool,
    textCenter: bool,
    textLeft: bool,
};
