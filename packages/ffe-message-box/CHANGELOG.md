# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="4.2.6"></a>
## [4.2.6](***REMOVED***) (2018-02-22)




**Note:** Version bump only for package ffe-message-box

<a name="4.2.5"></a>
## [4.2.5](***REMOVED***) (2018-01-22)




**Note:** Version bump only for package ffe-message-box

<a name="4.2.4"></a>
## [4.2.4](***REMOVED***) (2018-01-19)




**Note:** Version bump only for package ffe-message-box

<a name="4.2.3"></a>
## 4.2.3 (2018-01-18)




**Note:** Version bump only for package ffe-message-box

## 4.2.2
- Set a margin-bottom value to actual required value, no over-shooting.

## 4.2.1
- Support both versions 9 and 10 of `ffe-core`

# 4.2.0
- Added visual tests
- Added info list
- Renamed message-box__error-list to __list

# 4.1.0
- Added message-box__error-list
- Updated exclamation mark icon to latest version

# 4.0.0

### BREAKING CHANGES

Bumped peer dependency version of ffe-core. No external API change, but this version requires a new major of `ffe-core`

* Renamed color names to stay in sync with refactoring in ffe-core@9.x

To migrate, update your app to ffe-core version 9.x

## 3.0.3
- Added border-radius

## 3.0.2
- Added link styling

## 3.0.1
- Fixed minor border overflow visual bug when `@media print`
- Bumped dependency on `ffe-core` to `^8.1.0`

# 3.0.0
- Bumped dependency on `ffe-core` to `^8.0.2`

## 2.1.1
- Rollback dependency on `ffe-core` to `^6.0.0` to avoid issues with peerDependency. This change requires new major version of this project.

# 2.1.0
- Modified the curvature below the svg
- Bumped dependency on `ffe-core` to `^8.0.2`

## 2.0.2
- Fungerer nå på små flater

# 2.0.0
- Endret navn "warning" til "error" for å bedre reflektere faktisk bruk
- Endret html-struktur slik at innsnitt i bakgrunnsfargen ikke er avhengig av størrelsen på ikonet
- Endret til å bruke 20%-versjoner av fargene
- La til padding også på sidene
- La til fargelegging av svg-ikoner

# 1.0.0
- Oppdatert til å bruke v4.x av ffe-core
