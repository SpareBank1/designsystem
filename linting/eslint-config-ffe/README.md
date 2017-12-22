# ffe-eslint-config

Recommended eslint-config used for ffe-components. Based on eslint-config-airbnb, but without any styling rules.

## Usage

Install npm module

```bash
npm i -D eslint eslint-config-ffe eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y
```

Create .eslintsrc and extend this config.

```json
{
    "extends": "ffe"
}
```

If you are not using React see eslint-config-ffe-base.

## Utvikling og bidrag

For informasjon om utvikling og bidrag, vennligst se
[CONTRIBUTE.md](https://stash.intern.sparebank1.no/projects/FFE/repos/ffe-monorepo/browse/CONTRIBUTE.md)