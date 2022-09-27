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

## Usage

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

### Background colors

The background color of rows can be changed using modifiers

```html
<div class="ffe-grid__row ffe-grid__row--bg-sand">
    <div class="ffe-grid__col--md-6">
        <!-- content -->
    </div>
    <div class="ffe-grid__col--md-6">
        <!-- content -->
    </div>
</div>
```

#### `.ffe-grid__row--bg-frost-30`

Sets the row background color to `@ffe-farge-frost-30`

#### `.ffe-grid__row--bg-sand`

Sets the row background color to `@ffe-farge-sand`

#### `.ffe-grid__row--bg-sand-70`

Sets the row background color to `@ffe-farge-sand-70`

#### `.ffe-grid__row--bg-sand-30`

Sets the row background color to `@ffe-farge-sand-30`

#### `.ffe-grid__row--bg-syrin-70`

Sets the row background color to `@ffe-farge-syrin-70`

#### `.ffe-grid__row--bg-syrin-30`

Sets the row background color to `@ffe-farge-syrin-30`

#### `.ffe-grid__row--bg-vann`

Sets the row background color to `@ffe-farge-vann`

#### `.ffe-grid__row--bg-vann-30`

Sets the row background color to `@ffe-farge-vann-30`

#### `.ffe-grid__row--bg-fjell`

Sets the row background color to `@ffe-farge-fjell`

#### `.ffe-grid__row--bg-hvit`

Sets the row background color to `@ffe-farge-hvit`
