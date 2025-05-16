const path = require('path');
const fs = require('fs/promises');
const { makedirs } = require('./utils');
const { getIconNames } = require('./getIconNames');
const { getDownloads, downloadAll } = require('./downloadSvgs');
const { resizeAllSvgs } = require('./resizeSvg');

/**
 * Configuration for icon sizes and their target dimensions
 * @type {Array<{name: string, size: number, download: boolean}>}
 */
const SIZES = [
    { name: 'sm', size: 20, download: true },
    { name: 'md', size: 24, download: true },
    { name: 'lg', size: 32, download: false },
    { name: 'xl', size: 40, download: true },
];

const WEIGHTS = [300, 400, 500];
const FILLS = [0, 1]; // 0 = outlined, 1 = filled

/**
 * Creates the necessary directory structure for icons
 * @param {string} type - 'filled' or 'open'
 * @param {number} weight - Font weight
 * @param {string} size - Size name
 * @returns {Promise<string>} - Path to created directory
 */
async function createIconDirectory(type, weight, size) {
    const basePath = path.resolve(__dirname, '../icons');
    const dirPath =
        type === 'filled'
            ? path.join(basePath, type, size)
            : path.join(basePath, type, weight.toString(), size);

    await makedirs(dirPath);
    return dirPath;
}

/**
 * Downloads and processes icons for a specific configuration
 * @param {Array<string>} iconNames - List of icon names to process
 * @param {string} type - 'filled' or 'open'
 * @param {number} weight - Font weight
 * @param {number} fillValue - Fill state (0 or 1)
 */
async function processIconSet(iconNames, type, weight, fillValue) {
    console.log(`\n📦 Processing ${type} icons (weight: ${weight})`);

    // Download directly for sizes marked for download
    const downloadSizes = SIZES.filter(s => s.download);
    for (const sizeConfig of downloadSizes) {
        const dirPath = await createIconDirectory(
            type,
            weight,
            sizeConfig.name,
        );

        const downloads = getDownloads(
            iconNames,
            weight,
            fillValue,
            { name: sizeConfig.name, opsz: sizeConfig.size },
            dirPath,
        );

        console.log(`\n⬇️  Downloading ${sizeConfig.size}px SVG files...`);
        await downloadAll(downloads);
    }

    // Create 32px version from 40px
    const xlSize = SIZES.find(s => s.name === 'xl');
    const lgSize = SIZES.find(s => s.name === 'lg');

    if (xlSize && lgSize) {
        const xlDirPath = await createIconDirectory(type, weight, xlSize.name);
        const lgDirPath = await createIconDirectory(type, weight, lgSize.name);

        // Copy 40px files to 32px directory
        const files = await fs.readdir(xlDirPath);
        for (const file of files) {
            if (file.endsWith('.svg')) {
                await fs.copyFile(
                    path.join(xlDirPath, file),
                    path.join(lgDirPath, file),
                );
            }
        }

        // Resize 40px to 32px
        console.log('\n📐 Creating 32px version from 40px...');
        await resizeAllSvgs(lgDirPath, lgSize.size, {
            continueOnError: true,
            verbose: true,
        });
    }
}

/**
 * Main build function
 */
async function build() {
    try {
        console.log('🚀 Starting optimized icon build process...');

        console.log('📋 Fetching icon names...');
        const iconNames = await getIconNames();
        console.log(`✓ Found ${iconNames.length} icons`);

        for (const weight of WEIGHTS) {
            for (const fillValue of FILLS) {
                const type = fillValue === 1 ? 'filled' : 'open';
                await processIconSet(iconNames, type, weight, fillValue);
            }
        }

        console.log('\n✨ Build completed successfully!');
    } catch (error) {
        console.error('\n❌ Build failed:', error);
        process.exit(1);
    }
}

// Run the build process
build();
