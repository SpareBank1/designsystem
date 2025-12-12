# AI Context Documentation for FFE Design System

## Overview

This documentation structure is designed to make the SpareBank 1 FFE (Felles Front End) design system easily accessible and understandable for Large Language Models (LLMs) and AI assistants.

## What We've Created

### 1. Root AI Context (`/ai-context.md`)

The main entry point for LLMs to understand the entire FFE component library. It includes:

- Overview of the design system architecture
- Complete catalog of all React component packages organized by category
- Installation guidelines and best practices
- Design principles and common patterns
- Quick reference to navigate to specific components

### 2. Package-Specific AI Context (`/packages/*/ai-context.md`)

Each React package (31 packages ending in `-react`) has its own detailed documentation:

- **Description**: What the component does and when to use it
- **Components**: List of all exported components, types, and utilities
- **Installation**: Complete npm install command with all FFE dependencies
- **CSS Import**: All required CSS imports (converted from less to css)
- **Usage**: Code examples showing how to import and use components
- **When to Use / When NOT to Use**: Guidelines extracted from design documentation
- **Additional Context**: Links to official documentation

## How It Works

### Generation Script (`/scripts/generate-ai-context.js`)

The Node.js script automatically:

1. **Scans all React packages** in `/packages/*-react/`
2. **Reads dependencies** from each package's `ffe-dependencies.json` file
3. **Extracts usage information** from `.mdx` documentation files
4. **Maps CSS imports** using the `packageStyles` object from `InstallImport.tsx`
5. **Generates markdown documentation** for each package
6. **Creates a comprehensive summary** at the root level

### Key Features

- **Automatic dependency resolution**: Lists all FFE dependencies needed for installation
- **CSS path conversion**: Automatically converts LESS paths to CSS paths
- **Usage guidelines extraction**: Pulls "When to use" and "When NOT to use" from MDX files
- **Component export detection**: Lists all exported components from `index.ts`
- **Categorized overview**: Groups components by purpose (Forms, Buttons, Layout, etc.)

## Regenerating Documentation

To update the AI context documentation after changes:

```bash
cd /home/sb1a.sparebank1.no/a504aw2/git/designsystem
node scripts/generate-ai-context.js
```

This will regenerate:

- All 31 `ai-context.md` files in package directories
- The root `ai-context.md` summary file

## Use Cases for MCP Server

This documentation structure is perfect for:

### Resources (Read-only access to documentation)

- `ffe://overview` - Returns the root ai-context.md
- `ffe://component/{package-name}` - Returns specific package ai-context.md
- `ffe://list-components` - Returns categorized list of all components

### Tools (Actions the MCP server can perform)

- `install_ffe_component` - Generate npm install commands with dependencies
- `get_css_imports` - Get CSS import statements for a component
- `find_component` - Search for components by purpose or name
- `validate_usage` - Check if component usage follows guidelines

## Documentation Structure

```
designsystem/
├── ai-context.md                          # Root overview for LLMs
├── scripts/
│   └── generate-ai-context.js             # Generation script
└── packages/
    ├── ffe-accordion-react/
    │   └── ai-context.md                  # Accordion-specific docs
    ├── ffe-buttons-react/
    │   └── ai-context.md                  # Buttons-specific docs
    ├── ffe-modals-react/
    │   └── ai-context.md                  # Modals-specific docs
    └── ... (31 packages total)
```

## Benefits

### For LLM Integration

- **Consistent format**: All documentation follows the same structure
- **Complete context**: Includes installation, usage, and design guidelines
- **Easy navigation**: Clear hierarchy from overview to specific components
- **Code-ready**: Provides actual npm commands and import statements

### For Developers

- **Single source of truth**: Auto-generated from existing documentation
- **Always up-to-date**: Can be regenerated after any changes
- **Comprehensive**: Covers all aspects of component usage

### For MCP Server

- **Efficient lookup**: LLMs can quickly find the right component
- **Accurate code generation**: Has all information needed to generate correct code
- **Best practices**: Includes when to use and when NOT to use components

## Next Steps

To build the MCP server:

1. **Define Resource Endpoints**
    - Serve the ai-context.md files as resources
    - Implement search and filtering

2. **Implement Tools**
    - Component installation helper
    - CSS import generator
    - Component search and recommendation

3. **Add Validation**
    - Verify component compatibility
    - Check for required dependencies
    - Validate usage patterns

4. **Testing**
    - Test with various LLM prompts
    - Verify code generation accuracy
    - Ensure best practices are followed

## Maintenance

The documentation should be regenerated:

- After adding new components
- When dependencies change
- When usage guidelines are updated
- After major design system updates

Simply run the generation script to keep everything synchronized.
