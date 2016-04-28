import React from 'react';
import ComponentHeight from './ffe-component-height';

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const prefixed = (attribute, value) => {
    const capAttr = capitalize(attribute);
    return ['Moz', 'Webkit', 'O']
        .map(_ => _ + capAttr)
        .concat([attribute])
        .reduce((result, _) => (result[_] = value) && result, {});
};

class Expandable extends React.Component {

    constructor() {
        super();
        this.state = { height: -1 };
    }

    render() {
        const {
            children,
            expanded,
            folded,
            isOpen,
            customClass,
            expandTime = 0.5
        } = this.props;

        const { height } = this.state;

        const styles = Object.assign({
            maxHeight: isOpen ? height : 0,
            overflow: 'hidden'
        }, prefixed('transition', `all ${expandTime}s`));

        return (
            <div>
                { folded || '' }
                <div style={ styles } className={ customClass }>
                    <ComponentHeight
                        onHeightReady={ value => {
                            this.setState({
                                height: value
                            });
                        } }
                    >
                            { expanded || children }
                    </ComponentHeight>
                </div>
            </div>
        );
    }
}

Expandable.propTypes = {
    isOpen: React.PropTypes.bool.isRequired,
    expanded: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.element),
        React.PropTypes.element,
        React.PropTypes.string
    ]),
    folded: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.element),
        React.PropTypes.element,
        React.PropTypes.string
    ]),
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.element),
        React.PropTypes.element,
        React.PropTypes.string
    ]),
    customClass: React.PropTypes.string,
    expandTime: React.PropTypes.number
};

export default Expandable;
