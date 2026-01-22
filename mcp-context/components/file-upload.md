# @sb1/ffe-file-upload-react

## Description

React component library for SpareBank 1 Design System.

## Components

This package exports the following components:

- `FileUpload`
- `getFileContent`
- `getUniqueFileName`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-file-upload-react @sb1/ffe-buttons-react @sb1/ffe-file-upload @sb1/ffe-form @sb1/ffe-icons-react @sb1/ffe-buttons @sb1/ffe-core @sb1/ffe-icons
```

### Dependencies

This package depends on:

- `@sb1/ffe-buttons-react`
- `@sb1/ffe-file-upload`
- `@sb1/ffe-form`
- `@sb1/ffe-icons-react`
- `@sb1/ffe-buttons`
- `@sb1/ffe-core`
- `@sb1/ffe-icons`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-buttons/css/buttons.css';
@import '@sb1/ffe-file-upload/css/file-upload.css';
@import '@sb1/ffe-form/css/form.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## API Reference

### FileUpload Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `id` | `string` | Yes | - |
| `label` | `string` | Yes | - |
| `files` | `Record<string, FileItemProps<Document>['file']>` | Yes | - |
| `multiple` | `boolean` | No | - |
| `title` | `string` | Yes | - |
| `infoText` | `string` | Yes | - |
| `infoSubText` | `string` | No | - |
| `cancelText` | `string` | No | - |
| `deleteText` | `string` | No | - |
| `uploadTitle` | `string` | Yes | - |
| `uploadMicroText` | `string` | Yes | - |
| `uploadSubText` | `string` | Yes | - |
| `accept` | `string` | No | - |

### getFileContent Props

No component-specific props beyond native HTML attributes.

### getUniqueFileName Props

No component-specific props beyond native HTML attributes.

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
