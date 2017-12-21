# Contribute

Dette er et monorepo som på sikt skal inneholde alle FFE-komponenter.
Publisering og sånt skjer med [lerna](https://lernajs.io).

## Lage en ny feature eller bugfix

Utvikling skjer i en feature- eller bugfix-branch fra master og tilføres master
i en pull request på stash.

## Commit-meldinger

Commit-meldinger må følge [convetional commits](https://conventionalcommits.org/)-formatet.

Dette repo har en post-commit-hook som sjekker meldingen med [commitlint](https://github.com/marionebl/commitlint)
og feiler om den ikke stemmer overens med formatet.

Eksempel commit-melding:

```
feat(ffe-grid): Adds another background color

This commit adds a new background modifier --bg-hot-pink to ffe-grid__row. Enjoy!

Fixes FFE-1337
```

Type er vanligvis `feat` på features eller `fix` på bugfixes. Scope er navnet på pakken, f.eks. ffe-core.

## Lage en ny FFE-komponenter

_writeme_

## Importere en eksisterende FFE-komponent

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

less-pakke:
* Legg til import av pakkens less i packages/ffe-all.less


### Lerna bootstrap

```
$ npm run lerna:bootstrap
```

## Publisering

###  Versjonering og Publisering

Ikke skrive `CHANGELOG.md` og ikke bump versjonsnummer i `package.json`!
Bruk [convetional commits](https://conventionalcommits.org/) isteden og lerna tar da hånd om det
-> https://github.com/lerna/lerna#--conventional-commits


## Styleguidist

```
$ npm run styleguidist:build
```

eller

```
$ npm start
```
