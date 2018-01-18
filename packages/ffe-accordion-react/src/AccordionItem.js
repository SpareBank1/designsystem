import React, { Component } from 'react';
import { arrayOf, bool, func, node, number, oneOf, string } from 'prop-types';
import { Collapse } from 'react-collapse';
import Chevron from 'ffe-icons-react/chevron-ikon';
import classNames from 'classnames';

const createClasses = (baseClass, isOpen, type) =>
    classNames(baseClass, {
        [`${baseClass}--open`]: isOpen,
        [`${baseClass}--blue`]: type === 'blue',
    });

class AccordionItem extends Component {
    constructor(props) {
        super();
        this.state = {
            isOpen: props.isOpen || false,
        };

        this.onClick = this.onClick.bind(this);
        this.onClickEnterAndSpace = this.onClickEnterAndSpace.bind(this);
    }

    onClick(e) {
        if (
            this.props.ignoredNodeNames.some(name => name === e.target.nodeName)
        ) {
            return;
        }
        this.toggle();
    }

    onClickEnterAndSpace(event) {
        const enterKey = 13;
        const spaceBar = 32;
        if ([enterKey, spaceBar].includes(event.keyCode)) {
            this.onClick(event);
        }
    }

    toggle() {
        const { isOpen } = this.state;

        if (isOpen) {
            this.props.onClose();
        } else {
            this.props.onOpen();
        }

        this.setState({ isOpen: !isOpen });
    }

    renderExpandedContent() {
        const { isOpen } = this.state;
        const { children, index, type, uuid } = this.props;

        return (
            <div
                className={createClasses(
                    'ffe-accordion-item__content',
                    isOpen,
                    type,
                )}
                role="tabpanel"
                id={`panel-${uuid}-${index}`}
                aria-hidden={!isOpen}
                aria-labelledby={`tab-${uuid}-${index}`}
            >
                {children}
            </div>
        );
    }

    render() {
        const { isOpen } = this.state;
        const {
            ariaLabel,
            hasNestedCollapse,
            index,
            type,
            title,
            uuid,
        } = this.props;

        return (
            <li className={createClasses('ffe-accordion-item', isOpen, type)}>
                <div
                    tabIndex={0}
                    aria-controls={`panel-${uuid}-${index}`}
                    aria-expanded={isOpen}
                    aria-label={ariaLabel}
                    className={createClasses(
                        'ffe-accordion-item__toggler',
                        isOpen,
                        type,
                    )}
                    id={`tab-${uuid}-${index}`}
                    onClick={this.onClick}
                    onKeyUp={this.onClickEnterAndSpace}
                    role="tab"
                >
                    <span className="ffe-accordion-item__toggler-content">
                        <span className="ffe-accordion-item__title">
                            {title}
                        </span>
                        <Chevron
                            className={createClasses(
                                'ffe-accordion-item__icon',
                                isOpen,
                                type,
                            )}
                        />
                    </span>
                </div>
                <Collapse
                    hasNestedCollapse={hasNestedCollapse}
                    isOpened={isOpen}
                >
                    {this.renderExpandedContent()}
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
    /** Specifies whether the accordion item is initially open */
    isOpen: bool,
    /** Callback that fires whenever the accordion item closes */
    onClose: func,
    /** Callback that fires whenever the accordion item opens */
    onOpen: func,
    /** The title */
    title: node,
    /**
     * Decides the color and theming of the accordion item, provided by the wrapping <Accordion /> element .
     * For internal use only
     * @ignore
     * */
    type: oneOf(['blue']),
    /** A unique ID, usually provided by the wrapping <Accordion /> element */
    uuid: string,
};

AccordionItem.defaultProps = {
    hasNestedCollapse: false,
    ignoredNodeNames: [],
    onClose: f => f,
    onOpen: f => f,
};

export default AccordionItem;
