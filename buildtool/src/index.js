const { Command } = require('commander');
const babelCommand = require('./commands/babelCommand');
const copyfileCommand = require('./commands/copyfileCommand');

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

program.parse(process.argv);

if (!process.argv.slice(2).length) {
    program.help();
}
