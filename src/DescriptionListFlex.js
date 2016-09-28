import React from 'react';

export default function DescriptionListFlex({ children }) {
    return  <dl className="ffe-description-list ffe-description-list--flex">
                {children}
            </dl>;
}

DescriptionListFlex.propTypes = {
    children: React.PropTypes.array.isRequired,
};