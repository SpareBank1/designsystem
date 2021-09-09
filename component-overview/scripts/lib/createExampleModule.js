const path = require('path');

module.exports = targetDir => files => {
    const data = files.map(fname => {
        const relFname = path.relative(targetDir, fname);

        return [
            path
                .join(
                    path.dirname(relFname),
                    path.basename(relFname, path.extname(relFname)),
                )
                .replace(/\W/g, '_'),
            relFname,
        ];
    });

    return `${data.reduce(
        (acc, [name, file]) => `${acc}import * as ${name} from './${file}';\n`,
        '',
    )}export default { ${data.map(([name]) => name).join(', ')} };`;
};
