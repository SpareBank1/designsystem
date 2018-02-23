# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="3.0.6"></a>
## [3.0.6](https://github.com/SpareBank1/designsystem/compare/ffe-spinner-react@3.0.5...ffe-spinner-react@3.0.6) (2018-02-23)




**Note:** Version bump only for package ffe-spinner-react

<a name="3.0.5"></a>
## [3.0.5](https://github.com/SpareBank1/designsystem/compare/ffe-spinner-react@3.0.4...ffe-spinner-react@3.0.5) (2018-02-22)




**Note:** Version bump only for package ffe-spinner-react

<a name="3.0.4"></a>
## [3.0.4](https://github.com/SpareBank1/designsystem/compare/ffe-spinner-react@3.0.3...ffe-spinner-react@3.0.4) (2018-02-20)




**Note:** Version bump only for package ffe-spinner-react

<a name="3.0.3"></a>
## [3.0.3](https://github.com/SpareBank1/designsystem/compare/ffe-spinner-react@3.0.2...ffe-spinner-react@3.0.3) (2018-02-15)




**Note:** Version bump only for package ffe-spinner-react

<a name="3.0.2"></a>
## [3.0.2](https://github.com/SpareBank1/designsystem/compare/ffe-spinner-react@3.0.1...ffe-spinner-react@3.0.2) (2018-02-01)




**Note:** Version bump only for package ffe-spinner-react

<a name="3.0.1"></a>
## [3.0.1](https://github.com/SpareBank1/designsystem/compare/ffe-spinner-react@3.0.0...ffe-spinner-react@3.0.1) (2018-01-22)




**Note:** Version bump only for package ffe-spinner-react

<a name="3.0.0"></a>
# 3.0.0 (2018-01-22)


### Chores

* **ffe-spinner-react:** Reimplement ffe-spinner-react


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


## 2.0.4
* Document and refactor internally.
* Deprecate `text` prop in favor of `children`

## 2.0.3
* Use PropTypes from prop-types package

## 2.0.2
* Expand peerDep scope of `ffe-spinner` to include `2.x`.
* Remove peerDep on `ffe-core`.

## 2.0.1
* Upgrade eslint to use latest ffe config

# 2.0.0
* peerDependency on `ffe-core` bumped to `^8.0.2`
* Added explicit dependency on `ffe-core` and `ffe-spinner`
* Added a budo example page that can be launched with `npm start`

## 1.0.2
* peerDependency on `ffe-core` relaxed to `^6.0.0`

## 1.0.1
* peerDependency on `ffe-core` relaxed to `^5.0.0`

# 1.0.0
* Initial release
