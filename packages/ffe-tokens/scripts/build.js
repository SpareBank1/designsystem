const fs = require('node:fs');
const path = require('path');

let data;

try {
    data = fs.readFileSync(path.join(__dirname, '../colors.json'), 'utf8');
} catch (err) {
    console.error(err);
}

const log = fs.createWriteStream(path.join(__dirname, '../css/colors.css'), {
    flags: 'a',
});

log.write(':root, :host {\n');
Object.entries(JSON.parse(data).color).forEach(([group, value]) => {
    Object.entries(value).forEach(([number, rest]) =>
        log.write(`--ffe-farge-${group}-${number}: ${rest.value};\n`),
    );
});
log.write('}');
log.end();
