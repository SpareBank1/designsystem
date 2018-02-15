import React from 'react';
import { node } from 'prop-types';

import { Grid } from 'ffe-grid-react';

const DetailList = ({ children }) => <Grid>{children}</Grid>;

DetailList.propTypes = {
    /**
     * A set of `Detail` components where each will be rendered as a row item
     */
    children: node.isRequired,
};

export default DetailList;
