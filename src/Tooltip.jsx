import React from 'react';
import { bool, func, node, string } from 'prop-types';
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
            ...rest
        } = this.props;
        return (
            <span { ...rest }>
                <button
                    aria-label={ ariaLabel }
                    className="ffe-tooltip__icon"
                    onClick={ this.onToggle }
                    type="button"
                >
                    ?
                </button>
                <Collapse isOpened={ this.state.isOpen } aria-expanded={ String(this.state.isOpen) }>
                    <div
                        className={ classNames(
                            'ffe-small-text',
                            className
                        )}
                    >
                        { children }
                    </div>
                </Collapse>
            </span>

        );
    }
}

Tooltip.propTypes = {
    'aria-label': string,
    children: node.isRequired,
    className: string,
    isOpen: bool,
    onClick: func,
};

export default Tooltip;
