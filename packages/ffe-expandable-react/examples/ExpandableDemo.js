import React, { Component } from 'react';
import Expandable from '../src/ffe-expandable-react.jsx';

const ComponentIpsum = () => (
    <p className="ffe-body-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
    </p>
);

class ExpandableDemo extends Component {
    constructor() {
        super();

        this.state = {
            expanded: false,
        };

        this.onToggle = this.onToggle.bind(this);
    }

    onToggle() {
        this.setState({ expanded: !this.state.expanded });
    }

    render() {
        return (
            <div className="ffe-body-text">
                <div className="ffe-section-wrapper">
                    <div className="ffe-content-container">
                        <h1 className="ffe-h1">Expandable content</h1>
                        <button onClick={this.onToggle}>Click to expand</button>
                        <Expandable isOpen={this.state.expanded} customClass="example-class">
                            <h2 className="ffe-h2">Congratulations!</h2>
                            <p className="ffe-lead-paragraph">You just expanded... your mind</p>
                            <ComponentIpsum />
                            <ComponentIpsum />
                            <ComponentIpsum />
                            <button className="button-in-expandable">
                                A button
                            </button>
                        </Expandable>
                        <h3 className="ffe-h3">Here is more content after the expandable content</h3>
                        <ComponentIpsum />
                            <button className="button-in-expandable">
                                A visible button
                            </button>
                        <ComponentIpsum />
                    </div>
                </div>
            </div>
        );
    }
}

export default ExpandableDemo;
