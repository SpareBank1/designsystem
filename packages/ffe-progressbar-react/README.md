# @sb1/ffe-progressbar-react

## Description

Progress bar component for showing task completion.

Fremdriftsindikator for å vise fremdrift i en oppgave.

## Install

```bash
npm install --save @sb1/ffe-progressbar-react
```

## Usage

Full documentation on progressbar usage is available at https://design.sparebank1.no/komponenter/progressbar/.

## Examples

```tsx
import { ProgressBar } from '@sb1/ffe-progressbar-react';

function MyComponent() {
    return (
        <div>
            <ProgressBar percentage={50} />
            <ProgressBar percentage={75} label="75% fullført" />
            <ProgressBar percentage={100} variant="success" />
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
