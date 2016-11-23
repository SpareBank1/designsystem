# ffe-expandable-react

An expandable component that lets you show or hide content based on a property.

## Install

```bash
$ npm install --save ffe-expandable-react
```

## Usage

Simply wrap the content you want to show or hide in this component, and you're good
to go. Provide the `isOpen` property to toggle it to be open or empty.

Here's a simple example:

```javascript
import React from 'react';
import Expandable from 'ffe-expandable-react';

const ExampleComponent = () = (
    <Expandable isOpen={this.state.isOpen}>
        <h2 className="ffe-h2">More info</h2>
        <p className="ffe-body-text">
            This content is only shown if the isOpen property is set.
        </p>
    </Expandable>
);
```

### Options
The `Expandable` component accepts quite a few optional properties:

#### `customClass`: PropTypes.string

Custom class names to apply to the middle `<div />` / the `<td />` element.

#### `expanded`: PropTypes.node (default: null)

Deprecated (but still supported) way of specifying the expandable content. Although you
typically want to send this in as children, you might want to do this instead. Same as
specifying `children` as a property.

#### `expandTime`: PropTypes.number (default: 0.5)

Duration in seconds for the span of the expand / collapse animation

#### `folded`: PropTypes.node (default: null)

Content to show above the expandable content.


#### `isOpen`: PropTypes.bool.isRequired (default: false)

Value deciding whether or not to render children.

#### `isTable`: PropTypes.bool (default: false)

Value deciding whether or not to render the element as a table row (with a single cell)
or as divs. If you're creating expandable table rows, set this to `true`.

## Development

To develop locally, start a local server with `npm start`.
To run the tests, run `npm test`.
