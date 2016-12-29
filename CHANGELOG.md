# Changelog

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
