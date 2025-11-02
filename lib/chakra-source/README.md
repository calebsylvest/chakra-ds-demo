# Chakra UI Component Source Code

This directory contains local copies of Chakra UI component source code extracted from the `@chakra-ui/react` npm package.

## Purpose

These files are copied from `node_modules/@chakra-ui/react/dist/` for easy reference and study. They are **not** meant to be imported or used directly in your application. Continue using the components from `@chakra-ui/react` in your code.

## Structure

Each component has its own directory containing:
- `*.js` - Compiled JavaScript implementation
- `*.d.ts` - TypeScript type definitions
- `index.js` - Component exports

## Available Components

### Button (`button/`)
- `button.js` - Main Button component implementation
- `button.d.ts` - TypeScript definitions
- `index.js` - Exports for Button, IconButton, ButtonGroup, CloseButton

### Field (`field/`)
- `field.js` - Field component implementation (Root, Label, HelperText, ErrorText, etc.)
- `field.d.ts` - TypeScript definitions
- Components: FieldRoot, FieldLabel, FieldHelperText, FieldErrorText, FieldErrorIcon, FieldRequiredIndicator

### Switch (`switch/`)
- `switch.js` - Switch component implementation
- `switch.d.ts` - TypeScript definitions
- Components: SwitchRoot, SwitchLabel, SwitchThumb, SwitchControl, SwitchIndicator

## Notes

⚠️ **Important:**
- These are compiled/transpiled files from the npm package, not the original source code
- The original TypeScript source code is available on GitHub: https://github.com/chakra-ui/chakra-ui
- Import paths in these files reference internal Chakra UI modules that won't work if you try to use them directly
- These files are for **reference only** - use `import { Button } from '@chakra-ui/react'` in your actual code

## Adding More Components

To add more components, copy the relevant files from:
- Source: `node_modules/@chakra-ui/react/dist/esm/components/[component-name]/`
- Types: `node_modules/@chakra-ui/react/dist/types/components/[component-name]/`

## Original Source

The original source code (TypeScript) can be found at:
- Repository: https://github.com/chakra-ui/chakra-ui
- Components: `packages/react/src/components/[component-name]/`

