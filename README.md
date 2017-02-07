# ffe-grid

A 12-column grid you can use to visually structure your UIs.

## Installation

```bash
$ npm install --save ffe-core ffe-grid
```

Remember to include the less-file in your main less-file:

```less
@import '~ffe-grid/less/ffe-grid';
```

## Usage

All you need to remember is `.ffe-grid`, `.ffe-grid__row` and `.ffe-grid__col`.

The `.ffe-grid-col` class has a few modifiers that specify how large it should be
at a given viewport size, and if it should be offset.

>### Note
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

### Offset

The pattern is like so: `ffe-grid__col--{size}-offset-{num-of-cols}`

The offsets work in a similar fashion to the width specification modifiers. Each breakpoint
can have its own offset if needed.

### Padding

#### `.ffe-grid--no-top-padding`
Remove the default top padding from the grid itself

#### `.ffe-grid__col--no-bottom-padding`
Remove the default bottom padding from the column

### Colours

#### `.ffe-grid__row--bg-blue`
Adds the `@ffe-blue-royal-light-20` color as a background for the row

#### `.ffe-grid__row--bg-sand`
Adds the `@ffe-sand` color as a background for the row

### Flexbox

Since the grid is based on the flexbox layout model, there's a few extra modifiers that's available
to you.

#### `.ffe-grid__row--reverse`
Reverses the grid columns so that they're laid out right to left instead

#### `.ffe-grid__col--start`
Aligns the content of a cell to the left

#### `.ffe-grid__col--center`
Aligns the content of a cell to the center

#### `.ffe-grid__col--end`
Aligns the content of a cell to the right

#### `.ffe-grid__col--top`
Aligns the content of a cell to the top

#### `.ffe-grid__col--middle`
Aligns the content of a cell to the vertical middle

#### `.ffe-grid__col--bottom`
Aligns the content of a cell to the bottom

#### `.ffe-grid__col--around`
Space the content out with space around each item

#### `.ffe-grid__col--between`
Space the content out with space between each item

## Development

To develop locally, clone the repository and install the dependencies. Once you have, you have
the following commands available to you:

```bash
$ npm start             # Starts a local web server with live reload
$ npm test              # Runs visual regression tests
$ npm run lint          # Lints your less-files
$ npm run build         # Compiles the files into the examples/ folder
```

## Contributing

For contributing guidelines, check the
[contribution guidelines for ffe-core](***REMOVED***).
