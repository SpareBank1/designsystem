import React from 'react';
import classNames from 'classnames';

export default function DescriptionList({ children, medium, large }) {
    return  <dl
    			className={
    				classNames(
						'ffe-description-list',
						{ 'ffe-description-list--md': medium },
						{ 'ffe-description-list--lg': large }
					)
    			}
            >
                {children}
            </dl>;
}

DescriptionList.propTypes = {
    children: React.PropTypes.array.isRequired,
    medium: React.PropTypes.bool,
    large: React.PropTypes.bool,
};