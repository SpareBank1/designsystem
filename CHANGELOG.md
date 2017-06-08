# Changelog

## 4.2.0
* Added ffe-form 6.x to version range in peerDependencies

## 4.1.0
* Added ffe-form 6.x to version range in devDependencies

## Version 4.0.0

### Breaking changes

Bumped peer dependency versions of ffe-core and ffe-form. No external API change, but this version requires a new major of both packages

* Renamed color names to stay in sync with refactoring in ffe-core@9.x
* Updated visual test baselines according to color changes in ffe-core

To migrate, update your app to ffe-core version 9.x and ffe-form version 5.x

## 3.1.0
* Added optional style to display the calendar above the field instead of below (`ffe-calendar--datepicker--above`).

## 3.0.1
* Fixed issue with the previous and next month buttons on iPhone(6)/Safari causing the datepicker not to work at all.

## 3.0.0
* Added support for ffe-form version 4.x

## v.2.1.1
* Bumped dependency on ffe-form

## v.2.1.0
* Add visual tests

## v.2.0.0
* Bumped dependency on `ffe-core` to `^8.0.2`
* Added explicit dependency on `ffe-form`

## v.1.0.4
* Renamed styles folder to less

## v.1.0.3
* Fix calendar header title text width to avoid next/prev arrows moving on click (Jira: DIG-11736)

## v.1.0.1 and v.1.0.2
* Add metadata for styleguide documentation

## v.1.0.0
* Initial release
