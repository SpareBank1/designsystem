module.exports = data => {
    return data.map(([key, value]) => `--${key}: ${value};`);
};
