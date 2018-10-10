import React from 'react';
import { bool, func, node, string, number } from 'prop-types';
import classNames from 'classnames';
import { Collapse } from 'react-collapse';

class Tooltip extends React.Component {
    constructor({ isOpen }) {
        super();
        this.state = {
            isOpen: !!isOpen,
        };
        this.onToggle = this.onToggle.bind(this);
    }

    onToggle(evt) {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
        if (this.props.onClick) {
            this.props.onClick(evt);
        }
    }

    render() {
        const {
            'aria-label': ariaLabel,
            children,
            className,
            // eslint-disable-next-line no-unused-vars
            onClick,
            tabIndex,
            ...rest
        } = this.props;

        const { isOpen } = this.state;

        return (
            <span {...rest}>
                <button
                    aria-label={ariaLabel}
                    className={classNames('ffe-tooltip__icon', {
                        'ffe-tooltip__icon--active': isOpen,
                    })}
                    onClick={this.onToggle}
                    type="button"
                    tabIndex={tabIndex}
                >
                    ?
                </button>
                {children && (
                    <Collapse isOpened={isOpen} aria-expanded={String(isOpen)}>
                        <div
                            className={classNames('ffe-small-text', className)}
                        >
                            {children}
                        </div>
                    </Collapse>
                )}
            </span>
        );
    }
}

Tooltip.propTypes = {
    'aria-label': string,
    /** The children are rendered in the expanded tooltip. */
    children: node,
    /** The className is set on the root node of the expanded tooltip. */
    className: string,
    isOpen: bool,
    /** Optional listener for clicks on the tooltip button. Is passed the event object. */
    onClick: func,
    /** Sets the tabIndex of the tooltip button. */
    tabIndex: number,
};

export default Tooltip;
