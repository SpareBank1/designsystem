const path = require('path');
const fs = require('fs');

const preamble = `import * as React from 'react';

export interface FFEIconProps extends Omit<React.SVGAttributes<SVGElement>, 'focusable'> {
    desc?: string;
    title?: string;
    focusable?: boolean | 'true' | 'false' | 'auto' | 'undefined';
}

`;

module.exports = (icons, outDir) => {
    const sourceCode = icons.reduce(
        (code, icon) =>
            code.concat(
                `declare const ${icon.iconName}: React.FC<FFEIconProps>;\n`,
            ),
        preamble,
    );

    fs.writeFileSync(path.join(outDir, 'index.d.ts'), sourceCode);
};
