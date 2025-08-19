# Live Code Editor Standardization Guide

## Overview

This guide explains how to add live code editors to Storybook stories using the standardized `createLiveCodeStory` utility.

## When to Add Live Code Editors

Add live code editors for:

- **Primary components** (main exports from packages)
- **Interactive components** (buttons, forms, accordions, etc.)
- **Layout components** (cards, grids, etc.)
- **Complex components** that benefit from experimentation

Skip live code editors for:

- **Simple utility components** (dividers, spacers)
- **Icon components** (unless showcasing different variants)
- **Pure display components** with minimal props

## Standard Implementation Pattern

### 1. Create a `.livecode.stories.tsx` file

```tsx
import type { StoryObj, Meta } from '@storybook/react';
import { YourComponent } from './YourComponent';
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';

const meta: Meta<typeof YourComponent> = {
    title: 'Komponenter/YourPackage/Live Code Editor',
    component: YourComponent,
    parameters: {
        docs: {
            description: {
                component:
                    'Interaktiv live code editor for YourComponent. [Brief description of what users can experiment with]',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof YourComponent>;

// Define templates for your component
const yourComponentTemplates = {
    simple: {
        name: 'Enkelt',
        icon: '📝',
        code: `<YourComponent>
    Basic example
</YourComponent>`,
    },
    // Add more templates as needed...
};

export const LiveCodeEditor: Story = createLiveCodeStory(YourComponent, {
    templates: yourComponentTemplates,
    additionalComponents: {
        // Include related components that users might need
    },
    defaultTemplate: 'simple',
    title: 'YourComponent Live Code Editor',
    description: 'Detailed description of what users can do with this editor.',
});
```

### 2. Template Categories

Use these standard template categories:

- **`simple`**: Basic usage example (always include this)
- **`variants`**: Different visual variants or types
- **`sizes`**: Different size options
- **`states`**: Different states (disabled, loading, etc.)
- **`interactive`**: Examples with React hooks and interactivity
- **`styled`**: Custom styling examples with FFE design tokens
- **`showcase`**: Complex, real-world usage examples

### 3. Template Structure

Each template should follow this structure:

```tsx
templateName: {
    name: 'Display Name',        // Norwegian, user-friendly name
    icon: '📝',                  // Emoji icon for visual identification
    code: `<Component>           // Clean, well-formatted JSX
    Example content
</Component>`
}
```

### 4. Common Template Examples

#### Simple Template

```tsx
simple: {
    name: 'Enkelt',
    icon: '📝',
    code: `<Component>
    Basic content
</Component>`
}
```

#### Interactive Template

```tsx
interactive: {
    name: 'Interaktiv',
    icon: '⚡',
    code: `function InteractiveExample() {
    const [count, setCount] = useState(0);

    return (
        <Component onClick={() => setCount(count + 1)}>
            Clicked {count} times
        </Component>
    );
}

<InteractiveExample />`
}
```

#### Styled Template

```tsx
styled: {
    name: 'Stylet',
    icon: '🎨',
    code: `<div style={{
    padding: '24px',
    backgroundColor: 'var(--ffe-color-background-subtle)',
    borderRadius: '8px'
}}>
    <Component>
        Example with FFE design tokens
    </Component>
</div>`
}
```

## Migration from Manual Transforms

If you have existing stories with manual `transform` functions:

### Before (Manual Transform)

```tsx
export const Example: Story = {
    parameters: {
        docs: {
            source: {
                transform: (_code: string, storyContext: any) => {
                    return `<Component prop={${storyContext.args.prop}}>
                        Hardcoded content
                    </Component>`;
                },
            },
        },
    },
    render: args => <Component {...args}>Content</Component>,
};
```

### After (Live Code Editor)

```tsx
const templates = {
    example: {
        name: 'Example',
        icon: '📝',
        code: `<Component prop="value">
    Interactive content
</Component>`,
    },
};

export const LiveCodeEditor: Story = createLiveCodeStory(Component, {
    templates,
    defaultTemplate: 'example',
});
```

## Available Components in Live Code Scope

The `createLiveCodeStory` automatically includes these components in scope:

- **React hooks**: `useState`, `useEffect`, `useId`
- **FFE Buttons**: `PrimaryButton`, `SecondaryButton`, `ActionButton`, etc.
- **FFE Core**: `Heading1-6`, `BodyText`, `Paragraph`, etc.
- **FFE Components**: `CardBase`, `Accordion`, `Badge`, `Chip`, etc.
- **Your component**: Automatically included as the main component
- **Additional components**: Specified in `additionalComponents` config

## Best Practices

1. **Start simple**: Always include a basic `simple` template
2. **Show real usage**: Templates should demonstrate realistic use cases
3. **Use FFE tokens**: Prefer `var(--ffe-color-*)` over hardcoded colors
4. **Keep it clean**: Format code consistently with proper indentation
5. **Add context**: Use descriptive names and icons for templates
6. **Test interactivity**: Include interactive examples when relevant
7. **Document props**: Templates should showcase important component props

## File Naming Convention

- Main stories: `Component.stories.tsx`
- Live code stories: `Component.livecode.stories.tsx`
- Shared live code: `Component.livecode-shared.stories.tsx` (if used across multiple components)

## Package Integration Checklist

- [ ] Create `.livecode.stories.tsx` file
- [ ] Define meaningful templates
- [ ] Include related components in `additionalComponents`
- [ ] Remove any manual `transform` implementations
- [ ] Test all templates work correctly
- [ ] Update package documentation if needed
