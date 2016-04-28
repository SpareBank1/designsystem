import React from 'react';
import { shouldComponentUpdate } from 'react/lib/ReactComponentWithPureRenderMixin';

const ReactHeight = React.createClass({
    propTypes: {
        children: React.PropTypes.node.isRequired,
        onHeightReady: React.PropTypes.func.isRequired
    },

    getInitialState() {
        return {
            height: 0
        };
    },

    componentDidMount() {
        const height = this.wrapper.clientHeight;

        this.setState({ height }, () => this.props.onHeightReady(this.state.height));
    },

    shouldComponentUpdate,

    componentDidUpdate() {
        if (this.wrapper) {
            const height = this.wrapper.clientHeight;
            if (height !== this.state.height) {
                this.setState({ height }, () => this.props.onHeightReady(this.state.height)); //eslint-disable-line react/no-did-update-set-state
            }
        }
    },

    setWrapperRef(el) {
        this.wrapper = el;
    },

    render() {
        const { children, ...props } = this.props;

        return <div ref={ this.setWrapperRef } {...props}>
            { children }
        </div>;
    }
});


export default ReactHeight;
