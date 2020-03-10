const Handlebars = require('handlebars');

Handlebars.registerHelper('increment', value => value + 1);

Handlebars.registerHelper('preformat', obj => {
    const str = JSON.stringify(obj, null, 2);
    return new Handlebars.SafeString(
        `<pre>${Handlebars.escapeExpression(str)}</pre>`,
    );
});

Handlebars.registerHelper('eq', (a, b) => a == b); // eslint-disable-line eqeqeq
