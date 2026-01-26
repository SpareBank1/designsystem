# @sb1/ffe-tags-react

## Description

Tag components for labeling and categorizing content with different colors and sizes.

Tag-komponenten brukes for merking og kategorisering av innhold med ulike farger og størrelser.

## Install

```bash
npm install --save @sb1/ffe-tags-react
```

## Usage

Full documentation on tag usage is available at https://design.sparebank1.no/komponenter/tag/.

```tsx
import { Tag } from '@sb1/ffe-tags-react';

function MyComponent() {
    return (
        <div>
            <Tag variant="info">Info</Tag>
            <Tag variant="success">Success</Tag>
            <Tag variant="warning">Warning</Tag>
            <Tag variant="critical">Critical</Tag>
            <Tag variant="neutral">Neutral</Tag>
            <Tag variant="tip">Tip</Tag>
        </div>
    );
}
```

### Different types

```tsx
import { Tag } from '@sb1/ffe-tags-react';

function MyComponent() {
    return (
        <div>
            <Tag type="emphasis" variant="info">
                Emphasized
            </Tag>
            <Tag type="subtle" variant="info">
                Subtle
            </Tag>
        </div>
    );
}
```

### Different sizes

```tsx
import { Tag } from '@sb1/ffe-tags-react';

function MyComponent() {
    return (
        <div>
            <Tag size="sm" variant="neutral">
                Small
            </Tag>
            <Tag size="md" variant="neutral">
                Medium
            </Tag>
            <Tag size="lg" variant="neutral">
                Large
            </Tag>
        </div>
    );
}
```

### Importing CSS

```css
@import '~@sb1/ffe-tags/css/tag.css';
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
