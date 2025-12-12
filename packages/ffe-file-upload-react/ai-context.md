# @sb1/ffe-file-upload-react

## Description

En komponent for å laste opp filer, for eksempel Excel-ark eller annen dokumentasjon.

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

## Basic Usage

```typescript
import { FileUpload, getFileContent, getUniqueFileName } from '@sb1/ffe-file-upload-react';

function MyComponent() {
  return (
    <FileUpload>
      {/* Component content */}
    </FileUpload>
  );
}
```

## API Reference

### FileItem Props

| Prop       | Type       | Required | Description |
| ---------- | ---------- | -------- | ----------- |
| `file`     | `{`        | Yes      | -           |
| `name`     | `string`   | Yes      | -           |
| `document` | `Document` | No       | -           |
| `error`    | `string`   | No       | -           |

### FileUpload Props

| Prop              | Type                                                                                          | Required     | Description |
| ----------------- | --------------------------------------------------------------------------------------------- | ------------ | ----------- | --- |
| `id`              | `string`                                                                                      | Yes          | -           |
| `label`           | `string`                                                                                      | Yes          | -           |
| `files`           | `Record<string, FileItemProps<Document>['file']>`                                             | Yes          | -           |
| `https`           | `//developer.mozilla.org/en-US/docs/Web/API/FileList) and`                                    | Yes          | -           |
| `https`           | `//developer.mozilla.org/en-US/docs/Web/API/File).`                                           | Yes          | -           |
| `fileList`        | `FileList                                                                                     | null): void` | Yes         | -   |
| `fileList`        | `FileList                                                                                     | null): void` | Yes         | -   |
| `file`            | `FileItemProps<Document>['file']): void`                                                      | Yes          | -           |
| `multiple`        | `boolean`                                                                                     | No           | -           |
| `title`           | `string`                                                                                      | Yes          | -           |
| `infoText`        | `string`                                                                                      | Yes          | -           |
| `infoSubText`     | `string`                                                                                      | No           | -           |
| `cancelText`      | `string`                                                                                      | No           | -           |
| `deleteText`      | `string`                                                                                      | No           | -           |
| `uploadTitle`     | `string`                                                                                      | Yes          | -           |
| `uploadMicroText` | `string`                                                                                      | Yes          | -           |
| `uploadSubText`   | `string`                                                                                      | Yes          | -           |
| `https`           | `//developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers)` | Yes          | -           |
| `accept`          | `string`                                                                                      | No           | -           |

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
