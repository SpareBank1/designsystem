# @sb1/ffe-shapes-react

## Description

Decorative shape components for visual interest.

Dekorative form-komponenter for visuell interesse.

## Install

```bash
npm install --save @sb1/ffe-shapes-react
```

## Usage

Full documentation on shapes usage is available at https://design.sparebank1.no/komponenter/shapes/.

## Examples

```tsx
import { Circle, Triangle, Square } from '@sb1/ffe-shapes-react';

function MyComponent() {
    return (
        <div>
            <Circle size="large" color="blue" />
            <Triangle size="medium" />
            <Square size="small" color="green" />
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
