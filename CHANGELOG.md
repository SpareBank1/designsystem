# Changelog for ffe-form-react

## v.2.0.1
* Fix failing prop type for `InputGroup`

## v.2.0.0
* BREAKING: `InputGroup` no longer supports sending in your own ID - it will now be generated
and applied automatically when needed.
* `InputGroup` now supports sending a function as a child, which lets you deal with sending in
several children (i.e. text nodes). See the README.md for how to use this.
* `InputGroup` will throw a descriptive error when used with several children instead of
with just one.


## v.1.0.0
* First release.
