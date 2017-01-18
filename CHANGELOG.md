# CHANGELOG

## Version 7.0.0

**Potentially breaking change:** The first column is now fixed at 33.33% width.

This change was made so long titles in the column would wrap instead of creeping
in on the space of the next column. If this - for some reason - is your desired
behaviour you need to override the `max-width` attribute to `100%`.

## Version 6.0.1
* meta-data til styleguide

## Version 6.0.0
* Bruker v8.x av ffe-core

## Version 5.1.0
* Gjorde så elementer i en rad kan posisjoneres absolutt i forhold til raden

## Version 5.0.0
* Innført border-bottom på `__section-title` elementer

## Version 4.0.0
* Oppdatert til å bruke v6.x av ffe-core

## Version 3.0.0
* Kolonner med `--last` modifier har fått `flex-grow: 2`. Dette gjør at man ikke trenger å ha 4 kolonner for å få høyrejustert innholdet i `--last` kolonnen siden den nå vil stjele det som måtte være til overs av plass.

## Version 2.0.0
* Oppdatert til å bruke v5.x av ffe-core

## Version 1.0.0
* Oppdatert til å bruke v4.x av ffe-core

## Versjon 0.0.1
* Første versjon av ffe-details-list.
