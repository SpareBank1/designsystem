# Changelog

## v.8.0.0
* Removing components from ffe-core (new modules created for them in their respective repos).
* Updating examples to only include new ffe-core elements.
* Updated normalize.css and added it as an npm dependency. (see https://github.com/necolas/normalize.css/blob/master/CHANGELOG.md for changes since v.3.0.3)
* Cleaned up example files. Removed navigation, javascript and unused styling.
* Added a description for migrating to v8.0.0

## v.7.0.1
* Minor fix: make button texts of loading buttons unselectable, the text is only of interest for
  screen readers and ought to remain invisible under all circumstances.

## v.7.0.0
* Breaking: removed `--inline` support from `.ffe-form-label`. It was just setting max-width to 100% which is not the same as inlining. Removed `max-width: 85%` from `ffe-form-label`. It's layout and doesn't belong in the component. It now defaults to browser default which should be `none`. If you were using `ffe-form-label ffe-form-label--inline` you can just use `ffe-form-label`. If you were relying on the max-width being 85% then action is required.
* Breaking: removed support for deprecated `ffe-check-box` in favor of the arguably less aptly named `ffe-checkbox`. NOTE: Filename is also changed.
* Breaking: removed support for deprecated `ffe-select-box` in favor of the arguably less aptly named `ffe-dropdown`.
* Added CONTRIBUTE.md to clarify release procedures.

## v.6.3.2
* Change background position of dropdown arrows from fluid to static
* Rollback breaking change from v.6.3.1 - `--inline` support has been restored to `.ffe-form-label`

## v.6.3.1
* Add isLoading style for ffe-dropdown-react
* Focus state styling fix for select element in IE
* Focus state styling fix for ghost action button

## v.6.3.0
* Add description list component
* Patch --no-space on ffe-content-container to also work on larger screens
* Minor form examples fix: prefixed icon-info-error with ffe-

## v.6.0.1
* Minor radio switch fix: adjusted vertical position of the label
* Minor form examples fix: prefixed info-message and info-message--error with ffe-
* Added display: inline-block to ffe-primary-button__label-text fix a bug in Safari. Label disappears if changing states from loading to normal.

## v.6.0.0
* Several changes to sizes and line-heights of the typography. Also added ffe-sub-lead-paragraph.

## v.5.6.0
* Adding 20% opaque green.
* Adding 20% opaque orange.
* Adding 20% opaque light royal blue.
* Minor fixes to tertiary-button appearance.

## v.5.5.3
* Removing general positioning of spinner to fix layout bug when spinner is used on secondary buttons.
Bug happens because secondary-button reruns ffe-sb1-spinner-mixin after position is set in primary-button which it extends.

## v.5.5.2
* Fixed bug that vertically misalignes icon on info-messages. [Source of solution](http://stackoverflow.com/questions/11726442/font-rendering-line-height-issue-on-mac-pc-outside-of-element)

## v.5.5.1
* Secondary button: Modified colors for the loading state

## v.5.5.0
* Layout: Support `--bg-sand` and `--bg-grey` modifiers on `ffe-content-container`

## v.5.4.0
* ffe-dropdown replaces ffe-select-box, while ffe-select-box is kept (but deprecated) until the next major release

## v.5.3.1
* Responsive table: Fix left-alignment of table headers in Internet Explorer

## v.5.3.0
* Implemented Tertiary button
* Updated element mapping to include fieldsets. Fixes default styling set by normalize.
* Introduce less variable `ffe-expand-button-height`

## v.5.2.0
* Bugfix select box text foreground color
* New component: expand button (for controlling collapsable containers)

## v.5.1.0
* Implemented ghost- and tab-button

## v.4.2.1
* New build

## v.4.2.0 (16.03.2016)
* Inlined svg-icons in less to avoid potential include-issues

## v.4.1.0
* Introduce new gateway less-file: ffe-no-reset.less
* Add property for static resources to package.json. Fascilitates tooling that copies static resources to output folder

## v.4.0.1
* Fix: `ffe-` prefix for `@breakpoint-sm` was missing for `.primary-button` making buttons have width 100% on larger screens

## v.4.0.0 (08.03.2016)
* Element styling is now opt-in rather than default

## v.3.0.0 (07.03.2016)
* All css classes now prefixed with `ffe-`
* All less color variables now prefixed with `ffe-`

## v.2.1.1 (04.02.2016)

* Fix: 0 vertikal margin for content-container--no-space regardless of screen size
* Examples: it's better to use https:// URL than protocol relative
* Styling changes for check-box
* Styling changes for radio-button
* Make sure --no-margin variants of headers are always valid

## v.2.1.0 (04.01.2016)

* FFE-3 Adding layout system
* FFE-4 Using vendor fonts without hinting to avoid IE-issues and updated styleguide
* FFE-4 Fikser strong og fjerner unødvendige kodeeksempler på typografi
* Stilguide endringer (lagt til ny meny og ny struktur)

## v.2.0.0 (26.11.2015)

* Bytter fra RSCSS til BEM som kodestandard for CSS.

## v.1.0.3 (20.11.2015)

* IE-fix. Legger til z-index på radioknapp for at den ikke skal skjules under header ved re-rendring.

## v.1.0.2 (12.11.2015)

* Styling direkte på elementer er nå optional
* Fargejusteringer
* Fixet tabbing til checkboxer og radio-knapper for Mobile Safari
* Fjernet dobbel border-bottom under collapsed radio blocks

## v.1.0.0 (21.10.2015)

* Bruk av `aria-hidden` og `aria-invalid` for å style skjemafeil, erstatter `-error`
* Bruk av `aria-hidden` for å skjule innhold i radio-blocks, erstatter `-visible`

## v.0.0.2 (29.09.2015)

* Omstrukturering og design av eksempelsiden (stilguide)

## v0.0.1 (22.09.2015)

* Grunnleggende typografi, variabler (farger, etc.) og basic komponenter
