# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="7.0.0"></a>
# 7.0.0 (2017-12-22)


### Features

* **eslint-config-ffe:** Add contribute.md link to readme ([869691f](http://stash.intern.sparebank1.no:22/ffe/ffe-monorepo/commits/869691f))
* **eslint-config-ffe:** Upgrade to eslint 4 ([05536ed](http://stash.intern.sparebank1.no:22/ffe/ffe-monorepo/commits/05536ed))


### BREAKING CHANGES

* **eslint-config-ffe:** Removes deprecated ecmaFeature setting and drops
support for eslint 3 and older.




# Changelog

## v.6.0.2 (13.10.2017)
* (patch) added support for `eslint-plugin-react@7`
* (patch) added various devDependencies

## v.6.0.1 (08.03.2017)
* (patch) at least one rule in `eslint-plugin-react` no longer work without an array prop.

## v.6.0.0 (29.12.2016)
* (breaking) jsx-a11y rules are included by default and require eslint-plugin-jsx-a11y.

## v.5.1.0 (28.12.2016)
* (feature) Include rules for eslint-plugin-jsx-a11y. Consumers must explicit included the rules.

## v.5.0.1 (18.10.2016)
* (patch) Remove eslint-plugin-import from peerDependencies, we get that from eslint-config-ffe-base. To avoid having to maintain the version number in two places.

## v.5.0.0 (04.10.2016)
* (patch) Add eslint@3.0.0 to peerDependencies
* (patch) Update eslint-plugin-import to 1.10.1 to get updated peerDependencies
* (breaking) Add elinst-plugin-react@6.0.0 to peerDependencies

## v.4.0.0 (20.09.2016)
* (breaking) Enforce line brake after first prop in components if multiline props
* (breaking) Enforce closing tag of components to be on new line if multiline props

## v.3.0.0 (10.08.2016)
* (breaking) Add new version of eslint-config-ffe-base which removes the "no-eq-null"-rule

## v.2.0.0 (12.05.2016)
* (breaking) Move most rules to eslint-config-ffe-base

## v.1.0.1 (06.05.2016)
* (bugfix) Removed duplicate rule "no-duplicates"
* (feature) Added "prop-types" rule
* (bugfix) Added "ignoreStateless"-option to "no-multi-comp"-rule

## v.1.0.0 (02.05.2016)
* Initial release
