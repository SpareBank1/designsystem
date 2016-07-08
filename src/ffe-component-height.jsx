import React from 'react';

class ReactHeight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
    }

    componentDidMount() {
        let margins = 0;
        if (this.wrapper.firstChild) {
            const styles = window.getComputedStyle(this.wrapper.firstChild);
            const marginTop = parseFloat(styles['marginTop'] || 0);
            const marginBottom = parseFloat(styles['marginBottom'] || 0);
            margins = Math.ceil(marginTop + marginBottom);
        }

        const height = this.wrapper.clientHeight + margins;
        if (height !== this.state.height) {
            this.setState({ height }, () => this.props.onHeightReady(this.state.height));
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.height === this.state.height;
    }

    setWrapperRef(el) {
        this.wrapper = el;
    }

    render() {
        const { children } = this.props;
        return <div ref={ this.setWrapperRef }>
            { children }
        </div>;
    }
}

ReactHeight.propTypes = {
    children: React.PropTypes.node.isRequired,
    onHeightReady: React.PropTypes.func.isRequired
};

export default ReactHeight;
