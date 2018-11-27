import React from 'react';
import { bool, node, string } from 'prop-types';
import uuid from 'uuid';
import classNames from 'classnames';

class ToggleSwitch extends React.Component {
    id = `toggle-${uuid.v4()}`;

    render() {
        const { children, className, alignRight, id, ...rest } = this.props;

        return (
            <div
                className={classNames(
                    'ffe-toggle-switch',
                    { 'ffe-toggle-switch--align-right': alignRight },
                    className,
                )}
            >
                <input
                    className="ffe-toggle-switch__input"
                    type="checkbox"
                    id={id || this.id}
                    {...rest}
                />
                <label
                    className="ffe-toggle-switch__label"
                    htmlFor={id || this.id}
                >
                    {children}
                </label>
            </div>
        );
    }
}

ToggleSwitch.propTypes = {
    /** The label text */
    children: node.isRequired,
    /** Any extra classes */
    className: string,
    /** Overrides the generated id with a custom one */
    id: string,
    /** Overrides the value attribute of the input with a custom one */
    value: string,
    /** Aligns the switch to the right */
    alignRight: bool,
};

ToggleSwitch.defaultProps = {
    alignRight: false,
    value: 'on',
};

export default ToggleSwitch;
