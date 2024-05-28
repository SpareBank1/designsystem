import React, { RefObject, useEffect, useState } from 'react';
import classNames from 'classnames';
import { mergeRefs } from './mergeRefs';
import { TabProps } from './Tab';

export interface TabGroupProps
    extends Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {
    /** Applies the noBreak modifier to avoid it collapsing over multiple lines */
    noBreak?: boolean;
    children: React.ReactElement<TabProps>[];
}

export const TabGroup: React.FC<TabGroupProps> = ({
    className,
    noBreak,
    children,
    ...rest
}) => {
    const [tabs, setTabs] = useState<
        RefObject<HTMLButtonElement>[] | null | undefined
    >(React.Children.map(children, () => React.createRef()) ?? []);

    useEffect(() => {
        setTabs(React.Children.map(children, () => React.createRef()));
    }, [children]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowRight') {
            console.log(tabs?.[1].current);
        }
        if (e.key === 'ArrowLeft') {
            console.log(tabs?.[0].current);
        }
    };

    return (
        // eslint-disable-next-line jsx-a11y/interactive-supports-focus
        <div
            className={classNames(
                'ffe-tab-group',
                { 'ffe-tab-group--no-break': noBreak },
                className,
            )}
            role="tablist"
            onKeyDown={handleKeyDown}
            {...rest}
        >
            {React.Children.map(
                children,
                (child, index) =>
                    React.isValidElement(child) &&
                    React.cloneElement(child, {
                        ...child.props,
                        ref: mergeRefs([child.props.ref, tabs?.[index]]),
                    }),
            )}
        </div>
    );
};
