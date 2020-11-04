import React, { createRef, useEffect, useState } from 'react';
import { node, oneOf, string } from 'prop-types';
import classNames from 'classnames';

const ARROW_UP = 'ArrowUp';
const ARROW_DOWN = 'ArrowDown';
const HOME = 'Home';
const END = 'End';

const Accordion = ({ children, headingLevel, className, ...rest }) => {
    const [isHeadingFocused, setIsHeadingFocuses] = useState(false);
    const [refs, setRefs] = useState([]);

    const handleFocus = () => setIsHeadingFocuses(true);
    const handleBlur = () => setIsHeadingFocuses(false);

    useEffect(() => {
        setRefs(prevRefs =>
            Array(children.length)
                .fill(null)
                .map((_, i) => prevRefs[i] || createRef()),
        );
    }, [children.length]);

    const handleKeyDown = event => {
        if (isHeadingFocused) {
            if (
                [HOME, END, ARROW_UP, ARROW_DOWN].some(key => key === event.key)
            ) {
                event.preventDefault();
            }

            const focusIndex = refs.findIndex(
                ref => ref.current === document.activeElement,
            );
            if (event.key === HOME) {
                refs[0].current.focus();
            } else if (event.key === END) {
                refs[refs.length - 1].current.focus();
            } else if (event.key === ARROW_UP) {
                if (focusIndex === 0) {
                    refs[refs.length - 1].current.focus();
                } else {
                    refs[focusIndex - 1].current.focus();
                }
            } else if (event.key === ARROW_DOWN) {
                if (focusIndex === refs.length - 1) {
                    refs[0].current.focus();
                } else {
                    refs[focusIndex + 1].current.focus();
                }
            }
        }
    };

    return (
        <div // eslint-disable-line jsx-a11y/no-static-element-interactions
            onKeyDown={handleKeyDown}
            className={classNames(className, 'ffe-accordion', {
                'ffe-accordion--focus': isHeadingFocused,
            })}
            {...rest}
        >
            {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, {
                    headingLevel,
                    ref: refs[index],
                    onFocus: handleFocus,
                    onBlur: handleBlur,
                });
            })}
        </div>
    );
};

Accordion.propTypes = {
    /** Accordion items */
    children: node,
    /** The level of headings in the AccordionItems */
    headingLevel: oneOf([1, 2, 3, 4, 5, 6]).isRequired,
    /** Class assigned the container */
    className: string,
};

export default Accordion;
