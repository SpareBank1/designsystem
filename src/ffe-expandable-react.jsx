import React from 'react';
import ComponentHeight from 'react-height';

class Expandable extends React.Component {

    constructor(props) {
        super(props);
        this.state = { height: -1 };

        this.onHeightReady = this.onHeightReady.bind(this);
    }

    onHeightReady(height) {
        this.setState({ height });
    }

    render() {
        const {
            children,
            customClass,
            expanded,
            expandTime = 0.5,
            folded = '',
            isOpen,
            isTable,
        } = this.props;

        const { height } = this.state;
        const ExpandableWrapperElementTag = isTable ? 'tr' : 'div';
        const ExpandedElementTag = isTable ? 'td' : 'div';

        const styles = {
            maxHeight: isOpen ? height : 0,
            overflow: 'hidden',
            transition: `max-height ${expandTime}s ease-out`,
        };

        return (
            <ExpandableWrapperElementTag>
                {folded}
                <ExpandedElementTag className={customClass} style={styles}>
                    <ComponentHeight onHeightReady={this.onHeightReady}>
                        <div style={{ display: 'inline-block', width: '100%' }}>
                            { expanded || children }
                        </div>
                    </ComponentHeight>
                </ExpandedElementTag>
            </ExpandableWrapperElementTag>
        );
    }
}

Expandable.propTypes = {
    children: React.PropTypes.node,
    customClass: React.PropTypes.string,
    expanded: React.PropTypes.node,
    expandTime: React.PropTypes.number,
    folded: React.PropTypes.node,
    isOpen: React.PropTypes.bool,
    isTable: React.PropTypes.bool
};

export default Expandable;
