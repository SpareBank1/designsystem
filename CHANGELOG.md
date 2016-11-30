# Changelog

## v2.5.2
* Add `outline: 0` to `.ffe-primary-button:focus` to avoid "double" focus in Firefox.

## v2.5.1
* Fix position of spinner in condensed buttons.
* Minor placement adjustment of icons in secondary and tertiary buttons (this time with help from professionals).

## v2.5.0
* Icons can be nested inside tertiary buttons with `.ffe-tertiary-button__label-icon`.
This also requires `.ffe-tertiary-button--with-icon` on the button.
* Adjust odd placement of icons in secondary buttons.

## v2.4.0
* Icons can be nested inside secondary buttons with `.ffe-secondary-button__label-icon`.

## v2.3.0
* Add compact variant of action, primary, secondary, tertiary and shortcut button (modifier `--condensed`).

## v2.2.0
* Added ffe-back-button

## v2.1.4
* Updated design of ffe-tertiary-button

## v2.1.3
* Add `fill: @ffe-blue-royal-light-wcag;` to `.ffe-shortcut-button__icon-chevron` so it's no longer black by default.
* Fix broken selector for `:hover` state of `.ffe-shortcut-button__icon-chevron`.

## v2.1.2

Add `cursor: pointer;` to `.ffe-tertiary-button`

## v2.1.1

Improve `.ffe-button-group` to use less fragile selectors

## v2.1.0

La til `ffe-button-group` _by popular demand_

## v2.0.0

* Bumpet ffe-core peerDependency til ny major ^8.0.2
* Bumpet devDependency på ffe-core til ^8.0.2

## v1.0.1

La til mixins.less med mixins som forsvinner fra ffe-core med version 8.0.0

## v1.0.0

Første versjon av pakken. Less-filene har før dette ligget i [ffe-core](https://stash.intern.sparebank1.no/projects/FFE/repos/ffe-core/browse/).
Ffe-buttons ble skilt ut fra ffe-core i ffe-core v8.0.0.
