# Contribute

Publisering og sånt skjer med [lerna](https://lernajs.io).

## Importere eksisterende ffe-komponenter

### Dra inn koden inkl. git historien

`lerna add` fungerer ikke bra med ffe. Bruke derfor `git sub-tree`:

```
$ git subtree add --prefix packages/ffe-core ***REMOVED*** master
```

Gjør dette i en egen branch.

### Rydde i komponenten

* Fjern `build.sh` og `npm run postpublish/preversion/has-published` i package.json.
* Fiks `publishConfig` og `repository` i `package.json`
* Fjern commit-hooks (se etter husky i package.json).
* Fiks `license` i `package.json`
* Linting
  * Oppdatere eller fjern .stylelintrc og .eslintrc (Trenger ikke en extends-regler pga. eslintrc på toplevel i repoet; kun overstyring av regler).
  * Fjern dependencies til eslint-plugin-*/-config-*. Behold kun eslint.
  * Fjern dependencies til stylelint-config-*. Behold kun stylelint.
* Fjern .editorconfig
* Fjern alt i .npmrc foruten package-lock=false
* Fjern `ffe-visual-tests-support` og alt relatert til gemini (.gemini.yml).
* Oppgradere til React 16.
* Fiks hoisting errors (se stdout til lerna bootstrap i neste trinn).
* Sjekk at `npm run build/test/lint` fungerer.

### Lerna bootstrap

```
$ npm run lerna:bootstrap
```

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
