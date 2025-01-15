const fs = require('fs/promises');
const path = require('path');

/**
 * Validates and cleans SVG content
 * @param {string} content - SVG content to validate
 * @returns {string} - Cleaned SVG content
 */
function validateAndCleanSvg(content) {
    if (!content || typeof content !== 'string') {
        throw new Error('SVG content must be a non-empty string');
    }

    // Remove BOM and whitespace
    let cleaned = content.trim().replace(/^\uFEFF/, '');

    // Handle XML declaration
    if (cleaned.startsWith('<?xml')) {
        const xmlEnd = cleaned.indexOf('?>');
        if (xmlEnd !== -1) {
            cleaned = cleaned.slice(xmlEnd + 2).trim();
        }
    }

    // Handle potential doctype
    if (cleaned.startsWith('<!DOCTYPE')) {
        const doctypeEnd = cleaned.indexOf('>');
        if (doctypeEnd !== -1) {
            cleaned = cleaned.slice(doctypeEnd + 1).trim();
        }
    }

    // Find SVG tag
    const svgStart = cleaned.indexOf('<svg');
    if (svgStart === -1) {
        throw new Error(`File does not contain an SVG tag`);
    }

    // Only keep from SVG tag onwards
    return cleaned.slice(svgStart);
}

/**
 * Updates SVG size while preserving viewBox and aspect ratio
 * @param {Buffer|string} svgContent - Original SVG content
 * @param {number} size - Target size in pixels
 * @returns {string} - Modified SVG content
 */
function updateSvgSize(svgContent, size) {
    try {
        // Convert Buffer to string if needed
        const content = Buffer.isBuffer(svgContent)
            ? svgContent.toString('utf8')
            : svgContent;

        // Clean and validate content
        const cleanedContent = validateAndCleanSvg(content);

        // Find SVG opening tag and its attributes
        const svgTagMatch = cleanedContent.match(/<svg([^>]*)>/);
        if (!svgTagMatch) {
            throw new Error('Could not parse SVG tag');
        }

        const originalAttrs = svgTagMatch[1];

        // Extract existing attributes
        const attrs = new Map();
        const attrRegex = /(\w+)=["']([^"']+)["']/g;
        let match;

        // eslint-disable-next-line no-cond-assign
        while ((match = attrRegex.exec(originalAttrs)) !== null) {
            const [, name, value] = match;
            if (name !== 'width' && name !== 'height') {
                attrs.set(name, value);
            }
        }

        // Handle viewBox
        if (!attrs.has('viewBox')) {
            // Try to get original dimensions
            const width = originalAttrs.match(/width=["'](\d+)/)?.[1] || size;
            const height = originalAttrs.match(/height=["'](\d+)/)?.[1] || size;
            attrs.set('viewBox', `0 0 ${width} ${height}`);
        }

        // Set size attributes
        attrs.set('width', size);
        attrs.set('height', size);

        // Ensure xmlns is present
        if (!attrs.has('xmlns')) {
            attrs.set('xmlns', 'http://www.w3.org/2000/svg');
        }

        // Build new SVG tag
        const newAttrs = Array.from(attrs.entries())
            .map(([name, value]) => `${name}="${value}"`)
            .join(' ');

        const newTag = `<svg ${newAttrs}>`;

        // Replace original tag
        return cleanedContent.replace(/<svg[^>]*>/, newTag);
    } catch (error) {
        throw new Error(`SVG processing failed: ${error.message}`);
    }
}

/**
 * Processes a single SVG file
 * @param {string} filePath - Path to SVG file
 * @param {number} targetSize - Desired size in pixels
 * @param {Object} options - Processing options
 * @returns {Promise<boolean>} - Success status
 */
async function resizeSvg(filePath, targetSize, options = {}) {
    const { skipErrors = false, verbose = false } = options;

    try {
        const content = await fs.readFile(filePath);
        const resizedContent = updateSvgSize(content, targetSize);
        await fs.writeFile(filePath, resizedContent);

        if (verbose) {
            console.log(
                `✓ Resized ${path.basename(filePath)} to ${targetSize}px`,
            );
        }
        return true;
    } catch (error) {
        const message = `Failed to process ${path.basename(filePath)}: ${error.message}`;
        if (skipErrors) {
            console.error(`⚠️  ${message}`);
            return false;
        }
        throw new Error(message);
    }
}

/**
 * Processes all SVGs in a directory
 * @param {string} directory - Directory containing SVGs
 * @param {number} targetSize - Desired size in pixels
 * @param {Object} options - Processing options
 */
async function resizeAllSvgs(directory, targetSize, options = {}) {
    const {
        continueOnError = true,
        verbose = false,
        concurrency = 10,
    } = options;

    try {
        // Ensure directory exists
        await fs.access(directory);

        // Get SVG files
        const files = await fs.readdir(directory);
        const svgFiles = files.filter(file =>
            file.toLowerCase().endsWith('.svg'),
        );

        if (svgFiles.length === 0) {
            if (verbose) {
                console.log(`No SVG files found in ${directory}`);
            }
            return;
        }

        if (verbose) {
            console.log(`Processing ${svgFiles.length} SVG files...`);
        }

        // Process files in batches
        const batches = [];
        for (let i = 0; i < svgFiles.length; i += concurrency) {
            const batch = svgFiles.slice(i, i + concurrency);
            batches.push(batch);
        }

        let successful = 0;
        let failed = 0;

        for (const batch of batches) {
            const results = await Promise.all(
                batch.map(file =>
                    resizeSvg(path.join(directory, file), targetSize, {
                        skipErrors: continueOnError,
                        verbose,
                    }),
                ),
            );

            successful += results.filter(Boolean).length;
            failed += results.filter(r => !r).length;
        }

        if (verbose) {
            console.log(`\nProcessing complete:`);
            console.log(`✓ Successfully processed: ${successful} files`);
            if (failed > 0) {
                console.log(`⚠️  Failed to process: ${failed} files`);
            }
        }

        if (failed > 0 && !continueOnError) {
            throw new Error(`Failed to process ${failed} files`);
        }
    } catch (error) {
        if (!continueOnError) {
            throw new Error(`Directory processing failed: ${error.message}`);
        }
        console.error(`⚠️  ${error.message}`);
    }
}

module.exports = {
    resizeSvg,
    resizeAllSvgs,
    updateSvgSize,
    validateAndCleanSvg,
};
