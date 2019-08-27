import React, { useRef, useState, useEffect } from 'react';
import { string, bool, func, object } from 'prop-types';
import classNames from 'classnames';

const Collapse = ({ className, style, isOpen, onRest, ...rest }) => {
    const content = useRef();
    const [height, setHeight] = useState(() => (isOpen ? 'auto' : '0'));
    const [overflow, setOverflow] = useState(() =>
        isOpen ? 'visible' : 'hidden',
    );
    const [visibility, setVisibility] = useState(() =>
        isOpen ? 'visible' : 'hidden',
    );

    const setExpanded = () => {
        setHeight('auto');
        setOverflow('visible');
    };

    const setCollapsed = () => {
        setVisibility('hidden');
    };

    useEffect(() => {
        if (content.current) {
            if (isOpen && height !== 'auto') {
                setHeight(`${content.current.scrollHeight}px`);
                setVisibility('visible');
            } else if (!isOpen && height !== '0') {
                setHeight(`${content.current.scrollHeight}px`);
                window.requestAnimationFrame(() =>
                    setTimeout(() => {
                        setHeight('0');
                        setOverflow('hidden');
                    }),
                );
            }
        }
    }, [isOpen, height]);

    const onTransitionEnd = e => {
        if (e.target === content.current && e.propertyName === 'height') {
            if (isOpen) {
                setExpanded();
            } else {
                setCollapsed();
            }
            if (onRest) {
                onRest();
            }
        }
    };

    const mergedStyles = {
        ...style,
        willChange: 'height',
        height,
        overflow,
        visibility,
    };

    return (
        <div
            {...rest}
            ref={content}
            style={mergedStyles}
            className={classNames('ffe-collapse-transition', className)}
            onTransitionEnd={onTransitionEnd}
        />
    );
};

Collapse.displayName = 'Collapse';

Collapse.propTypes = {
    className: string,
    style: object,
    isOpen: bool,
    onRest: func,
};

export default Collapse;
