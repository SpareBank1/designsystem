# @sb1/ffe-pagination-react

## Description

Pagination component for navigating through pages of content.

## Components

This package exports the following components:

- `Pagination`
- `usePagination`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-pagination-react @sb1/ffe-buttons-react @sb1/ffe-core @sb1/ffe-core-react @sb1/ffe-dropdown-react @sb1/ffe-icons-react @sb1/ffe-pagination @sb1/ffe-buttons @sb1/ffe-icons @sb1/ffe-form
```

### Dependencies

This package depends on:

- `@sb1/ffe-buttons-react`
- `@sb1/ffe-core`
- `@sb1/ffe-core-react`
- `@sb1/ffe-dropdown-react`
- `@sb1/ffe-icons-react`
- `@sb1/ffe-pagination`
- `@sb1/ffe-buttons`
- `@sb1/ffe-icons`
- `@sb1/ffe-form`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-buttons/css/buttons.css';
@import '@sb1/ffe-form/css/form.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
@import '@sb1/ffe-pagination/css/pagination.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## API Reference

### Pagination Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `className` | `string` | No | - |
| `locale` | `Locale` | No | - |
| `showRowsPerPageText` | `boolean` | No | - |
| `paginationControls` | `PaginationControls` | Yes | - |
| `rowsPerPageOptions` | `number[]` | No | - |
| `navigationButtonText` | `boolean` | No | - |
| `ariaLabel` | `string` | Yes | - |
| `onClickPrev` | `() => void` | No | - |
| `onClickNext` | `() => void` | No | - |
| `onClickPage` | `(page: number) => void` | No | - |

### usePagination Props

No component-specific props beyond native HTML attributes.

## Manual Examples (from README)

```tsx
import { Pagination } from '@sb1/ffe-pagination-react';
import { useState } from 'react';

function MyComponent() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    return (
        <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={page => setCurrentPage(page)}
        />
    );
}
```

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
