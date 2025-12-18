# @sb1/ffe-pagination-react

## Description

Paginering benyttes til søkeresultater og lignende presentasjon av store mengder informasjon som ikke får plass på en enkelt side.

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

## Basic Usage

```typescript
import { Pagination, usePagination } from '@sb1/ffe-pagination-react';

function MyComponent() {
  return (
    <Pagination>
      {/* Component content */}
    </Pagination>
  );
}
```

## API Reference

### Info Props

| Prop     | Type     | Required | Description |
| -------- | -------- | -------- | ----------- |
| `locale` | `Locale` | Yes      | -           |
| `start`  | `number` | Yes      | -           |
| `end`    | `number` | Yes      | -           |
| `total`  | `number` | Yes      | -           |

### NavigationBlock Props

| Prop         | Type         | Required | Description |
| ------------ | ------------ | -------- | ----------- | --- |
| `direction`  | `'next'      | 'prev'`  | Yes         | -   |
| `buttonText` | `boolean`    | No       | -           |
| `isHidden`   | `boolean`    | Yes      | -           |
| `locale`     | `Locale`     | Yes      | -           |
| `onClick`    | `() => void` | Yes      | -           |
| `className`  | `string`     | No       | -           |

### PageButton Props

| Prop       | Type         | Required | Description |
| ---------- | ------------ | -------- | ----------- |
| `isActive` | `boolean`    | Yes      | -           |
| `onClick`  | `() => void` | Yes      | -           |
| `children` | `number`     | Yes      | -           |
| `locale`   | `Locale`     | Yes      | -           |

### Pagination Props

| Prop                   | Type                     | Required | Description |
| ---------------------- | ------------------------ | -------- | ----------- |
| `className`            | `string`                 | No       | -           |
| `locale`               | `Locale`                 | No       | -           |
| `showRowsPerPageText`  | `boolean`                | No       | -           |
| `paginationControls`   | `PaginationControls`     | Yes      | -           |
| `rowsPerPageOptions`   | `number[]`               | No       | -           |
| `navigationButtonText` | `boolean`                | No       | -           |
| `ariaLabel`            | `string`                 | Yes      | -           |
| `onClickPrev`          | `() => void`             | No       | -           |
| `onClickNext`          | `() => void`             | No       | -           |
| `onClickPage`          | `(page: number) => void` | No       | -           |

### PerPageDropdown Props

| Prop                 | Type                         | Required | Description |
| -------------------- | ---------------------------- | -------- | ----------- |
| `locale`             | `Locale`                     | Yes      | -           |
| `defaultValue`       | `number`                     | Yes      | -           |
| `setPageSize`        | `(pageSize: number) => void` | Yes      | -           |
| `rowsPerPageOptions` | `number[]`                   | Yes      | -           |

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
