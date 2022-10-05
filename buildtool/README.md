# Build tools for FFE

Toolkit for building ffe-packages. Currently only for internal used within this monorepo.

## Usage

Add `@sb1/ffe-buildtool` as a devDependency and add `ffe-buildtool` to
scripts section of your package.json.

```json
{
    "scripts": {
        "build": "ffe-buildtool babel",
        "test": "ffe-buildtool jest"
    }
}
```

## CLI commands

```
$ ffe-buildtool --help
Usage: ffe-buildtool [options] [command]

Options:
  -h, --help                      display help for command

Commands:
  babel [options] [source]        compile code with babel
  babel-watch [options] [source]  continously compile code with babel
  jest [options]                  test code with jest
  stylelint                       lint code with stylelint
  help [command]                  display help for command
```

### babel

This command uses babel to transpile code to commonjs and es modules and copies
typescript definitions to a given directory. It uses a babel configuration in
[config/babel.config.js](./config/babel.config.js) and provides some sensible
defaults which can be overridden by parameters.

```
$ ffe-buildtool help babel
Usage: ffe-buildtool babel [options] [source]

compile code with babel

Arguments:
  source                          directory with source code (default: "src")

Options:
  --cjs <cjsDir>                  where to output commonjs modules (default:
                                  "lib")
  --no-cjs                        do not create commonjs
  --es <esDir>                    where to output es modules (default: "es")
  --no-es                         do not es modules
  --copy-typedef <typeDefFile>    copy typescript definitions (default:
                                  "src/index.d.ts")
  --no-copy-typedef               do not copy typedef definitions
  --copy-typedef-outdir <outdir>  where to copy typescript definitions to
                                  (default: "types")
  -h, --help                      display help for command
```

### jest

The jest-command is a wrapper around the test runner jest. It uses the
configuration from [config/jest.config.js](./config/jest.config.js) and
adds support for [enzyme](https://enzymejs.github.io/enzyme/) and
[jest-dom-matchers](https://github.com/testing-library/jest-dom).

Enzymes rendering functions `shallow`, `mount` and `render` are available as
globals in the test cases. See [jest.setup.js](./config/jest.setup.js) for details.

Any parameter passed to this command will be forwarded to jest, e.g.
`ffe-buildtool jtest --coverage` will invoke `jest --coverage` behind the
scenes.

```
$ ffe-buildtool help jest
Usage: ffe-buildtool jest [options]

test code with jest

Options:
  --watch     Watch files for changes and rerun tests. Same as jest --watchAll
  -h, --help  display help for command
```

### stylelint

This command is a wrapper around [stylelint](https://stylelint.io/), a linter for css.

Any parameter passed to this command will be forwarded to stylelint.

The config file [config/stylelint.config.js](./config/stylelint.config.js)
provides some formatting rules used in this monorepo.

```
$ ffe-buildtool help stylelint
Usage: ffe-buildtool stylelint [options]

lint code with stylelint

Options:
  -h, --help  display help for command
```
