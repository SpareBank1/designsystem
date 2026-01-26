# @sb1/ffe-spinner-react

## Description

Loading spinner component for indicating ongoing processes.

Lasteindikator for å vise pågående prosesser.

## Install

```bash
npm install --save @sb1/ffe-spinner-react
```

## Usage

Full documentation on spinner usage is available at https://design.sparebank1.no/komponenter/spinner/.

## Examples

```tsx
import { Spinner } from '@sb1/ffe-spinner-react';

function MyComponent() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div>
            {isLoading && <Spinner />}
            <Spinner size="large" />
            <Spinner size="small" ariaLabel="Laster innhold..." />
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
