#CHANGELOG

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
