const fs = require('fs');
const path = require('path');

// Path to the packages folder
const packagesDir = path.join(__dirname, '../packages');

// Function to read and parse package.json files
function listSb1Dependencies() {
    const packageMap = new Map();
    const resolvedDependencies = new Map();
    const results = [];

    // Read all subdirectories in the packages folder
    const packageDirs = fs.readdirSync(packagesDir);

    // Parse each package.json and store its dependencies in a map
    packageDirs.forEach(packageDir => {
        const packageJsonPath = path.join(
            packagesDir,
            packageDir,
            'package.json',
        );

        if (fs.existsSync(packageJsonPath)) {
            const packageJson = JSON.parse(
                fs.readFileSync(packageJsonPath, 'utf-8'),
            );
            const packageName = packageJson.name;
            const dependencies = packageJson.dependencies || {};
            const sb1Dependencies = Object.keys(dependencies).filter(dep =>
                dep.startsWith('@sb1/'),
            );

            packageMap.set(packageName, sb1Dependencies);
        }
    });

    // Process packages in the correct order
    while (packageMap.size > 0) {
        let processedAny = false;

        for (const [packageName, directDependencies] of packageMap.entries()) {
            // Check if all dependencies of this package have already been resolved
            const allDependenciesResolved = directDependencies.every(dep =>
                resolvedDependencies.has(dep),
            );

            if (allDependenciesResolved) {
                const allDependencies = new Set(directDependencies);

                // Add transitive dependencies
                directDependencies.forEach(dep => {
                    resolvedDependencies
                        .get(dep)
                        ?.forEach(transitiveDep =>
                            allDependencies.add(transitiveDep),
                        );
                });

                resolvedDependencies.set(
                    packageName,
                    Array.from(allDependencies),
                );
                results.push({
                    packageName,
                    sb1Dependencies: Array.from(allDependencies),
                });

                // Remove the package from the map
                packageMap.delete(packageName);
                processedAny = true;
            }
        }

        // If no package was processed in this iteration, there is a circular dependency
        if (!processedAny) {
            throw new Error(
                'Circular dependency detected or unresolved dependencies exist.',
            );
        }
    }

    return results;
}

// Run the function and save the results to a file
const sb1DependenciesList = listSb1Dependencies();
const outputFilePath = path.join(__dirname, 'sb1-dependencies.json');

fs.writeFileSync(
    outputFilePath,
    JSON.stringify(sb1DependenciesList, null, 2),
    'utf-8',
);
console.log(`Dependencies saved to ${outputFilePath}`);
