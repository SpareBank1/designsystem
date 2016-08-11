import React from 'react';
import ComponentHeight from 'react-height';

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
            isTable
        } = this.props;

        const { height } = this.state;
        let ExpandableWrapperElementTag = 'div';
        let ExpandedElementTag = 'div';

        const styles = {
            maxHeight: isOpen ? height : 0,
            overflow: 'hidden',
            transition: `max-height ${expandTime}s`
        };

        if (isTable) {
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
    expanded: React.PropTypes.node,
    folded: React.PropTypes.node,
    children: React.PropTypes.node,
    customClass: React.PropTypes.string,
    expandTime: React.PropTypes.number,
    isTable: React.PropTypes.bool
};

export default Expandable;
