# @sb1/ffe-collapse-react

## Description

React component for expand/collapse functionality.

React-komponent for å vise og skjule innhold med animasjon.

## Install

```
npm install --save @sb1/ffe-collapse-react
```

## Usage

Full documentation on collapse usage is available at https://design.sparebank1.no/komponenter/collapse/.

Please note the component depends on transition styling for `height`.\
This can preferably be done by importing the less-file from the less-folder
in the package.\
Alternatively you can do it by adding style to the class
`.ffe-collapse-transition`\, adding it to your own class and provide the class
through the `className` property or by styling it directly through the `style` property.

### Importing compiled CSS

If your project does not use Less, you can import the compiled styling:

```css
@import '~@sb1/ffe-collapse-react/css/collapse.css';
```

## Examples

```tsx
import { Collapse } from '@sb1/ffe-collapse-react';
import { useState } from 'react';

function MyComponent() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Skjul' : 'Vis'} innhold
            </button>
            <Collapse isOpen={isOpen}>
                <p>Dette innholdet kan vises og skjules</p>
            </Collapse>
        </div>
    );
}
```

## Development

To start a local development server, run the following from the designsystem root folder:

```bash
npm install
npm run build
npm start
```

A local instance of `Storybook` with live reloading will run at http://localhost:6006/.

Example implementations using the latest versions of all components are also available at https://sparebank1.github.io/designsystem.
