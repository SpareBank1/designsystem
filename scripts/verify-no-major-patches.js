const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
    // Load sb1-dependencies.json
    const dependenciesFilePath = path.resolve(
        __dirname,
        'sb1-dependencies.json',
    );
    const sb1Dependencies = JSON.parse(
        fs.readFileSync(dependenciesFilePath, 'utf-8'),
    );

    // Create a map of package dependencies
    const dependencyMap = sb1Dependencies.reduce((map, entry) => {
        map[entry.packageName] = entry.sb1Dependencies || [];
        return map;
    }, {});

    // Track packages with breaking changes
    const breakingChangePackages = new Set();

    // Get all commit hashes and messages for the current branch compared to develop
    const commits = execSync(
        'git log --format="%H %s" develop..HEAD --no-merges',
        { encoding: 'utf-8' },
    )
        .trim()
        .split('\n');

    commits.forEach(commitLine => {
        const [commitHash, ...commitMessageParts] = commitLine.split(' ');
        const commitMessage = commitMessageParts.join(' ');

        // Check if the commit message contains "BREAKING CHANGE"
        const isBreakingChange = commitMessage.includes('BREAKING CHANGE');

        console.log(`Commit: ${commitHash}`);
        console.log(`Message: ${commitMessage}`);
        if (isBreakingChange) {
            console.log('  - This commit contains a BREAKING CHANGE!');
        }

        // Get the list of files changed in the commit
        const changedFiles = execSync(
            `git diff-tree --no-commit-id --name-only -r ${commitHash}`,
            { encoding: 'utf-8' },
        )
            .trim()
            .split('\n')
            .filter(filePath => filePath.startsWith('packages/'));

        // Extract and list the top-level folder names
        const topFolders = new Set(
            changedFiles.map(filePath => filePath.split('/')[1]), // Get the first folder after 'packages/'
        );

        topFolders.forEach(folder => {
            const packageName = `@sb1/${folder}`;
            console.log(`  - Package: ${packageName}`);

            // If this commit has a breaking change, track the package
            if (isBreakingChange) {
                breakingChangePackages.add(packageName);
            }

            // Find and list packages that depend on this package
            const dependents = Object.entries(dependencyMap)
                .filter(([_, dependencies]) =>
                    dependencies.includes(packageName),
                )
                .map(([dependentPackage]) => dependentPackage);

            if (dependents.length > 0) {
                console.log(`    - Dependents: ${dependents.join(', ')}`);
            }
        });
    });

    // Find all dependent packages missing breaking changes
    const dependentPackagesMissingBreakingChanges = [];
    breakingChangePackages.forEach(packageName => {
        const dependents = Object.entries(dependencyMap)
            .filter(([_, dependencies]) => dependencies.includes(packageName))
            .map(([dependentPackage]) => dependentPackage);

        dependents.forEach(dependent => {
            if (!breakingChangePackages.has(dependent)) {
                dependentPackagesMissingBreakingChanges.push(dependent);
            }
        });
    });

    if (dependentPackagesMissingBreakingChanges.length > 0) {
        console.log('\nDependent packages missing breaking changes:');
        dependentPackagesMissingBreakingChanges.forEach(packageName => {
            console.log(`  - ${packageName}`);
        });
        throw new Error(
            'Some dependent packages are missing breaking changes!',
        );
    } else {
        console.log(
            '\nAll dependent packages are properly marked with breaking changes.',
        );
    }
} catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
}
