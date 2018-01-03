if (process.env.NODE_ENV === "production") {
    const emptyFn = () => {};
    module.exports = {
        checkForDeprecatedModifiers: emptyFn,
        checkForNestedComponent: emptyFn,
        checkValidColumnCount: emptyFn
    };
} else {
    module.exports = require("./utils.dev");
}
