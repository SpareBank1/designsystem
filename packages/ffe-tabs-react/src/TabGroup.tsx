import React, { RefObject, useState } from 'react';
import classNames from 'classnames';
import { mergeRefs } from './mergeRefs';
import { TabProps } from './Tab';

export interface TabGroupProps
    extends Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {
    /** Applies the noBreak modifier to avoid it collapsing over multiple lines */
    noBreak?: boolean;
    /** The children of the TabGroup component */
    children: React.ReactElement<TabProps>[];
}

export const TabGroup: React.FC<TabGroupProps> = ({
    className,
    noBreak,
    children,
    ...rest
}) => {
    const [tabs] = useState<RefObject<HTMLButtonElement>[] | null | undefined>(
        React.Children.map(children, () => React.createRef()) ?? [],
    );

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            const currentFocus = document.activeElement;
            const currentTab = tabs?.find(tab => tab?.current === currentFocus);
            const currentIndex = currentTab ? tabs?.indexOf(currentTab) : 0;

            if (e.key === 'ArrowRight') {
                const nextTab =
                    tabs?.[((currentIndex ?? 0) + 1) % (tabs?.length || 1)]
                        ?.current;
                nextTab?.focus();
            } else if (e.key === 'ArrowLeft') {
                const previousTab =
                    tabs?.[
                        ((currentIndex ?? 0) - 1 + (tabs?.length || 1)) %
                            (tabs?.length || 1)
                    ]?.current;
                previousTab?.focus();
            }
        }
    };

    return (
        //Es-lint klager på at hvis man har onkeydown så må man også ha tabindex for å
        //gjøre komponenten reachable by keyboard, men onkeydown håndterer dette og det skal være
        //trygt å ignorere denne regelen.
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
