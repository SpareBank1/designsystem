# @sb1/ffe-grid

A 12-column grid you can use to visually structure your UIs.

## Installation

```bash
npm install --save @sb1/ffe-core @sb1/ffe-grid
```

Remember to include the less-file in your main less-file:

```less
@import '~@sb1/ffe-grid/less/ffe-grid';
```

### Importing compiled CSS

If your project does not use Less, you can import the compiled styling:

```css
@import '~@sb1/ffe-grid/css/ffe-grid.css';
```

## Usage

Full documentation on grid usage is available at https://design.sparebank1.no/komponenter/grid/.

See also `@sb1/ffe-grid-react`.

All you need to remember is `.ffe-grid`, `.ffe-grid__row` and `.ffe-grid__col`.

The `.ffe-grid-col` class has a few modifiers that specify how large it should be
at a given viewport size, and if it should be offset.

> ### Note
>
> There should be no more than four columns on small devices and six columns on
> medium ones. Although it's technically possible, it's not something that's
> encouraged by the designers.

### Width

The pattern is like so: `ffe-grid__col--{size}-{num-of-cols}`

It's easier to explain with an example:

```html
<div class="ffe-grid">
    <div class="ffe-grid__row">
        <div
            class="
            ffe-grid__col--sm-12
            ffe-grid__col--md-6
            ffe-grid__col--lg-3
        "
        >
            <!-- content -->
        </div>
    </div>
</div>
```

This column will be 100 % (12 columns) for small screens, 50 % (6 columns) for medium
screens and 25 % (3 columns) for large screens.

You only have to specify one of these if you want - each column defaults to a 100 % width
for viewports that are not specified (i.e. `.ffe-grid__col--md-6` will be 100 % wide on small
devices, and 50 % on medium and large screens).

A column can be hidden entirely on a given breakpoint by setting the value to `0`, e.g. `.ffe-grid__col--sm-0` to hide it on small screens.

### Offset

The pattern is like so: `.ffe-grid__col--{size}-offset-{num-of-cols}`

The offsets work in a similar fashion to the width specification modifiers. Each breakpoint
can have its own offset if needed.

### Margin and padding

Margin and padding in the top and bottom of grid rows can be applied using the margin and padding modifiers:

`.ffe-grid__row--padding-{size}`
`.ffe-grid__row--margin-{size}`

Available sizes correspond to the [ffe spacing variables](https://design.sparebank1.no/profil/spacing/). For example, the required modifier to add a `4xl` (80px) margin to a row is `ffe-grid__row-padding-4xl`.

By default, rows have no padding or margin.

### Gap

The gutter/gap between columns can be controlled using the `.ffe-grid--gap-{size}` modifier. Available sizes correspond to the [ffe spacing variables](https://design.sparebank1.no/profil/spacing/), however the largest available size is `lg`.

The default gap is 16px, equivalent to `.ffe-grid--gap-sm`.

The gap value is also applied as a padding to the left and right of the grid.

### Center

Contents of a grid column can be centered horizontally and vertically using the `.ffe-grid__col--center` modifier.

### Center text

Text inside a grid column can be centered using the `.ffe-grid__col--center-text` modifier.

### Background colors

The background color of rows can be changed using modifiers. This requires that the children of `.ffe-grid__row` are wrapped in `.ffe-grid__row-wrapper`.

```html
<div class="ffe-grid__row ffe-grid__row--bg-primary">
    <div class="ffe-grid__row-wrapper">
        <div class="ffe-grid__col--md-6">
            <!-- content -->
        </div>
        <div class="ffe-grid__col--md-6">
            <!-- content -->
        </div>
    </div>
</div>
```

Supported background colors are limited to `surface` colors in the semantic color palette. This means you can choose from the following backgrounds, which in turn adhere to which mode the parent element is set to (i.e. light mode, dark mode, accent mode).

#### `.ffe-grid__row--bg-primary`

Sets the row background color to `--ffe-color-surface-primary-default`

#### `.ffe-grid__row--bg-secondary`

Sets the row background color to `--ffe-color-surface-primary-secondary`

#### `.ffe-grid__row--bg-tertiary`

Sets the row background color to `--ffe-color-surface-primary-tertiary`

## Development

To start a local development server, run the following from the designsystem root folder:

```bash
npm install
npm run build
npm start
```

A local instance of `component-overview` with live reloading will run at http://localhost:1234/.

Example implementations using the latest versions of all components are also available at https://sparebank1.github.io/designsystem.
