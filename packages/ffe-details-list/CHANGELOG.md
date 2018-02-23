# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="8.1.12"></a>
## [8.1.12](***REMOVED***) (2018-02-23)




**Note:** Version bump only for package ffe-details-list

<a name="8.1.11"></a>
## [8.1.11](***REMOVED***) (2018-02-22)




**Note:** Version bump only for package ffe-details-list

<a name="8.1.10"></a>
## [8.1.10](***REMOVED***) (2018-02-20)




**Note:** Version bump only for package ffe-details-list

<a name="8.1.9"></a>
## [8.1.9](***REMOVED***) (2018-02-15)




**Note:** Version bump only for package ffe-details-list

<a name="8.1.8"></a>
## [8.1.8](***REMOVED***) (2018-02-01)




**Note:** Version bump only for package ffe-details-list

<a name="8.1.7"></a>
## [8.1.7](***REMOVED***) (2018-01-22)




**Note:** Version bump only for package ffe-details-list

<a name="8.1.6"></a>
## [8.1.6](***REMOVED***) (2018-01-19)




**Note:** Version bump only for package ffe-details-list

<a name="8.1.5"></a>
## [8.1.5](***REMOVED***) (2018-01-19)




**Note:** Version bump only for package ffe-details-list

<a name="8.1.4"></a>
## [8.1.4](***REMOVED***) (2018-01-18)




**Note:** Version bump only for package ffe-details-list

<a name="8.1.3"></a>

## [8.1.3](***REMOVED***) (2018-01-12)

**Note:** Version bump only for package ffe-details-list

<a name="8.1.2"></a>

## [8.1.2](***REMOVED***) (2018-01-12)

**Note:** Version bump only for package ffe-details-list

<a name="8.1.1"></a>

## 8.1.1 (2018-01-12)

**Note:** Version bump only for package ffe-details-list

# 8.1.0

* Add support for `--no-top-padding` on `.ffe-details-list__details-row`

## 8.0.1

* Support both versions 9 and 10 of `ffe-core`

# 8.0.0

### BREAKING CHANGES

Bumped peer dependency version of ffe-core. No external API change, but this version requires a new major of `ffe-core`

* Renamed color names to stay in sync with refactoring in ffe-core@9.x
* Updated visual test baselines according to color changes in ffe-core

To migrate, update your app to ffe-core version 9.x

## 7.0.1

* right-padding on `__details-col` to make space between columns, use modifier `--no-padding` to cancel

# 7.0.0

**Potentially breaking change:** The first column is now fixed at 33.33% width.

This change was made so long titles in the column would wrap instead of creeping
in on the space of the next column. If this - for some reason - is your desired
behaviour you need to override the `max-width` attribute to `100%`.

## 6.0.1

* meta-data til styleguide

# 6.0.0

* Bruker v8.x av ffe-core

# 5.1.0

* Gjorde så elementer i en rad kan posisjoneres absolutt i forhold til raden

# 5.0.0

* Innført border-bottom på `__section-title` elementer

# 4.0.0

* Oppdatert til å bruke v6.x av ffe-core

# 3.0.0

* Kolonner med `--last` modifier har fått `flex-grow: 2`. Dette gjør at man ikke trenger å ha 4 kolonner for å få høyrejustert innholdet i `--last` kolonnen siden den nå vil stjele det som måtte være til overs av plass.

# 2.0.0

* Oppdatert til å bruke v5.x av ffe-core

# 1.0.0

* Oppdatert til å bruke v4.x av ffe-core
