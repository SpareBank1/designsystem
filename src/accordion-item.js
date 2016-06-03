import FFEExpandable from 'ffe-expandable-react';
import React, { PropTypes } from 'react';
import Chevron from 'ffe-icons-react/chevron-ikon';
import classNames from 'classnames';

const isIgnoredNode = (node, ignoredNodes) => ignoredNodes.some(name => name === node.nodeName);

export default React.createClass({
    propTypes: {
        isOpen: PropTypes.bool,
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
        this.setState({ isOpen: !this.state.isOpen });
    },

    onClick(e) {
        const ignoredNodes = this.props.ignoredNodeNames || [];
        if (!isIgnoredNode(e.target, ignoredNodes)) this.toggle();
    },

    render(props) {
        const { isOpen } = this.state;

        const iconClasses = classNames('expandable-list-row-icon', {
            'expandable-list-row-icon--open': isOpen 
        });

        const rowClasses = classNames('expandable-list-row', {
            'expandable-list-row--open': isOpen 
        });

        return <li className={ rowClasses } aria-expanded={ isOpen } >
                    <a 
                        href="javascript:;" 
                        className="expandable-list-row-toggler"
                        onClick={ this.onClick }>
                        <Chevron className={ iconClasses } />
                        <div>
                            { this.props.children }
                        </div>
                    </a>
                    <FFEExpandable
                                isOpen={ isOpen }
                                folded=""
                                expanded={ 
                                    <div className="expandable-list-row-content">
                                        { this.props.expandedContent }
                                    </div> }
                    />
                </li>;
    }
});