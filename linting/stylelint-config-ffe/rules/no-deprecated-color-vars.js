const stylelint = require('stylelint');

const { report, ruleMessages, validateOptions } = stylelint.utils;

const ruleName = '@sb1/ffe-no-deprecated-color-vars';
const messages = ruleMessages(ruleName, {
    deprecated: varName => `Unexpected deprecated less variable "${varName}"`,
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;

const invalidColors = /@ffe-(blue|green|orange|red|purple|sand|white|grey|black)(-[a-z]+)*/g;

module.exports = stylelint.createPlugin(ruleName, function ruleFunction(
    primaryOption,
    secondaryOptionObject,
    context,
) {
    return function lint(postcssRoot, postcssResult) {
        const validOptions = validateOptions(postcssResult, ruleName, {
            // options shema
        });

        if (!validOptions) {
            return;
        }

        const isAutoFixing = Boolean(context.fix);

        if (isAutoFixing) {
            return;
        }

        postcssRoot.walkDecls(decl => {
            const matches = decl.value.match(invalidColors);

            if (matches === null) {
                return;
            }

            matches.forEach(match => {
                report({
                    ruleName,
                    result: postcssResult,
                    message: messages.deprecated(match),
                    node: decl,
                    word: match,
                });
            });
        });
    };
});
