import Checkbox from '../src/checkbox';
import React from 'react';

export const MainExample = (
    <Checkbox
        onChange={ () => {} }
        checked={false}
        name="Yellow"
        label="Yellow"
    />
);

export default props => <Checkbox
                            onChange={props.onChange}
                            checked={props.checked}
                            name={props.name}
                            label={props.label}
                            noMargins={props.noMargins}
                            tabIndex={props.tabIndex}
                        />;
