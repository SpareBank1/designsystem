# @sb1/ffe-feedback-react

## Description

React component for collecting user feedback with forms.

React-komponent for å samle inn tilbakemeldinger fra brukere med skjemaer.

## Install

```
npm install --save @sb1/ffe-feedback-react
```

## Usage

Full documentation is not yet available, but will be added to https://design.sparebank1.no/komponenter.

This package depends on `@sb1/ffe-buttons-react`, `@sb1/ffe-icons-react` and `@sb1/ffe-form-react`.
Make sure you import the less-files.

## Examples

```tsx
import { Feedback } from '@sb1/ffe-feedback-react';
import { useState } from 'react';

function MyComponent() {
    const [feedback, setFeedback] = useState('');

    return (
        <Feedback
            title="Hva synes du om denne siden?"
            onSubmit={value => {
                console.log('Feedback:', value);
                setFeedback(value);
            }}
            placeholder="Skriv din tilbakemelding her..."
            submitButtonText="Send inn"
        />
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
