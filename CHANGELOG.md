# CHANGELOG

## Version 2.0.1
* Make white accordion the default layout. Previously there was no default layout (that wasn't broken) without
tons of modifiers everywhere. Now you don't need to add modifiers if you want the white design.
* Fix a bug where single-item accordions got a double bottom border
* Add a `viewport` meta tag to the examples page so that it scales correctly on smaller devices

## Version 2.0.0

### Breaking changes

Bumped peer dependency version of ffe-core. No external API change, but this version requires a new major of `ffe-core`

* Renamed color names to stay in sync with refactoring in ffe-core@9.x
* Bumped ffe-visual-tests-support version
* Updated visual test baselines according to color changes in ffe-core

To migrate, update your app to ffe-core version 9.x

## Version 1.3.3
* Add a few minor style changes to the toggler, to make it possible to use either an `<a>` or a `<button>` tag with the same visual results.
* Updated all examples to use a `<button>`, as it makes the most sense semantically.

## Version 1.3.2
* Remove .accordion-item bottom margin for white accordions that was introduced in 1.3.1.

## Version 1.3.1
* Design changes, including normalizing content and title padding, removing text-decoration and correcting colors

## Version 1.3.0
* Add visual tests and examples

## Version 1.2.0
* Increased padding right for accordion-toggler to make sure arrow does end on top of toggler-content

## Version 1.1.1
* Removed default padding from `<ul>` element as this counters the centering given by `margin: 0 auto;`

## Version 1.1.0
* Removed list style dots (list-style: none) as this shouldn't be pushed to the consumer app

## Version 1.0.0
* Initial version of ffe-accordion. Supports both blue and white version.
