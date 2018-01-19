import React from 'react';
import { array, bool } from 'prop-types';
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
    children: array.isRequired,
    medium: bool,
    large: bool,
};
