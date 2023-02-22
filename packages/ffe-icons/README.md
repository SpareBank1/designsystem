# @sb1/ffe-icons

This is a package meant for sharing commonly used icons between various projects. If your project uses a generic icon which might be useful for others, you should consider adding it here.

ffe-icons builds an SVG sprite with all the icons from `icons/` and puts it in the `dist/`folder.

**Note:** Previous icon requirements description has been moved from `icons/_ICON_REQUIREMENTS.MD` into the "[Adding a new icon](#adding-a-new-icon)" section within this document.

## Table of contents

-   [Install](#install)
-   [Usage](#usage)
    -   [Using the ffe-icons sprite](#using-the-ffe-icons-sprite)
-   [Adding a new icon](#adding-a-new-icon)
    -   [Optimizing](#optimizing)
    -   [Naming](#naming)
    -   [Adding](#adding)
-   [Useful resources](#useful-resources)
    -   [Links](#links)
    -   [Optimizing with Inkscape](#optimizing-with-inkscape)
-   [Know issues](#known-issues)

## Install

```bash
npm install --save @sb1/ffe-icons
```

## Usage

Full documentation on icon usage is available at https://design.sparebank1.no/komponenter/ikoner/.

See also `@sb1/ffe-icons-react`.

First add an `icons.json` file to your project where you define what icons you want. Additionally, you can
pass in options that [svg-sprite](https://github.com/jkphl/svg-sprite) support to override defaults.

Example `icons.json`:

```json
{
    "dest": "app/",
    "icons": [
        "1-2-3-sirkel-ikon",
        "bamse-ikon",
        "dor-ikon",
        "flamme-ikon",
        "logo-sparebank1",
        "twitter-ikon"
    ],
    "config": {
        "log": "error",
        "mode": {
            "symbol": {
                "sprite": "awesome-icons.svg"
            }
        }
    }
}
```

To build your icon sprite, run the `ffe-icons` command using Node and pass the path to your `icons.json` as `--opts`.
It is recommended you add an npm-script to your `package.json` like so:

```json
{
    "name": "awesome-client",
    "scripts": {
        ...
        "ffe:icons": "ffe-icons --opts=icons.json",
        ...
    }
}
```

Then, in your terminal:

`npm run ffe:icons`

A fresh SVG sprite should now have arrived at your destination.

Note: **it is recommended that you _not_ check the generated sprite into source control, but instead let ffe-icons
generate it at build-time.** This reduces the number of manual build steps, and keeps you up-to-date.

### Using the ffe-icons sprite

The primary color (royal blue) is removed from the SVG. This is so CSS can be used to override the color. To re-instate
royal blue as the primary color, add the following to your global icon class:

```css
.icon {
    fill: '#002776'; // Or, even better:
    fill: @ffe-blue-royal; // assuming use and import of ffe-core variables

    // To add alternatives, replace the fill attribute with whatever color you need
    &--white {
        fill: #fff;
    }
    &--black {
        fill: #000;
    }
}
```

Non-royal blue colors are left as-is, so details in other colors are left untouched.

In your markup:

```html
<svg class="icon">
    <use
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xlink:href="/app/symbol/ffe-icons.svg#person-ikon"
    ></use>
    <!-- <desc>Alt text goes here</desc> -->
</svg>
```

Finally, depending on the current state of browsers and support requirements you may need to include the
[SVG for Everybody](https://github.com/jonathantneal/svg4everybody) shim in your app.

## Adding a new icon

So you've decided to contribute to our icons collection - that's great news! However, before you get started you should always consider if your icon would be useful to others outside your app/team. If you need help making that decision, or have any other questions - feel free to reach out to us either on Slack (#ext-designsystem) or via [GitHub Issues](https://github.com/SpareBank1/designsystem/issues).

### Optimizing

Many of the most popular visual SVG editors tends to generate code that is _less than ideal_ for the web. In addition to larger files with unnecessary code, things like CSS might leak into other parts of your applications, or some wonky property might make your bundling system freak out. In other words - you should familiarize with the SVG code, and make sure you optimize it properly.

-   Remove unecessary code and properties. Tools like [this online SVG editor](https://petercollingridge.appspot.com/svg-editor) might be easier than manually using your editor.

-   Avoid using inline CSS. This might leak into other parts of your applications in addition to making it more complicated to control your from the outside. If you really have to use it - make sure the ID/classes you use are so unique that they wont interfer with any other styles.

-   Avoid embedding the primary color, this should be controlled by CSS. Other colors that shouldn't be overridable might be emdedded in the file.

-   The shape **must** fill the viewbox - minimum two edges of the square viewbox should be in contact with the shape. This is so margins can be fully controlled using CSS.

### Naming

You should **always name your icon according to what it is**, not what it will be used for. For example, let's say you have an icon picturing a wheelchair which you plan to use as a health insurance icon. Instead of naming it "health insurance" you should rather use "wheelchair". That way, another team could easilly re-use the same icon for their "accessibility" page.

### Adding

Once your icon is optimized and properly named, it's time to put it inside the `icons/` directory. At this point it might be a good idea to compare your icons to some existing ones. This might also be a good time to run `npm run build` to make sure everything works.

If you've made it this far, it's time to make a pull request. If this is your first time, you should read our [contribution guidelines](https://github.com/SpareBank1/designsystem/blob/develop/CONTRIBUTING.md) first.

## Useful resources

### Links

-   [Online SVG Optimizer](https://petercollingridge.appspot.com/svg-editor)
-   [Online SVG editor](https://github.com/SVG-Edit/svgedit)
-   [SVGOMG](https://jakearchibald.github.io/svgomg/)

### Optimizing with Inkscape

1. Open the SVG file in Inkscape
2. SHIFT-CTRL-D Change the width and height to 200.
3. CTRL-A Select all elements.
4. SHIFT-CTRL-G Remove groups, (<g> elements). Repeat until no more groups.
5. CTRL-A and CTRL-'+' (Union) - Convert all elements to a single path. This may make the icon larger if the path is very complex.
6. SHIFT-CTRL-M Scale the icon until it fills the view box (vertical or horizontal), Hold SHIFT-CTRL to preserve ratio.
7. SHIFT-CTRL-S Save the icon as Optimized SVG
8. Open the icon in a text editor and check if it contains any transform attributes. If not, jump to 10.
9. Open the icon in http://editor.method.ac/ CTRL-A and choose Object->Reorient Path - This usually removes transforms. Save the file to disk.
10. Remove all metadata og unnecessary whitespace. The structure of the .svg file should be <svg viewBox="0 0 200 200" xmln"..."><path d="..."/></svg> [SVGOMG](https://jakearchibald.github.io/svgomg/) does a good job in removing cruft.

## Known issues

See the current status on browser support for SVG fragments on [caniuse.com](caniuse.com/svg-fragment).

-   At time of writing, the generated SVG sprite cannot be used as a source for `background-image` in your CSS like "single" SVGs can

## Development

To start a local development server, run the following from the designsystem root folder:

```bash
npm install
npm run build
npm start
```

A local instance of `component-overview` with live reloading will run at http://localhost:1234/.

Example implementations using the latest versions of all components are also available at https://sparebank1.github.io/designsystem.
