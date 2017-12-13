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
        this.setState({ isOpen : !this.state.isOpen });
        if (this.props.onClick) {
            this.props.onClick(evt);
        }
    }

    render() {
        const {
            'aria-label': ariaLabel,
            children,
            className,
            tabIndex,
            ...rest
        } = this.props;

        const { isOpen } = this.state;

        return (
            <span { ...rest }>
                <button
                    aria-label={ ariaLabel }
                    className={classNames(
                        'ffe-tooltip__icon',
                        { 'ffe-tooltip__icon--active': isOpen}
                    )}
                    onClick={ this.onToggle }
                    type="button"
                    tabIndex={tabIndex}
                >
                    ?
                </button>
                {children &&
                    <Collapse isOpened={ isOpen } aria-expanded={ String(isOpen) }>
                        <div
                            className={ classNames(
                                'ffe-small-text',
                                className
                            )}
                        >
                            { children }
                        </div>
                    </Collapse>
                }
            </span>

        );
    }
}

Tooltip.propTypes = {
    'aria-label': string,
    children: node,
    className: string,
    isOpen: bool,
    onClick: func,
    tabIndex: number,
};

export default Tooltip;
