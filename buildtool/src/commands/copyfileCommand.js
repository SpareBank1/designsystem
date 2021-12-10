const copyfiles = require('copyfiles');

module.exports = function(source, dest) {
    copyfiles([source, dest], { up: true }, err => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`ffe-buildtool: copied ${source} to ${dest}`);
    });
};
