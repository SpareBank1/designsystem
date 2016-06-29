import FFEExpandable from 'ffe-expandable-react';
import React, { PropTypes } from 'react';
import Chevron from 'ffe-icons-react/chevron-ikon';
import classNames from 'classnames';

const createClasses = (baseClass, isOpen, type) => classNames(baseClass, {
    [`${baseClass}--open`]: isOpen,
    [`${baseClass}--${type}`]: true
});

const isIgnoredNode = (node, ignoredNodes) => ignoredNodes.some(name => name === node.nodeName);

export default React.createClass({
    propTypes: {
        isOpen: PropTypes.bool,
        onOpen: PropTypes.func,
        onClose: PropTypes.func,
        type: PropTypes.oneOf(['white', 'blue']),
        index: PropTypes.number,
        ignoredNodeNames: PropTypes.array,
        children: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element,
            PropTypes.array
        ]).isRequired,
        expandedContent: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element,
            PropTypes.array
        ]).isRequired
    },

    getInitialState() {
        return { isOpen: this.props.isOpen || false };
    }, 

    toggle() {
        if (this.props.onClose && this.state.isOpen) this.props.onClose();
        else if (this.props.onOpen && !this.state.isOpen) this.props.onOpen();
        this.setState({ isOpen: !this.state.isOpen });
    },

    onClick(e) {
        const ignoredNodes = this.props.ignoredNodeNames;

        if (ignoredNodes && isIgnoredNode(e.target, ignoredNodes)) return;
        this.toggle();
    },

    render(props) {
        const { isOpen } = this.state;
        const { type, index } = this.props;

        return <li 
                    className={ createClasses('ffe-accordion-item', isOpen, type) } >
                    <a 
                        id={`tab-${index}`}
                        href="javascript:;" 
                        className={ createClasses('ffe-accordion-item__toggler', isOpen, type) }
                        onClick={ this.onClick }
                        aria-expanded={ isOpen } 
                        role="tab"
                        aria-controls={`panel-${index}`}>
                        <Chevron className={ createClasses('ffe-accordion-item__icon', isOpen, type) } />
                        { this.props.children }
                    </a>
                    <FFEExpandable
                                isOpen={ isOpen }
                                folded=""
                                expanded={ 
                                    <div className={ createClasses('ffe-accordion-item__content', isOpen, type) } 
                                         role="tabpanel"
                                         id={`panel-${index}`}
                                         aria-hidden={ !isOpen }
                                         aria-labelledby={`tab-${index}`}>
                                        { this.props.expandedContent }
                                    </div> }
                    />
                </li>;
    }
});