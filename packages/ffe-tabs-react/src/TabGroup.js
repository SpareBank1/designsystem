import React, { useCallback, useRef, useEffect } from 'react';
import { node, string, bool } from 'prop-types';
import classNames from 'classnames';
import RefTab from './refTab';

export default function TabGroup({ children, className, noBreak, ...rest }) {
    const childrenRef = useRef([]);
    const currentSelectedTab = useRef(0);

    // Add element as a ref
    const registerRef = useCallback((tab, index) => {
        childrenRef.current[index] = tab;
        currentSelectedTab.current = childrenRef.current.findIndex(
            specificTab => specificTab.props.selected,
        );
        return childrenRef.current[index];
    }, []);

    // What to do when keys are clicked
    const handleKeyPress = event => {
        if (event.code === 'ArrowLeft' || event.code === 'ArrowUp') {
            if (currentSelectedTab.current > 0) {
                currentSelectedTab.current = currentSelectedTab.current - 1;
                childrenRef.current[currentSelectedTab.current].focus();
                console.log(
                    'arrowleft',
                    childrenRef.current[currentSelectedTab.current],
                );
            }
            // if first tab selected: Do nothing.  If not first, go to the tab 1 to the left/ or up, depending on if the tabs have collapsed.
        } else if (event.code === 'ArrowRight' || event.code === 'ArrowDown') {
            const lastTabIndex = childrenRef.current.length - 1;
            if (currentSelectedTab.current < lastTabIndex) {
                currentSelectedTab.current = currentSelectedTab.current + 1;
                console.log(
                    'arrowright',
                    currentSelectedTab.current,
                    childrenRef.current[currentSelectedTab.current],
                );
            }
            // if last tab selected: Do nothing. If not last, go to the next tab, or down depending on if the tabs have collapsed.
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress, false);

        return () => {
            document.removeEventListener('keydown', handleKeyPress, false);
        };
    }, []);

    // Er alt tabgroup skal gjøre å sette focus. Enter keycode press kan settes i tab selv, og bytte blir utført som vanlig
    // Man kan legge til ref på hver component som brukes til å sette focus ved pilklikk.

    // Q: How to select another tab by pressing enter, when the tabs does not exist within this component?
    return (
        <div
            className={classNames(
                'ffe-tab-group',
                { 'ffe-tab-group--no-break': noBreak },
                className,
            )}
            role="tablist"
            {...rest}
        >
            {React.Children.map(children, (child, index) => (
                <RefTab {...child.props} ref={registerRef(child, index)} />
            ))}
        </div>
    );
}

TabGroup.propTypes = {
    /** TabGroup contents - a group of Tabs */
    children: node.isRequired,
    /** Additional css classes */
    className: string,
    /** Applies the noBreak modifier to avoid it collapsing over multiple lines */
    noBreak: bool,
};
