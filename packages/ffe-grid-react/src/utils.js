/* istanbul ignore if: I don't see any good way of getting around NODE_ENV */
if (process.env.NODE_ENV === 'production') {
    const emptyFn = () => {};
    module.exports = {
        checkForDeprecatedModifiers: emptyFn,
        checkValidColumnCount: emptyFn,
    };
} else {
    module.exports = require('./utils.dev');
}
