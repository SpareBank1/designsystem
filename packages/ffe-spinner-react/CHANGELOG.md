# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="3.0.3"></a>
## [3.0.3](***REMOVED***) (2018-02-15)




**Note:** Version bump only for package ffe-spinner-react

<a name="3.0.2"></a>
## [3.0.2](***REMOVED***) (2018-02-01)




**Note:** Version bump only for package ffe-spinner-react

<a name="3.0.1"></a>
## [3.0.1](***REMOVED***) (2018-01-22)




**Note:** Version bump only for package ffe-spinner-react

<a name="3.0.0"></a>
# 3.0.0 (2018-01-22)


### Chores

* **ffe-spinner-react:** Reimplement ffe-spinner-react ([a847bf1](***REMOVED***))


### BREAKING CHANGES

* **ffe-spinner-react:** This commit reimplements and simplifies the
ffe-spinner-react implementation. It no longer includes layout, which
requires the consumer to place it correctly.

The `<InlineSpinner />` and `<LargeSpinner />` are now available as
`<Spinner large={true|false} />`.

The previous `<Spinner />` implementation, which wrapped a large
spinner in a `ffe-content-container` class is now removed. To keep this
behavior, the consumer can create its own implementation of a
`<SpinnerWithLayout />` or something similar.




# Changelog

## v.2.0.4
* Document and refactor internally.
* Deprecate `text` prop in favor of `children`

## v.2.0.3
* Use PropTypes from prop-types package

## v.2.0.2
* Expand peerDep scope of `ffe-spinner` to include `2.x`.
* Remove peerDep on `ffe-core`.

## v.2.0.1
* Upgrade eslint to use latest ffe config

## v.2.0.0
* peerDependency on `ffe-core` bumped to `^8.0.2`
* Added explicit dependency on `ffe-core` and `ffe-spinner`
* Added a budo example page that can be launched with `npm start`

## v.1.0.2
* peerDependency on `ffe-core` relaxed to `^6.0.0`

## v.1.0.1
* peerDependency on `ffe-core` relaxed to `^5.0.0`

## v.1.0.0
* Initial release
