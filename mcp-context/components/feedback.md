# @sb1/ffe-feedback-react

## Description

React component library for SpareBank 1 Design System.

## Components

This package exports the following components:

- `Feedback`

## Installation

Install the package and all its dependencies:

```bash
npm install @sb1/ffe-feedback-react @sb1/ffe-buttons-react @sb1/ffe-core-react @sb1/ffe-feedback @sb1/ffe-form-react @sb1/ffe-icons-react @sb1/ffe-buttons @sb1/ffe-core @sb1/ffe-icons @sb1/ffe-form @sb1/ffe-collapse-react
```

### Dependencies

This package depends on:

- `@sb1/ffe-buttons-react`
- `@sb1/ffe-core-react`
- `@sb1/ffe-feedback`
- `@sb1/ffe-form-react`
- `@sb1/ffe-icons-react`
- `@sb1/ffe-buttons`
- `@sb1/ffe-core`
- `@sb1/ffe-icons`
- `@sb1/ffe-form`
- `@sb1/ffe-collapse-react`

## CSS Import

In your project's main CSS file, import the required styles:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-buttons/css/buttons.css';
@import '@sb1/ffe-collapse-react/css/collapse.css';
@import '@sb1/ffe-feedback/css/feedback.css';
@import '@sb1/ffe-form/css/form.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
```

Note: Make sure to import `@sb1/ffe-core/css/ffe.css` first as it contains base styles.

## API Reference

### Feedback Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `headingLevel` | `HeadingLevel` | No | - |
| `headingLookLike` | `HeadingLevel` | No | - |
| `locale` | `Locale` | No | - |
| `onThumbClick` | `(thumb: Thumb) => void` | Yes | - |
| `onFeedbackSend` | `(feedbackText: string, consent?: boolean) => void` | Yes | - |
| `onFinish` | `() => void` | No | - |
| `bgColor` | `BgColor` | No | - |
| `contactLink` | `FeedbackExpandedProps['contactLink']` | No | - |
| `texts` | `{` | No | - |
| `feedbackNotSentHeading` | `string` | No | - |
| `consentText` | `string` | No | - |

## Documentation

Full documentation is available at https://design.sparebank1.no/

## Additional Context

This is part of the SpareBank 1 FFE (Felles Front End) design system.
All components follow SpareBank 1's design guidelines and accessibility standards.
