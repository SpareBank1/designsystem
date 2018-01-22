# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="10.2.1"></a>
## 10.2.1 (2018-01-22)




**Note:** Version bump only for package ffe-header

#CHANGELOG

## Version 10.2.0
* Hide search on mobile
* Flexbox fixes for IE10
* Added svgs of all bank logos

## Version 10.1.0
* Provide a version of ffe-header without dependencies to other ffe packages.

## Version 10.0.1
* JavaScript used in the example supports IE.

## Version 10.0.0

### Breaking changes
* Rewrote styling and examples from scratch, according to new responsive header specs

## Version 9.0.0

### Breaking changes
* Bumped dependency on ffe-buttons to 5.x

## Version 8.0.3
* Support both versions 9 and 10 of `ffe-core`

## Version 8.0.2

Replaced hardcoded transition properties with variables from ffe-core

## Version 8.0.1

Since buttons are no longer part of ffe-core, ffe-buttons was added as a peer dependency

## Version 8.0.0

### Breaking changes

Bumped peer dependency version of ffe-core. No external API change, but this version requires a new major of `ffe-core`

* Renamed color names to stay in sync with refactoring in ffe-core@9.x

To migrate, update your app to ffe-core version 9.x

## Version 7.0.0
* Bumped dependency on ffe-core to ^8.1.0

## Version 6.0.0
* Modified the profile name styling to not add single right-pointing angle quotation mark by default. Added modifier to be used if the profile name is a child element of an anchor tag, or to be used by an anchor directly.

## Version 5.0.0
* Oppdatert til å bruke v6.x av ffe-core

## Version 4.0.1
* Sett font-weight til normal for `ffe-header__heading`

## Version 4.0.0
* Oppdatert til å bruke v5.x av ffe-core

##Version 3.0.0
* Klassen `ffe-header__profile-action` fjernet igjen, endringen i button gjort i core som førte til at den ble laget var en bug og ikke en feature

##Version 2.0.0
* Oppdatert til å bruke v4.x av ffe-core
* Klassen `ffe-header__profile-action` kan brukes for elementer som skal være inline

##Versjon 1.0.0

* Oppgradert avhengighet til ffe-core 2.x
* Bytter fra RSCSS til BEM som kodestandard for CSS.

##Versjon 0.0.1

Første versjon av ffe-header.
