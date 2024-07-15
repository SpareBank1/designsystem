const { Command } = require('commander');
const jestCommand = require('./commands/jestCommand');
const stylelintCommand = require('./commands/stylelintCommand');
const tscCommand = require('./commands/tscCommand');

const program = new Command();

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
