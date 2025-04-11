import type { Plugin } from 'vite';
import { resolve, dirname } from 'path';
import { glob } from 'glob';
import { existsSync } from 'fs';

async function collectFfeImports(nodeModulesPath: string): Promise<string> {
    // Core imports that should be included first
    const coreImports = ['@import "@sb1/ffe-core/less/ffe";'];

    // Find all other LESS files
    const lessFiles = await glob('**/less/*.less', {
        cwd: resolve(nodeModulesPath, '@sb1'),
        ignore: ['**/node_modules/**', '**/ffe-core/less/ffe.less'],
        absolute: true,
    });

    // Create imports for component files
    const componentImports = lessFiles.map(file => {
        const relativePath = file.replace(`${nodeModulesPath}/`, '');
        return `@import "${relativePath}";`;
    });

    return [...coreImports, ...componentImports].join('\n');
}

export interface FfeLessPluginOptions {
    nodeModulesPath?: string;
}

export function ffeLessPlugin(options: FfeLessPluginOptions = {}): Plugin {
    let nodeModulesPath: string;

    return {
        name: 'ffe-vite-less',
        enforce: 'pre',
        configResolved(config) {
            // Try to find node_modules in various locations
            const possiblePaths = [
                options.nodeModulesPath,
                resolve(process.cwd(), 'node_modules'),
                resolve(
                    dirname(config.configFile || process.cwd()),
                    'node_modules',
                ),
                resolve(process.cwd(), '../../node_modules'),
            ].filter((path): path is string => typeof path === 'string');

            for (const path of possiblePaths) {
                if (existsSync(path)) {
                    nodeModulesPath = path;
                    break;
                }
            }

            if (!nodeModulesPath) {
                throw new Error('Could not find node_modules directory');
            }
        },
        config(config) {
            if (!nodeModulesPath) {
                return {};
            }

            const sb1Path = resolve(nodeModulesPath, '@sb1');
            return {
                css: {
                    preprocessorOptions: {
                        less: {
                            javascriptEnabled: true,
                            paths: [nodeModulesPath],
                            alias: {
                                '@sb1': sb1Path,
                            },
                        },
                    },
                },
                resolve: {
                    alias: {
                        '@sb1': sb1Path,
                    },
                },
            };
        },
        async transform(code: string, id: string) {
            if (!id.endsWith('.less')) {
                return null;
            }

            // Skip if the file already has FFE imports
            if (code.includes('@import "@sb1/ffe-')) {
                return null;
            }

            const ffeImports = await collectFfeImports(nodeModulesPath);

            // Inject imports at the beginning of the file
            return {
                code: `${ffeImports}\n\n${code}`,
                map: null,
            };
        },
    };
}
