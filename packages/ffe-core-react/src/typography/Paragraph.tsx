import React, { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';

export interface ParagraphProps extends ComponentPropsWithoutRef<'p'> {
    /** Makes this paragraph a lead paragraph, typically used directly below a heading. */
    lead?: boolean;
    /** Makes this paragraph a sub-lead paragraph, typically used directly below a lead paragraph. */
    subLead?: boolean;
    /** Use if text alignment should override that of its container. */
    textCenter?: boolean;
    /** Use if text alignment should override that of its container. */
    textLeft?: boolean;
    /** Use if the paragraph should have no margin. */
    noMargin?: boolean;
}

export function Paragraph(props: ParagraphProps) {
    const {
        children,
        className,
        lead,
        subLead,
        textCenter,
        textLeft,
        noMargin,
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
                { 'ffe-body-paragraph--no-margin': noMargin },
                className,
            )}
            {...rest}
        >
            {children}
        </p>
    );
}
