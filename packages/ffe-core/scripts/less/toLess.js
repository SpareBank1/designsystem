module.exports = data => {
    return data.map(([key, value]) =>
        `@${key}: ${value};`
            .replace(/æ/g, 'ae')
            .replace(/ø/g, 'o')
            .replace(/å/g, 'aa'),
    );
};
