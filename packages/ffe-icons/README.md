# @sb1/ffe-icons

This package contains CSS-styling for the Icon-component in `@sb1/ffe-icons-react`-package, and SVG-files of all allowed variants of Material Symbols icons.

## Install

```bash
npm install --save @sb1/ffe-icons
```

## Usage

Full documentation on icon usage is available at https://design.sparebank1.no/komponenter/ikoner/.

### Importing compiled CSS

If your project does not use Less, you can import the compiled styling:

```css
@import '~@sb1/ffe-icons/css/ffe-icons.css';
```

See also `@sb1/ffe-icons-react`.

## Updating available icons

Running `npm run build:icons` or the Github action: `update ffe-icons svgs` will run the `bin/build.js`-script.

The script will:

- Set available variants, like size, weight and fill/no fill
- Get the names of all icons available in Material Symbols
- Compare available names with existing SVG-files. If an icon has been deleted since last update, it'll delete all SVG-files of the removed icon.
- Download SVG-files for all missing variants/icons, and place it in the right folder.
- Resize the 40px icons to 32px, since they are not available at 32px in Material Symbols.
