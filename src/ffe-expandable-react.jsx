import React from 'react';
import ComponentHeight from './ffe-component-height';

class Expandable extends React.Component {

    constructor(props) {
        super(props);
        this.state = { height: -1 };
    }

    render() {
        const {
            children,
            expanded,
            folded,
            isOpen,
            customClass,
            expandTime = 0.5,
            isTableRow
        } = this.props;

        const { height } = this.state;
        let ExpandableWrapperElementTag = 'div';
        let ExpandedElementTag = 'div';

        const styles = Object.assign({
            maxHeight: isOpen ? height : 0,
            overflow: 'hidden',
            transition: `all ${expandTime}s`
        });

        if (isTableRow) {
            ExpandableWrapperElementTag = 'tr';
            ExpandedElementTag = 'td';
        }

        return (
            <ExpandableWrapperElementTag>
                { folded || '' }
                <ExpandedElementTag style={ styles } className={ customClass }>
                    <ComponentHeight
                        onHeightReady={ value => {
                            this.setState({
                                height: value
                            });
                        } }
                    >
                        { expanded || children }
                    </ComponentHeight>
                </ExpandedElementTag>
            </ExpandableWrapperElementTag>
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
    expandTime: React.PropTypes.number,
    isTable: React.PropTypes.bool
};

export default Expandable;
