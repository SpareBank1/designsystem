const express = require('express');
const path = require('path');
const getKssStyleguideSections = require('./getKssStyleguideSections');

const router = express.Router();

router.use((req, res, next) => {
    const configFile = path.resolve(__dirname, '../kss-config.json');
    return getKssStyleguideSections(configFile)
        .then(sections => {
            //eslint-disable-next-line no-param-reassign
            req.kssSections = sections;
            next();
        })
        .catch(next);
});

router.get('/', (req, res, next) => {
    res.send(req.kssSections);
});

router.get('/:reference', (req, res, next) => {
    const section = req.kssSections.find(
        d => d.reference === req.params.reference,
    );

    if (!section) {
        return res.sendStatus(404);
    }

    res.send(section);
});

module.exports = router;
