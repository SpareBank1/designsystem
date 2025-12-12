# @sb1/ffe-lists-react

## Description

React component library for SpareBank 1 Design System.

## Components

This package exports the following components:

- `BulletList`
- `BulletListItem`
- `CheckList`
- `CheckListItem`
- `NumberedList`
- `NumberedListItem`
- `StylizedNumberedList`
- `StylizedNumberedListItem`
- `DescriptionList`
- `DescriptionListMultiCol`
- `DescriptionListTerm`
- `DescriptionListDescription`
- `DetailListCard`
- `DetailListCardItem`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-lists-react @sb1/ffe-icons-react @sb1/ffe-lists @sb1/ffe-icons @sb1/ffe-core
```

### Dependencies

This package depends on:

- `@sb1/ffe-icons-react`
- `@sb1/ffe-lists`
- `@sb1/ffe-icons`
- `@sb1/ffe-core`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
@import '@sb1/ffe-lists/css/lists.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## Basic Usage

```typescript
import { BulletList, BulletListItem, CheckList, ... } from '@sb1/ffe-lists-react';

function MyComponent() {
  return (
    <BulletList>
      {/* Component content */}
    </BulletList>
  );
}
```

## API Reference

### BulletList Props

| Prop        | Type      | Required | Description |
| ----------- | --------- | -------- | ----------- |
| `condensed` | `boolean` | No       | -           |

### CheckList Props

| Prop      | Type | Required | Description |
| --------- | ---- | -------- | ----------- | ---- | --- | --- |
| `columns` | `1   | 2        | '1'         | '2'` | No  | -   |

### CheckListItem Props

| Prop      | Type      | Required | Description |
| --------- | --------- | -------- | ----------- |
| `isCross` | `boolean` | No       | -           |

### DescriptionList Props

| Prop         | Type      | Required | Description |
| ------------ | --------- | -------- | ----------- | --- |
| `size`       | `'md'     | 'lg'`    | No          | -   |
| `horizontal` | `boolean` | No       | -           |

### DetailListCard Props

| Prop              | Type                                                                                                                  | Required  | Description |
| ----------------- | --------------------------------------------------------------------------------------------------------------------- | --------- | ----------- | --- |
| `appearance`      | `'accent' */`                                                                                                         | Yes       | -           |
| `appearance`      | `'default'                                                                                                            | 'accent'` | No          | -   |
| `values`          | ``primary` `secondary` `tertiary``                                                                                    | Yes       | -           |
| `https`           | `//sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger)`    | Yes       | -           |
| `bgColor`         | `BackgroundColor`                                                                                                     | No        | -           |
| `https`           | `//sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */` | Yes       | -           |
| `bgDarkmodeColor` | `never`                                                                                                               | No        | -           |

### DetailListCardItem Props

| Prop    | Type              | Required | Description |
| ------- | ----------------- | -------- | ----------- |
| `label` | `React.ReactNode` | Yes      | -           |
| `value` | `React.ReactNode` | Yes      | -           |

### NumberedList Props

| Prop        | Type      | Required | Description |
| ----------- | --------- | -------- | ----------- |
| `condensed` | `boolean` | No       | -           |

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
