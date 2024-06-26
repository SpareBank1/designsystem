const { Command } = require('commander');
const babelCommand = require('./commands/babelCommand');
const copyfileCommand = require('./commands/copyfileCommand');
const jestCommand = require('./commands/jestCommand');
const stylelintCommand = require('./commands/stylelintCommand');
const tscCommand = require('./commands/tscCommand');

const program = new Command();

program
    .command('babel')
    .description('compile code with babel')
    .argument('[source]', 'directory with source code', 'src')
    .option('--cjs <cjsDir>', 'where to output commonjs modules', 'lib')
    .option('--no-cjs', 'do not create commonjs')
    .option('--es <esDir>', 'where to output es modules', 'es')
    .option('--no-es', 'do not es modules')
    .option(
        '--copy-typedef <typeDefFile>',
        'copy typescript definitions',
        'src/index.d.ts',
    )
    .option('--no-copy-typedef', 'do not copy typedef definitions')
    .option(
        '--copy-typedef-outdir <outdir>',
        'where to copy typescript definitions to',
        'types',
    )
    .action((source, options) => {
        babelCommand({ source, ...options });

        if (options.copyTypedef) {
            copyfileCommand(options.copyTypedef, options.copyTypedefOutdir);
        }
    });

program
    .command('jest')
    .description('test code with jest')
    .option(
        '--watch',
        'Watch files for changes and rerun tests. Same as jest --watchAll',
    )
    .allowUnknownOption()
    .action((options, { args }) => {
        if (options.watch) {
            args.push('--watchAll');
        }

        jestCommand(args);
    });

program
    .command('stylelint')
    .description('lint code with stylelint')
    .allowUnknownOption()
    .action((options, { args }) => {
        stylelintCommand(args);
    });

program
    .command('tsc')
    .description('compile code with tsc')
    .option('--es', 'compile es')
    .option('--cjs', 'compile cjs')
    .option('--types', 'generate types')
    .action(async (options, { args }) => {
        if (!options.es && !options.cjs && !options.types) {
            args.push('--es');
            args.push('--cjs');
            args.push('--types');
        } else {
            if (options.es) {
                args.push('--es');
            }
            if (options.cjs) {
                args.push('--cjs');
            }
            if (options.types) {
                args.push('--types');
            }
        }
        tscCommand(args);
    });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
    program.help();
}
