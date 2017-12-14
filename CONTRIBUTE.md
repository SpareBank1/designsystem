# Contribute

Publisering og sånt skjer med [lerna](https://lernajs.io).

## Importere eksisterende ffe-komponenter

### Dra inn koden inkl. git historien

`lerna add` fungerer ikke bra med ffe. Bruke derfor `git sub-tree`:

```
$ git subtree add --prefix packages/ffe-core ssh://git@stash.intern.sparebank1.no:22/ffe/ffe-core.git master
```

Gjør dette i en egen branch.

### Lerna bootstrap

```
$ npm run lerna:bootstrap
```

### Rydde i komponenten

* Fiks hoisting errors (se stdout til lerna bootstrap)
* Fiks `publishConfig` og `repository` i `package.json`
* Fiks `license` i `package.json`
* Fjern alt i .npmrc foruten  package-lock=false
* Fjern `ffe-visual-tests-support` og alt relatert til gemini (.gemini.yml).
* Fjern `build.sh` og `npm run postpublish/preversion/has-published`
* Sjekk at `npm run build/test/lint` fungerer.

less-pakke:
* Legg til import av pakkens less i packages/ffe-all.less

## Publisering

###  Versjonering og Publisering

Ikke skrive `CHANGELOG.md` og ikke bump versjonsnummer i `package.json`!
Bruk [convetional commits](https://conventionalcommits.org/) isteden og lerna tar da hånd om det
-> https://github.com/lerna/lerna#--conventional-commits


### Push til npmreg

```
$ npm run lerna:publish
```

## Styleguidist

```
$ make styleguidist
```
