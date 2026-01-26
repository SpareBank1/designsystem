# @sb1/ffe-chips-react

## Description

Chip components for creating interactive, compact elements with optional icons.

Chip-komponenten brukes for å lage interaktive, kompakte elementer med valgfrie ikoner.

## Install

```bash
npm install --save @sb1/ffe-chips-react
```

## Usage

Full documentation on chip usage is available at https://design.sparebank1.no/komponenter/chip/.

```tsx
import { Chip } from '@sb1/ffe-chips-react';

function MyComponent() {
    return (
        <div>
            <Chip size="md" onClick={() => console.log('Clicked')}>
                Click me
            </Chip>
            <Chip size="lg" onClick={() => console.log('Large chip')}>
                Large chip
            </Chip>
        </div>
    );
}
```

### With icons

```tsx
import { Chip } from '@sb1/ffe-chips-react';
import { Icon } from '@sb1/ffe-icons-react';

function MyComponent() {
    return (
        <div>
            <Chip
                size="md"
                leftIcon={
                    <Icon
                        fileUrl="icons/open/300/notifications.svg"
                        size="md"
                    />
                }
                onClick={() => console.log('With left icon')}
            >
                With left icon
            </Chip>
            <Chip
                size="md"
                rightIcon={
                    <Icon fileUrl="icons/open/300/close.svg" size="md" />
                }
                onClick={() => console.log('With right icon')}
            >
                With right icon
            </Chip>
        </div>
    );
}
```

### As a link

```tsx
import { Chip } from '@sb1/ffe-chips-react';

function MyComponent() {
    return (
        <Chip as="a" href="/page" size="md">
            Navigate
        </Chip>
    );
}
```

### Importing CSS

```css
@import '~@sb1/ffe-chips/css/chip.css';
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
