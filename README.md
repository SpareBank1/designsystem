# Felles Frontend Message Box

Felles meldingsboks for SpareBank 1.

## Bruk

Installer modulen via npm:

```
npm install --save ffe-message-box
```

Importer LESS-filen i din main.less fil:
```
@import ../node_modules/ffe-message-box/less/ffe-message-box
```

Merk: Denne modulen har en `peerDependency` på `ffe-core@^8.1.0`.

Link styling må settes eksplisitt: `<a href="http://www.sparebank1.no" class="ffe-message-box--link">En lenke</a>` 
