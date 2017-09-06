import React, { Component } from 'react';
import {
    arrayOf,
    bool,
    func,
    node,
    number,
    oneOf,
    string
} from 'prop-types';
import FFEExpandable from 'ffe-expandable-react';
import Chevron from 'ffe-icons-react/chevron-ikon';
import classNames from 'classnames';

const createClasses = (baseClass, isOpen, type) => classNames(baseClass, {
    [`${baseClass}--open`]: isOpen,
    [`${baseClass}--blue`]: type === 'blue',
});

class AccordionItem extends Component {
    constructor(props) {
        super();
        this.state = {
            isOpen: props.isOpen,
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        if (this.props.ignoredNodeNames.some(name => name === e.target.nodeName)) {
            return;
        }
        this.toggle();
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
        const {
            expandedContent,
            index,
            type,
            uuid,
        } = this.props;

        return (
            <div
                className={ createClasses('ffe-accordion-item__content', isOpen, type) }
                role="tabpanel"
                id={ `panel-${uuid}-${index}` }
                aria-hidden={ !isOpen }
                aria-labelledby={ `tab-${uuid}-${index}` }
            >
                { expandedContent }
            </div>
        );
    }

    render(props) {
        const { isOpen } = this.state;
        const {
            ariaLabel,
            children,
            index,
            type,
            uuid,
        } = this.props;

        return (
            <li className={ createClasses('ffe-accordion-item', isOpen, type) }>
                <button
                    aria-controls={ `panel-${uuid}-${index}` }
                    aria-expanded={ isOpen }
                    aria-label={ ariaLabel }
                    className={ createClasses('ffe-accordion-item__toggler', isOpen, type) }
                    id={ `tab-${uuid}-${index}` }
                    onClick={ this.onClick }
                    role="tab"
                >
                    <Chevron className={ createClasses('ffe-accordion-item__icon', isOpen, type) } />
                    { children }
                </button>
                <FFEExpandable
                    expanded={ this.renderExpandedContent() }
                    isOpen={ isOpen }
                />
            </li>
        );
    }
}

AccordionItem.propTypes = {
    ariaLabel: string,
    children: node,
    expandedContent: node,
    ignoredNodeNames: arrayOf(string),
    index: number,
    isOpen: bool,
    onClose: func,
    onOpen: func,
    type: oneOf(['blue']),
    uuid: string,
};

AccordionItem.defaultProps = {
    ignoredNodeNames: [],
    onClose: f => f,
    onOpen: f => f,
};

export default AccordionItem;
