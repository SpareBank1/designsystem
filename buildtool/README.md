# Build tools for FFE

Toolkit for building ffe-packages. Currently only for internal used within this monorepo.

## Usage

Add `@sb1/ffe-buildtool` as a devDependency and add `ffe-buildtool` to
scripts section of your package.json.

```json
{
    "scripts": {
        "build": "ffe-buildtool babel"
    }
}
```

## CLI commands

```
$ ffe-buildtool --help
Usage: ffe-buildtool [options] [command]

Options:
  -h, --help                display help for command

Commands:
  babel [options] [source]  compile code with babel
  help [command]            display help for command
```

### babel

This command uses babel to transpile code to commonjs and es modules and copies
typescript definitions to a given directory. It uses a babel configuration in
[./config/babel.config.js] and provides some sensible defaults which can be
overridden by parameters.

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
