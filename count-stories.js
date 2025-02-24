const fs = require('fs');
const path = require('path');

function countStoryFiles(directoryPath) {
    const storyFiles = [];
    const excludedStoryFiles = [];
    const errors = [];

    // Folders to exclude
    const excludeFolders = [
        'ffe-accordion-react',
        'ffe-account-selector-react',
        'ffe-buttons-react',
        'ffe-cards-react',
        'ffe-chips-react',
        'ffe-collapse-react',
        'ffe-core',
        'ffe-core-react',
        'ffe-datepicker-react',
        'ffe-chart-donut-react',
        'ffe-feedback-react',
        'ffe-formatters',
        'ffe-form-react',
        'ffe-grid-react',
        'ffe-icons-react',
        'ffe-lists-react',
        'ffe-messages-react',
        'ffe-modals-react',
        'ffe-pagination-react',
        'ffe-searchable-dropdown-react',
        'ffe-spinner-react',
        'ffe-tabs-react',
    ];

    const colors = {
        pink: '\x1b[38;5;218m',
        blue: '\x1b[38;5;153m',
        green: '\x1b[38;5;151m',
        yellow: '\x1b[38;5;222m',
        purple: '\x1b[38;5;183m',
        cyan: '\x1b[38;5;159m',
        reset: '\x1b[0m',
        dim: '\x1b[2m',
        bold: '\x1b[1m',
        red: '\x1b[38;5;203m',
    };

    // Function to get color based on progress
    function getProgressColor(progress) {
        // Define color stops from red to yellow to green
        const colorStops = [
            { percent: 0, color: '203' }, // Light red
            { percent: 50, color: '222' }, // Light yellow
            { percent: 100, color: '151' }, // Light green
        ];

        // Find the two color stops we're between
        let start = colorStops[0];
        let end = colorStops[1];

        for (let i = 0; i < colorStops.length - 1; i++) {
            if (
                progress >= colorStops[i].percent &&
                progress <= colorStops[i + 1].percent
            ) {
                start = colorStops[i];
                end = colorStops[i + 1];
                break;
            }
        }

        // Calculate the color number based on progress between stops
        const range = end.percent - start.percent;
        const progressInRange = progress - start.percent;
        const percentage = progressInRange / range;

        const startColor = parseInt(start.color);
        const endColor = parseInt(end.color);
        const color = Math.round(
            startColor + (endColor - startColor) * percentage,
        );

        return `\x1b[38;5;${color}m`;
    }

    function traverseExcludedDirectory(currentPath) {
        try {
            const files = fs.readdirSync(currentPath);

            for (const file of files) {
                const filePath = path.join(currentPath, file);
                const stats = fs.statSync(filePath);

                if (stats.isDirectory() && !file.startsWith('.')) {
                    traverseExcludedDirectory(filePath);
                } else if (stats.isFile()) {
                    if (file.match(/\.stories\.(tsx|jsx)$/)) {
                        excludedStoryFiles.push({
                            name: file,
                            path: filePath,
                        });
                    }
                }
            }
        } catch (error) {
            errors.push(`Error accessing ${currentPath}: ${error.message}`);
        }
    }

    function traverseDirectory(currentPath) {
        try {
            const files = fs.readdirSync(currentPath);

            for (const file of files) {
                const filePath = path.join(currentPath, file);
                const stats = fs.statSync(filePath);

                if (stats.isDirectory()) {
                    // Check if it's an excluded folder at the root level
                    const isExcludedFolder = excludeFolders.includes(file);

                    // Skip node_modules and hidden directories
                    if (file !== 'node_modules' && !file.startsWith('.')) {
                        // If it's an excluded folder, store its stories separately
                        if (isExcludedFolder) {
                            traverseExcludedDirectory(filePath);
                        } else {
                            traverseDirectory(filePath);
                        }
                    }
                } else if (stats.isFile()) {
                    // Check if file matches story file pattern
                    if (file.match(/\.stories\.(tsx|jsx)$/)) {
                        storyFiles.push({
                            name: file,
                            path: filePath,
                        });
                    }
                }
            }
        } catch (error) {
            errors.push(`Error accessing ${currentPath}: ${error.message}`);
        }
    }

    traverseDirectory(directoryPath);

    // Calculate statistics
    const totalStories = storyFiles.length + excludedStoryFiles.length;
    const progressPercentage = (
        (excludedStoryFiles.length / totalStories) *
        100
    ).toFixed(1);

    // Print results
    console.log(
        `\n${colors.purple}${colors.bold} Storybook Story Files Analysis${colors.reset}`,
    );
    console.log(
        `${colors.dim}═══════════════════════════════${colors.reset}\n`,
    );

    console.log(`${colors.blue} Regular Story Files:${colors.reset}`);
    storyFiles.forEach(file => {
        console.log(
            `  ${colors.dim}└─${colors.reset} ${colors.cyan}${file.name}${colors.reset} ${colors.dim}(${file.path})${colors.reset}`,
        );
    });

    console.log(
        `\n${colors.pink} Progress on "Semantiske farger":${colors.reset}`,
    );
    console.log(`${colors.dim}──────────────────────────────${colors.reset}`);
    console.log(
        `  ${colors.yellow}Stories in excluded folders: ${excludedStoryFiles.length}${colors.reset}`,
    );
    console.log(
        `  ${colors.yellow}Stories remaining: ${storyFiles.length}${colors.reset}`,
    );
    console.log(
        `  ${colors.green}Progress: ${progressPercentage}% complete${colors.reset}`,
    );

    // Create progress bar with gradient color
    const progressColor = getProgressColor(parseFloat(progressPercentage));
    const progressBlocks = Math.floor(progressPercentage / 5);
    const emptyBlocks = 20 - progressBlocks;

    console.log(
        `  ${colors.bold}[${progressColor}${Array(progressBlocks)
            .fill('█')
            .join('')}${colors.dim}${Array(emptyBlocks)
            .fill('░')
            .join('')}${colors.reset}]`,
    );

    console.log(`\n${colors.purple} Summary:${colors.reset}`);
    console.log(`${colors.dim}──────────────${colors.reset}`);
    console.log(
        `  ${colors.cyan}Total story files: ${totalStories}${colors.reset}`,
    );
    console.log(
        `  ${colors.cyan}Excluded folders: ${colors.dim}${excludeFolders.join(', ')}${colors.reset}`,
    );

    if (errors.length > 0) {
        console.log(`\n${colors.yellow}⚠️  Errors encountered:${colors.reset}`);
        errors.forEach(error =>
            console.log(`  ${colors.red}❌ ${error}${colors.reset}`),
        );
    }

    return {
        totalFiles: storyFiles.length,
        excludedFilesCount: excludedStoryFiles.length,
        progressPercentage,
        files: storyFiles,
        excludedFiles: excludedStoryFiles,
        errors,
    };
}

// Get the directory path from command line argument, or use current directory
const targetDirectory = process.argv[2] || process.cwd();

// Run the counter
countStoryFiles(targetDirectory);
