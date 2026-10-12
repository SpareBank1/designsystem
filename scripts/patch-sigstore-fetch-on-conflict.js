#!/usr/bin/env node
// patch-sigstore-fetch-on-conflict.js
// Makes provenance signing survive a Rekor 409 during `lerna publish`.
//
// When Rekor stores an entry but the response is lost, sigstore retries the
// identical request and Rekor answers 409 "an equivalent entry already exists".
// @sigstore/sign can recover by fetching the existing entry, but the `sigstore`
// client hardcodes `fetchOnConflict: false`, and npm exposes no option for it.
// https://github.com/sigstore/sigstore-js/issues/1708
//
// Run after `npm ci --ignore-scripts`, before publishing. Fails loudly if the
// line has changed, so a sigstore upgrade cannot silently drop the patch.

const fs = require('fs');
const path = require('path');

const FROM = 'fetchOnConflict: false,';
const TO = 'fetchOnConflict: true,';

// Resolve sigstore the same way lerna's publish does, in case of nested copies.
const lerna = path.dirname(require.resolve('lerna'));
const libnpmpublish = require.resolve('libnpmpublish', { paths: [lerna] });
const sigstore = require.resolve('sigstore', { paths: [libnpmpublish] });
const configPath = path.join(path.dirname(sigstore), 'config.js');

const source = fs.readFileSync(configPath, 'utf8');
const occurrences = source.split(FROM).length - 1;

if (occurrences === 0 && source.includes(TO)) {
    console.log(`Already patched: ${configPath}`);
    process.exit(0);
}

if (occurrences !== 1) {
    console.error(
        `Expected exactly one '${FROM}' in ${configPath}, found ${occurrences}.`,
    );
    console.error(
        'sigstore has changed. Check whether the patch is still needed.',
    );
    process.exit(1);
}

fs.writeFileSync(configPath, source.replace(FROM, TO));
console.log(`Patched ${configPath}: ${TO}`);
