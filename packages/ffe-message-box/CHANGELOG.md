# CHANGELOG

## Version 4.2.2
- Set a margin-bottom value to actual required value, no over-shooting.

## Version 4.2.1
- Support both versions 9 and 10 of `ffe-core`

## Version 4.2.0
- Added visual tests
- Added info list
- Renamed message-box__error-list to __list

## Version 4.1.0
- Added message-box__error-list
- Updated exclamation mark icon to latest version

## Version 4.0.0

### Breaking changes

Bumped peer dependency version of ffe-core. No external API change, but this version requires a new major of `ffe-core`

* Renamed color names to stay in sync with refactoring in ffe-core@9.x

To migrate, update your app to ffe-core version 9.x

## Version 3.0.3
- Added border-radius

## Version 3.0.2
- Added link styling

## Version 3.0.1
- Fixed minor border overflow visual bug when `@media print`
- Bumped dependency on `ffe-core` to `^8.1.0`

## Version 3.0.0
- Bumped dependency on `ffe-core` to `^8.0.2`

## Version 2.1.1
- Rollback dependency on `ffe-core` to `^6.0.0` to avoid issues with peerDependency. This change requires new major version of this project.

## Version 2.1.0
- Modified the curvature below the svg
- Bumped dependency on `ffe-core` to `^8.0.2`

## Version 2.0.2
- Fungerer nå på små flater

## Version 2.0.0
- Endret navn "warning" til "error" for å bedre reflektere faktisk bruk
- Endret html-struktur slik at innsnitt i bakgrunnsfargen ikke er avhengig av størrelsen på ikonet
- Endret til å bruke 20%-versjoner av fargene
- La til padding også på sidene
- La til fargelegging av svg-ikoner

## Version 1.0.0
- Oppdatert til å bruke v4.x av ffe-core

## Versjon 0.0.1
- Første versjon av ffe-message-box.
