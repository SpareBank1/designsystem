//For å lenke lokale pakker manuelt i prosjektet
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const packagesDir = path.resolve(__dirname, 'packages');

try {
    const folders = fs.readdirSync(packagesDir).filter(folder => {
        const folderPath = path.join(packagesDir, folder);
        return fs.statSync(folderPath).isDirectory();
    });

    folders.forEach(folder => {
        const folderPath = path.join(packagesDir, folder);
        console.log(`Running 'npm link' in ${folderPath}...`);
        execSync('npm link', { cwd: folderPath, stdio: 'inherit' });
    });

    console.log('All packages have been linked successfully.');
} catch (error) {
    console.error('An error occurred:', error.message);
}