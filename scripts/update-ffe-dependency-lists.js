#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the sb1-dependencies.json file
const sb1DependenciesPath = path.join(__dirname, 'sb1-dependencies.json');
const sb1Dependencies = JSON.parse(
    fs.readFileSync(sb1DependenciesPath, 'utf8'),
);

// Filter packages that end with -react
const reactPackages = sb1Dependencies.filter(pkg =>
    pkg.packageName.endsWith('-react'),
);

// Base directory for packages
const packagesDir = path.join(__dirname, '..', 'packages');

// Process each React package
reactPackages.forEach(pkg => {
    try {
        // Extract the package name without the @sb1 prefix (e.g., "ffe-buttons-react")
        const packageFolderName = pkg.packageName.replace('@sb1/', '');

        // Create the full path to the package directory
        const packageDir = path.join(packagesDir, packageFolderName);

        // Check if the directory exists
        if (!fs.existsSync(packageDir)) {
            console.warn(`Directory does not exist: ${packageDir}`);
            return;
        }

        // Write the ffe-dependencies.json file
        const ffeDependenciesPath = path.join(
            packageDir,
            'ffe-dependencies.json',
        );
        fs.writeFileSync(
            ffeDependenciesPath,
            JSON.stringify(pkg.sb1Dependencies, null, 2),
        );

        console.log(`Created ${ffeDependenciesPath}`);
    } catch (error) {
        console.error(`Error processing ${pkg.packageName}:`, error);
    }
});

console.log(
    'ffe-dependencies.json files have been generated for all React packages.',
);
