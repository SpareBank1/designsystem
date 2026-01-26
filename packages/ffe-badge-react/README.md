# @sb1/ffe-badge-react

## Description

Badge component for displaying small labels or notification counts.

Badge-komponenten brukes for å vise små merkelapper eller teller for notifikasjoner.

## Install

```bash
npm install --save @sb1/ffe-badge-react
```

## Usage

Full documentation on badge usage is available at https://design.sparebank1.no/komponenter/badge/.

```tsx
import { Badge } from '@sb1/ffe-badge-react';

function MyComponent() {
    return (
        <div>
            <Badge>5</Badge>
            <Badge>Ny</Badge>
        </div>
    );
}
```

### With custom styling

```tsx
import { Badge } from '@sb1/ffe-badge-react';

function MyComponent() {
    return <Badge className="my-custom-badge">Custom badge</Badge>;
}
```

### Importing CSS

```css
@import '~@sb1/ffe-badge/css/badge.css';
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
