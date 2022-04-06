const acorn = require('acorn');
const acornJsx = require('acorn-jsx');
const walk = require('estree-walker').walk;

const getAst = src =>
    acorn.Parser.extend(acornJsx()).parse(src, {
        ecmaVersion: '2020',
        sourceType: 'module',
    });

const getImportSpecifiers = node => node.specifiers.map(n => n.local.name);

const removePositions = (sourceCode, importPositions) => {
    const compare = (a, b) => b[0] - a[0];
    const reducer = (code, pos) => code.slice(0, pos[0]) + code.slice(pos[1]);

    return importPositions
        .sort(compare)
        .reduce(reducer, sourceCode)
        .trim();
};

const generateModuleCode = ({
    code,
    imports,
    importSpecifiers,
    importsMap,
    sourceCode,
    sourceFileName,
    dependencies,
}) =>
    `${imports.join('\n')}
export const scope = {${importSpecifiers.join(',')}};
export const code = ${JSON.stringify(code)};
export const importsMap = ${JSON.stringify(importsMap)};
export const sourceCode = ${JSON.stringify(sourceCode)};
export const sourceImports = ${JSON.stringify(imports.join('\n'))};
export const dependencies = ${JSON.stringify(dependencies)};
export const sourceFileName = ${JSON.stringify(sourceFileName)};`;

module.exports = function(sourceCode, sourceFileName) {
    let importSpecifiers = [];
    const importPositions = [];
    const imports = [];
    const importsMap = {};
    const dependencies = [];

    let ast;
    try {
        ast = getAst(sourceCode);
    } catch (err) {
        if (err instanceof SyntaxError) {
            console.error(
                `\nSyntaxError: ${sourceFileName}: ${err.message}\n\n`,
            );
        }
        throw err;
    }

    walk(ast, {
        enter(node) {
            if (node.type === 'ImportDeclaration') {
                importsMap[node.source.value] = getImportSpecifiers(node);
                importSpecifiers = importSpecifiers.concat(
                    importsMap[node.source.value],
                );
                imports.push(sourceCode.slice(node.start, node.end));
                importPositions.push([node.start, node.end]);
                dependencies.push(node.source.value);
            }
        },
    });

    return generateModuleCode({
        code: removePositions(sourceCode, importPositions),
        imports,
        importSpecifiers,
        importsMap,
        sourceCode,
        sourceFileName,
        dependencies,
    });
};
