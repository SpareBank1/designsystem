exports.type = 'full';

exports.active = false;

exports.description = 'removes width and height in presence of viewBox';

/**
 * Convert width/height to viewBox. Remove width/height attributes when a viewBox attribute converted.
 *
 * @author Kirk Bentley / Fyrebase
 */
exports.fn = function(data) {
    const svg = data.content[0];

    if (svg.isElem('svg')) {
        svg.addAttr({
            name: 'viewBox',
            value: `0 0 ${svg.attr('width').value} ${svg.attr('height').value}`,
            prefix: '',
            local: 'class',
        });

        svg.removeAttr('width');
        svg.removeAttr('height');
    }

    return data;
};
