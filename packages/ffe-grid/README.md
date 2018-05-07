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
        <div class="
            ffe-grid__col--sm-12
            ffe-grid__col--md-6
            ffe-grid__col--lg-3
        ">
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

You can set the colum size to 0, e.g. `ffe-grid__col--md-0`. This enabled you to remove/add columns for specific screen-sizes.
See the "Disappearing columns example" in the example html for more details.

### Offset

The pattern is like so: `ffe-grid__col--{size}-offset-{num-of-cols}`

The offsets work in a similar fashion to the width specification modifiers. Each breakpoint
can have its own offset if needed.

### Condensed

#### `.ffe-grid--condensed`

Reduce gutter width to 20px, resp. 10px on smaller screens.

### Padding

#### `.ffe-grid--no-top-padding`

Remove the default top padding from the grid itself

#### `.ffe-grid__row--top-padding`

Add padding to the top of a grid row

#### `.ffe-grid__col--no-bottom-padding`

Remove the default bottom padding from the column

### Colours

Use a background colour on the rows. This requires that the children is wrapped in `.ffe-grid__row-wrapper`

```html
<div class="ffe-grid__row ffe-grid__row--bg-sand ffe-grid__row--top-padding">
  <div class="ffe-grid__row-wrapper">
      <div class="ffe-grid__col--md-6">
          <div class="ffe-grid__content"></div>
      </div>
      <div class="ffe-grid__col--md-6">
          <div class="ffe-grid__content"></div>
      </div>
  </div>
</div>
```

#### `.ffe-grid__row--bg-blue-pale`

Adds the `@ffe-blue-pale` colour as a background for the row

#### `.ffe-grid__row--bg-blue-cobalt`

Adds the `@ffe-blue-cobalt` colour as a background for the row

#### `.ffe-grid__row--bg-blue-ice`

Adds the `@ffe-blue-ice` colour as a background for the row

#### `.ffe-grid__row--bg-purple-magenta`

Adds the `@ffe-purple-magenta` colour as a background for the row

#### `.ffe-grid__row--bg-green-mint`

Adds the `@ffe-green-mint` colour as a background for the row

#### `.ffe-grid__row--bg-sand`

Adds the `@ffe-sand` colour as a background for the row

#### `.ffe-grid__row--bg-grey-cloud`

Adds the `@ffe-grey-cloud` colour as a background for the row

### Flexbox

Since the grid is based on the flexbox layout model, there's a few extra modifiers that's available
to you.

#### Rows

##### `.ffe-grid__row--reverse`

Reverses the grid columns so that they're laid out right to left instead

#### Columns

##### `.ffe-grid__col--horizontal`

Aligns the content of a cell horizontally

##### `.ffe-grid__col--reverse`

Aligns the content of a cell in the reverse order
(Can be used with `--horizontal` for a reversed horizontal order)

##### `.ffe-grid__col--start`

Aligns the content of a cell to the left

##### `.ffe-grid__col--center`

Aligns the content of a cell to the center

##### `.ffe-grid__col--end`

Aligns the content of a cell to the right

##### `.ffe-grid__col--top`

Aligns the content of a cell to the top

##### `.ffe-grid__col--top-padding`

Adds top-padding to the column. Useful for when you have background colored columns

##### `.ffe-grid__col--middle`

Aligns the content of a cell to the vertical middle

##### `.ffe-grid__col--bottom`

Aligns the content of a cell to the bottom

##### `.ffe-grid__col--around`

Space the content out with space around each item

##### `.ffe-grid__col--between`

Space the content out with space between each item
