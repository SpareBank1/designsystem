exports.type = 'preItem';

exports.active = false;

exports.description =
    'remove prefixed attributes (e.g xmlns:xlink) since it is not supported in react';

exports.fn = item => {
    item.eachAttr(attr => {
        if (attr.prefix && attr.local) {
            item.removeAttr(attr.name);
        }
    });
};
