#CHANGELOG

## Version 3.3.0
* Add InfoMessageList and childComponent InfoMessageListItem.
* Updated to latest version of ffe-message-box (4.2.0)
* Updated to latest version of ffe-icons-react (2.4.5)

## Version 3.2.0
* Add support for className prop.

## Version 3.1.6
* Expand peerDep scope of `ffe-message-box` to include `4.x`.
* Remove peerDep on `ffe-core` and `ffe-icons-react`.

## Version 3.1.5
* Updated example descriptions

## Version 3.1.4
* Bumped ffe-icons-react dependency to ^2.3.0

## Version 3.1.2/3.1.3
* Added changes to styleguide example

## Version 3.1.1
* Bugfix: Stale version number of dependency react-dom caused peer dependency conflicts on npm install.

## Version 3.1.0
* Added support for styling outer container using style prop

## Version 3.0.1
 * Use newer version of ffe-icons-react

## Version 3.0.0
 * No longer render children inside a `<p />`. This allows for several
 paragraphs or other custom HTML structures. If you depend on this behavior,
 either provide your content to the `content` attribute, or wrap your
 children in a `<p className="ffe-body-text" />` tag.

## Version 2.0.0
 * Bumped dependency on `ffe-icons-react` to next major (`1.x`).

## Version 1.0.0
* Bumped dependency on `ffe-core` to `^8.0.2`
* Bumped dependency on `ffe-message-box` to `^3.0.0`
* Added a budo example page that can be launched with `npm start`

## Version 0.3.2
* Dont render title-element if title is not defined
* Changed title-element from h4 to div to avoid UU-issues

## Version 0.3.1
* Fixed displayName issue

## Version 0.3.0
* Oppdatert til 0.5.x av ffe-icons
