# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

      <a name="10.0.1"></a>
## [10.0.1](https://github.com/SpareBank1/designsystem/compare/@sb1/ffe-icons@10.0.0...@sb1/ffe-icons@10.0.1) (2018-03-02)


### Bug Fixes

* **ffe-icons:** Fixed cwd in build script to compensate for package-scoping ([b50afe4](https://github.com/SpareBank1/designsystem/commit/b50afe4))




      <a name="10.0.0"></a>
# 10.0.0 (2018-02-25)


### Bug Fixes

* **ffe-icons:** Fix git repository url ([cbe0f63](https://github.com/SpareBank1/designsystem/commit/cbe0f63))
* **ffe-icons:** Remove class attribute from klokke-ikon ([d425ca5](https://github.com/SpareBank1/designsystem/commit/d425ca5))
* **ffe-icons:** Rename numeric icons ([7258fcc](https://github.com/SpareBank1/designsystem/commit/7258fcc))
* remove all references to internal system ([ff22340](https://github.com/SpareBank1/designsystem/commit/ff22340))


### Chores

* add [@sb1](https://github.com/sb1)/ scope to all packages ([37efbb4](https://github.com/SpareBank1/designsystem/commit/37efbb4))


### Features

* **ffe-icons:** Add contribute.md link to readme ([99ffd12](https://github.com/SpareBank1/designsystem/commit/99ffd12))


### Fix

* Rename all icons to end with -ikon ([a9d5741](https://github.com/SpareBank1/designsystem/commit/a9d5741))


### BREAKING CHANGES

* All packages have been renamed to add the @sb1 scope.

See links [1] and [2] to read more about package scopes.

Unfortunately this requires you update both your dependencies in
`package.json` and all `import` or `require` statements in your code.
Also, you unfortunately have to upgrade all FFE packages at once due to
dependency between packages. If you are on the latest version prior to
this breaking change the upgrade should be a matter of updating
`package.json` with new package names and versions, and updating your
imports.

To help find the proper package versions you can either browse to the
packages you need or check out the list of Git tags either on
Github [3] or by cloning the repository and running the `git tag`
command. All package versions get a tag in the format
_package@version_.

Update your `package.json` with the latest package version and add the
@sb1 scope to the package name:

```diff
- "ffe-core": "11.0.2",
+ "@sb1/ffe-core": "11.0.2",
```

Scoped packages all get put in a subdirectory in `node_modules/`. In our
case packages will be put in the `node_modules/@sb1/` directory. If your
build depends on file paths (for instance for copying fonts) you need to
update that path to include the scope.

The directory structure also means you have to update your imports, both
in Less and in JavaScript.

Using `less-plugin-npm-import`:

```diff
- @import 'npm://ffe-core/less/ffe';
+ @import 'npm://@sb1/ffe-core/less/ffe';
```

Using Webpack:

```diff
- @import '~ffe-core/less/ffe';
+ @import '~@sb1/ffe-core/less/ffe';
```

Using plain old paths:

```diff
- @import '../path/to/node_modules/ffe-core/less/ffe';
+ @import '../path/to/node_modules/@sb1/ffe-core/less/ffe';
```

JavaScript `import`:

```diff
- import { ActionButton } from 'ffe-buttons-react';
+ import { ActionButton } from '@sb1/ffe-buttons-react';
```

JavaScript `require`:

```diff
- const { ActionButton } = require('ffe-buttons-react').default;
+ const { ActionButton } = require('@sb1/ffe-buttons-react').default;
```

[1]: https://docs.npmjs.com/misc/scope
[2]: https://docs.npmjs.com/getting-started/scoped-packages
[3]: https://github.com/sparebank1/designsystem/tags
* **ffe-icons:** Rename two icons that begins with numbers in order
to allow named exports in react package.

The following icons have been renamed:

- `1-2-3-sirkel-ikon` is now named `sirkel-1-2-3-ikon`
- `1-2-3-understrek-ikon` is now named `understrek-1-2-3-ikon`
* This commit renames two icons in ffe-icons.
`bankid-icon` is now named `bankid-ikon`, and
`mynter-to-stabler-pluss` is now named `mynter-to-stabler-pluss-ikon`.

In addition, ffe-icons-react receives a fix that unbroke a previous
release




    <a name="9.0.5"></a>
## [9.0.5](https://github.com/SpareBank1/designsystem/compare/ffe-icons@9.0.4...ffe-icons@9.0.5) (2018-02-23)




**Note:** Version bump only for package ffe-icons

  <a name="9.0.4"></a>
## [9.0.4](https://github.com/SpareBank1/designsystem/compare/ffe-icons@9.0.3...ffe-icons@9.0.4) (2018-02-22)




**Note:** Version bump only for package ffe-icons

<a name="9.0.3"></a>
## [9.0.3](https://github.com/SpareBank1/designsystem/compare/ffe-icons@9.0.2...ffe-icons@9.0.3) (2018-01-19)




**Note:** Version bump only for package ffe-icons

<a name="9.0.2"></a>

## [9.0.2](https://github.com/SpareBank1/designsystem/compare/ffe-icons@9.0.1...ffe-icons@9.0.2) (2018-01-09)

**Note:** Version bump only for package ffe-icons

<a name="9.0.1"></a>

## [9.0.1](https://github.com/SpareBank1/designsystem/compare/ffe-icons@9.0.0...ffe-icons@9.0.1) (2018-01-05)

**Note:** Version bump only for package ffe-icons

<a name="9.0.0"></a>

# [9.0.0](https://github.com/SpareBank1/designsystem/compare/ffe-icons@8.0.0...ffe-icons@9.0.0) (2018-01-02)

### Bug Fixes

* **ffe-icons:** Rename numeric icons

### BREAKING CHANGES

* **ffe-icons:** Rename two icons that begins with numbers in order
to allow named exports in react package.

The following icons have been renamed:

* `1-2-3-sirkel-ikon` is now named `sirkel-1-2-3-ikon`
* `1-2-3-understrek-ikon` is now named `understrek-1-2-3-ikon`

<a name="8.0.0"></a>

# 8.0.0 (2017-12-22)

### Bug Fixes

* **ffe-icons:** Fix git repository url
* **ffe-icons:** Remove class attribute from klokke-ikon

### Features

* **ffe-icons:** Add contribute.md link to readme

### Fix

* Rename all icons to end with -ikon

### BREAKING CHANGES

* This commit renames two icons in ffe-icons.
`bankid-icon` is now named `bankid-ikon`, and
`mynter-to-stabler-pluss` is now named `mynter-to-stabler-pluss-ikon`.

In addition, ffe-icons-react receives a fix that unbroke a previous
release

# 7.17.0

* Add kr-klokke-ikon.svg

# 7.16.0

* Add gravemaskin-ikon.svg

# 7.15.0

* Add info-sirkel-solid-ikon.svg

# 7.14.0

* Add p-pose-stjerne-ikon.svg

# 7.13.0

* Add beta-ikon.svg
* Add kr-tannhjul-ikon.svg
* Add mobil-utropstegn-ikon.svg
* Add person-streker-ikon.svg

# 7.12.0

* pil-ut-av-boks-skraa-ikon has been updated with thicker lines

# 7.11.0

* snakkeboble-ikon.svg has been redesigned to be more in line with the visual profile.

# 7.10.0

* Added trillekoffert-ikon.svg

## 7.9.1

* Remove class property from taleassistent-ikon, that broke usage with ffe-icons-react

# 7.9.0

* Added taleassistent-ikon.svg

# 7.8.0

* Added bankid- and varsel-ikon.svg

# 7.7.0

* Added kalkulator-ikon.svg

## 7.6.1

* Updated utropstegn-icon.svg

# 7.6.0

* Added hus-stjerne-ikon.svg

## 7.5.4

* Bugfix: Removed a class-attribute that caused warnings when used with react.

## 7.5.3

* Bugfix: Remember that `.svg` is appended to all input in the `icons` config object
(as a convenience).

## 7.5.2

* Bugfix: Include all icons when `opts.icons` are set to `*`. This fixes a problem in
`ffe-icons-react` where no icons were outputted during the build

## 7.5.1

* Add babel-polyfill, to support node 4

# 7.5.0

* Added svar-pil-ikon.svg, binders-ikon.svg

## 7.4.1

* Bugfix: resolves a path issue that made the `projectIcons` config unusable outside of `npm link`

# 7.4.0

* Bugfix: the produced bundle should again only contain the icons in your `icons.json`
* New feature: `projectIcons` option now available

Usage:

```json
{
"dest": "dist/resources/",
"icons": ["bamse-ikon"],
"projectIcons": ["src/main/resources/special/snowflake/snokrystall-ikon"]
}
```

# 7.3.0

Added moped-ikon.svg

# 7.2.0

Added pluss-icon.svg

## 7.1.1

Added handlevogn-pakker-ikon.svg, bil-camping-ikon.svg and hus-tre-ikon.svg

## 7.0.1

Changes the shebang so it works better on different flavours of Linux

# 7.0.0

**Breaking changes**

The Gulp dependency has been removed. Outdated packages that crash on
Node 7 deep in the dependency tree made it overdue

_To migrate you need to update your npm-script_:

```json
"ffe:icons": "ffe-icons --opts=icons.json",
```

Note that the `--opts` flag now assumes the base path for the location of `icons.json` is the directory
above `node_modules/` (the same directory as your apps `package.json`). So what used to be
`--opts=../../icons.json` is now just `--opts=icons.json`.

# 6.4.0

* Added koffert-ikon.svg

# 6.3.0

* Added p-pose-ikon.svg

# 6.2.0

* Added mynter-to-stabler-pluss.svg

## 6.1.1

* Update design on faks-printer-solid-ikon FFE-90.

# 6.1.0

* Added pose-i-haand-ikon.svg

##6.0.0

* Breaking: kontorbygg-ikon renamed to kontorbygg-solid-ikon in order to be consistent with how other icons are named. Anyone who where using the `kontorbygg-ikon` and wants to keep using the version with a fill should change to `kontorbygg-solid-ikon`.
* Add new icons
* kontorbygg-ikon (replaces old solid one with a non-solid version)
* skyskraper-ikon
* personer-ikon

## 5.3.1

* No change

# 5.3.0

* Added a few new icons
* hus-hake-ikon.svg
* hus-hjerte-ikon-svg
* kr-hake-ikon.svg

## 5.2.1

* No change.

# 5.2.0

* Added konfetti-ikon.svg
* Added tommel-opp-ikong.svg

# 5.1.0

* Added a bunch of new icons
* campingbil-ikon.svg
* fritidshus-ikon.svg
* handlevogn-ikon.svg
* hus-enebolig-ikon.svg
* hus-horisontaldelt-ikon.svg
* hus-ikon.svg
* hus-kjedet-ikon.svg
* hus-leilighet-ikon.svg
* hus-rekkehus-ikon.svg
* hus-vertikaldelt-ikon.svg
* katt-ikon.svg
* lommebok-ikon.svg
* mobil-ikon.svg
* motorsykkel-ikon.svg
* nokkelhull-ikon.svg
* person-brukket-arm-ikon.svg
* robat-ikon.svg
* seilbat-ikon.svg
* snoscooter-ikon.svg
* sofa-ikon.svg
* sporsmalstegn-ikon.svg
* sykebil-ikon.svg
* traktor-ikon.svg
* ung-caps-ikon.svg

# 5.0.0

* A vengeful lumberjack has swung the axe against tre-ikon, spire-ikon, and blad-ikon. It was decided the icons did not fit the brand and should not be used by anyone.

# 4.7.0

* Added bygning-pluss-ikon.svg

# 4.6.0

* Added stetoskop-ikon.svg

# 4.5.0

* Added forstorrelsesglass-ikon.svg

# 4.4.0

* Added snakkeboble-ikon.svg

# 4.3.0

* Added person-rullestol-ikon.svg
* Added hjerte-kardiograf-ikon.svg

# 4.2.0

* Added graf-opp-enkel-ikon.svg
* Added soylediagram-ikon.svg
* Added pil-ut-av-boks-skraa-ikon.svg

# 4.1.0

* Added blyant-ikon.svg
* Added person-pluss-ikon.svg
* Added bsu-ikon.svg

# 4.0.0

* Renamed: hake-sirkel-ikon.svg => hake-sirkel-solid-ikon.svg
* Added a new hake-sirkel-ikon.svg that is not solid

## 3.7.2

* New icon: kalender-ikon.svg

## 3.7.1

* Quickfix for kartmarkor-ikon - Was not optimized correctly

# 3.7.0

* Changed look of tannhjul-ikon
* Add old tannhjul-ikon.svg as tannhjul-solid-ikon.svg
* Name change: dokument-med-test-ikon.svg -> dokument-med-tekst-ikon.svg
* Name change: hengelas.svg -> hengelas-ikon.svg
* Name change: kontorbygg.svg -> kontorbygg-ikon.svg
* Name change: pil-ned.svg -> pil-ned-ikon.svg
* New icon: utropstegn-ikon.svg
* New icon: info-ikon.svg
* New icon: dokument-efaktura-ikon.svg
* New icon: kartmarkor-ikon.svg
* New icon: kr-pil-solid-ikon.svg

# 3.6.0

* New icons: hake-stjerne-ikon

# 3.5.0

* New icons: blad-ikon, hake-sirkel-ikon, spire-ikon, tre-ikon

# 3.4.0

* New icons: graf-opp-ikon, kake-kvart-ikon, person-slips-ikon, sparegris-ikon, konvolutt-ikon

# 3.3.0

* New icon: kontorbygg

# 3.2.0

* New icon: paraply-ikon

# 3.1.0

* New icons: hengelaas, pil-ned, tannhjul
* Automatic publish and test
* Screenshot in readme

# 3.0.0

* Removed the postinstall script, since it created issues with builds on npm 2.x. See https://github.com/npm/npm/issues/8850

# 2.4.0

Optimized:

* boks-ikon
* varebil-ikon
* verktoy-skiftenokkel-ikon

# 2.3.0

Renamed lukk-ikon to kryss-sirkel-ikon and optimized it

# 2.2.0

Optimized:

* lyspare-ikon

# 2.1.0

Added new icons and optimized some old ones for use in lo-kort.

Optimized:

* 1-2-3-sirkel
* 1-2-3-understrek
* atv
* badekar-dusj
* bamse
* bat-liten
* bat-stor
* bestikk
* betaling-100
* betaling-kontaktlos
* betaling-kontaktlos-info
* betalingskort
* betalingskort-innpakket
* betalingskort-kryss
* bil
* faks-printer
* kr-pil
* kryss
* laptop
* mobil-a-b-c
* mynter
* person
* tabell-kroner

New:

* betalingskort-globus
* betalingskort-hand
* betalingskort-kreditt
* betalingskort-stjerne
* dokument-med-test
* faks-printer-2
* mynter-2
* pdf
* piler-hoyre-venstre
* xls-ikon

# 2.0.0

For version 2.x, removed all existing icons and added \_ICON_REQUIREMENTS.md to have a clean slate. Also updated README.

Releasing version 2 with the first batch of optimized icons:

* chevron
* familie
* flamme
* fly
* gave
* hake
* hjerte
* info-sirkel
* kr-pose
* person-mikrofon
* plaster
* telefon

## 1.0.3

* Made devDependencies actual dependencies so package consumers get them...
* Re-added postinstall script

## 1.0.2

* Removed postinstall script, since some build tools had trouble finding gulp at that stage
* Updated package.json with the correct repository URL

## 1.0.1

* Added plaster-ikon

# 1.0.0

* Renamed default sprite to ffe-icons.svg
* Renamed desktop-ikon to laptop-ikon
* Added several new icons to ffe-icons
* Removed sfo-icons - use instead the common ffe-icons
* Updated the gulpfile to be extendable via an options json to allow for minimum SVG sprite generation per project
