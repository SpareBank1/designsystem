import React, { Component } from 'react';
import { arrayOf, bool, func, node, number, string } from 'prop-types';
import { Collapse } from 'react-collapse';
import ChevronIkon from '@sb1/ffe-icons-react/lib/chevron-ikon';
import classNames from 'classnames';

class AccordionItem extends Component {
    state = {
        open: this.props.defaultOpen,
    };

    getOpen = () => {
        if (this.props.open !== undefined) {
            return this.props.open;
        }
        return this.state.open;
    };

    onClick = e => {
        if (
            this.props.ignoredNodeNames.some(name => name === e.target.nodeName)
        ) {
            return;
        }
        this.toggle();
    };

    onClickEnterAndSpace = e => {
        const enterKey = 13;
        const spaceBar = 32;
        if ([enterKey, spaceBar].includes(e.keyCode)) {
            this.onClick(e);
        }
    };

    toggle = () => {
        const open = this.getOpen();
        this.props.onToggleOpen(!open);
        this.setState({ open: !open });
    };

    render() {
        const {
            ariaLabel,
            children,
            hasNestedCollapse,
            index,
            title,
            uuid,
        } = this.props;

        const open = this.getOpen();

        return (
            <li
                className={classNames({
                    'ffe-accordion-item': true,
                    'ffe-accordion-item--open': open,
                })}
            >
                <div
                    tabIndex={0}
                    aria-controls={`panel-${uuid}-${index}`}
                    aria-expanded={open}
                    aria-label={ariaLabel}
                    className="ffe-accordion-item__toggler"
                    id={`tab-${uuid}-${index}`}
                    onClick={this.onClick}
                    onKeyUp={this.onClickEnterAndSpace}
                    role="tab"
                >
                    <span className="ffe-accordion-item__toggler-content">
                        <span className="ffe-accordion-item__title">
                            {title}
                        </span>
                        <ChevronIkon className="ffe-accordion-item__icon" />
                    </span>
                </div>
                <Collapse hasNestedCollapse={hasNestedCollapse} isOpened={open}>
                    <div
                        className="ffe-accordion-item__content"
                        role="tabpanel"
                        id={`panel-${uuid}-${index}`}
                        aria-hidden={!open}
                        aria-labelledby={`tab-${uuid}-${index}`}
                    >
                        {children}
                    </div>
                </Collapse>
            </li>
        );
    }
}

AccordionItem.propTypes = {
    /** A label for the accordion item */
    ariaLabel: string,
    /** The content shown when an accordion item is expanded */
    children: node,
    /** Set to true if there will be nested collapsable elements inside the expandedContent prop */
    hasNestedCollapse: bool,
    /** List of node names the toggle click handler will ignore */
    ignoredNodeNames: arrayOf(string),
    /** The index of the accordion item in the current accordion */
    index: number,
    /** Controls whether the accordion item is open. If omitted, this state will be handled internally */
    open: bool,
    /** Sets whether the accordion item is open by default. Only use this if not specifying the `open` prop  */
    defaultOpen: bool,
    /** Callback that fires whenever the accordion item is opened or closed */
    onToggleOpen: func,
    /** The title */
    title: node,
    /** A unique ID, usually provided by the wrapping <Accordion /> element */
    uuid: string,
};

AccordionItem.defaultProps = {
    defaultOpen: false,
    hasNestedCollapse: false,
    ignoredNodeNames: [],
    onToggleOpen: f => f,
};

export default AccordionItem;
