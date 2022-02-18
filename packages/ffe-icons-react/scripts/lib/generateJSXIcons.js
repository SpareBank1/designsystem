const path = require('path');
const fs = require('fs');

const generateIcon = outDir => icon => {
    const jsxSourceCode = `import React from 'react';
import PropTypes from 'prop-types';

const svg = ${icon.svg};

const ${icon.iconName} = ({
    desc,
    title,
    ...rest
    }) => (
        <svg {...svg.props} {...rest}>
            {title && <title>{title}</title>}
            {desc && <desc>{desc}</desc>}
            {svg.props.children}
        </svg>
    );

${icon.iconName}.propTypes = {
    desc: PropTypes.string,
    title: PropTypes.string,
    focusable: PropTypes.oneOf([true, false, 'true', 'false', 'auto', 'undefined']),
};

export default ${icon.iconName};
`;

    fs.writeFileSync(path.join(outDir, `${icon.fileName}.js`), jsxSourceCode);
};

module.exports = (icons, outDir) => {
    icons.forEach(generateIcon(outDir));
};
