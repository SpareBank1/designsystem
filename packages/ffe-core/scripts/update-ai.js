#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');

const providers = {
    copilot: {
        src: 'copilot-instructions.md',
        destDir: '.github',
    },
    claude: {
        src: 'claude-instructions.md',
        destDir: '.',
    },
};

function copy(providerKey) {
    const cfg = providers[providerKey];
    if (!cfg) throw new Error(`Unknown provider: ${providerKey}`);
    const src = path.resolve(process.cwd(), 'ai-context', cfg.src);
    if (!fs.existsSync(src)) throw new Error(`Missing source: ${src}`);
    const destDir = path.resolve(process.cwd(), cfg.destDir);
    fs.mkdirSync(destDir, { recursive: true });
    const dest = path.join(destDir, cfg.src);
    fs.copyFileSync(src, dest);
    console.log(
        `[update-ai] Provider: ${providerKey}\n` +
            `- Source: ${path.relative(process.cwd(), src)}\n` +
            `- Dest: ${path.relative(process.cwd(), dest)}`,
    );
}

const arg = process.argv[2];
if (arg) {
    copy(arg);
} else {
    const options = Object.keys(providers);
    const render = () => {
        process.stdout.write(
            '\nType 1-' + options.length + ' to select provider (no Enter):\n',
        );
        options.forEach((opt, idx) => {
            const num = idx + 1;
            process.stdout.write(` ${num}. ${opt}\n`);
        });
        process.stdout.write('\n Press Ctrl+C to cancel.\n');
    };
    const clearLines = count => {
        for (let n = 0; n < count; n++) {
            process.stdout.write('\x1b[1A');
            process.stdout.write('\x1b[2K');
        }
    };
    process.stdin.setRawMode(true);
    process.stdin.resume();
    render();
    const linesPainted = options.length + 3;
    process.stdin.on('data', buf => {
        const s = buf.toString();
        if (s === '\u0003') {
            clearLines(linesPainted);
            process.exit(130);
        }
        const code = s.charCodeAt(0);
        // Accept number keys 1..9 (single digit) without Enter
        if (code >= 49 && code <= 57) {
            const idx = code - 49; // '1' -> 0
            if (idx < options.length) {
                clearLines(linesPainted);
                try {
                    copy(options[idx]);
                    process.exit(0);
                } catch (e) {
                    console.error(`[update-ai] Error: ${e.message}`);
                    process.exit(1);
                }
            }
        }
        // Re-render to remind valid keys
        clearLines(linesPainted);
        render();
    });
}
