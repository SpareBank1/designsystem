const { kebab } = require('case');

module.exports = ({ types: t }) => ({
    visitor: {
        ImportDeclaration(path, { opts }) {
            if (path.node.source.value === '@sb1/ffe-icons-react') {
                path.replaceWithMultiple(
                    path.node.specifiers.map(spec => {
                        const identifier = t.identifier(spec.local.name);
                        const specifier = t.importDefaultSpecifier(identifier);
                        const source = t.stringLiteral(
                            `@sb1/ffe-icons-react/${opts.sourceSubpath ||
                                'lib'}/${kebab(spec.imported.name)}`,
                        );
                        return t.importDeclaration([specifier], source);
                    }),
                );
            }
        },
    },
});
