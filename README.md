# 🍃 Mori UI

[![codecov](https://codecov.io/gh/Tanukitown/Mori-UI/branch/main/graph/badge.svg)](https://codecov.io/gh/Tanukitown/Mori-UI)
[![npm version](https://badge.fury.io/js/%40mori%2Fui.svg)](https://badge.fury.io/js/%40mori%2Fui)
[![npm downloads](https://img.shields.io/npm/dm/%40mori%2Fui.svg)](https://www.npmjs.com/package/%40mori%2Fui)
[![Node.js version](https://img.shields.io/badge/node-%3E%3D23.10.0-green)](https://nodejs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?logo=react&logoColor=%2361DAFB)](https://react.dev)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/tailwind%20css-%2338B2AC.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

A modern, accessible React component library built with TypeScript, Vite, and Tailwind CSS. Mori UI provides a curated set of reusable UI components designed for building beautiful and inclusive web applications.

## Features

- 🎨 **Themeable Components** - Light and dark mode support with customizable themes
- ♿ **Accessible** - WCAG 2.1 AAA compliant components with comprehensive accessibility testing
- 📦 **Tree-shakeable** - Built with ES modules for optimal bundle sizes
- 🚀 **High Performance** - Built with Vite for lightning-fast development and builds
- 📖 **Storybook Docs** - Interactive component library with documentation
- 🧪 **Well Tested** - Comprehensive test coverage using Vitest
- 💅 **Styled with Tailwind** - Utility-first CSS with Tailwind CSS integration

## Getting Started

### Installation

```bash
npm install @mori/ui react react-dom
```

### Quick Start

```tsx
import { Button } from '@mori/ui';

export function App() {
  return
    <Button variant="primary">
      Click me!
    </Button>
  );
}
```

## Development

### Prerequisites

- Node.js 20+
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/Tanukitown/Mori-UI.git
cd Mori-UI

# Install dependencies
npm install
```

### Available Scripts

```bash
# Start development Storybook
npm run storybook

# Build Storybook for production
npm run build-storybook

# Build the component library
npm run build

# Run tests
npm run test

# Run tests in UI mode
npm run test:ui

# Run tests with coverage
npm run test:coverage

# Lint and check code
npm run lint

# Auto-fix linting issues
npm run lint:fix
```

## Project Structure

Mori UI follows the **Atomic Design** methodology for component organization. See [ATOMIC_DESIGN.md](./ATOMIC_DESIGN.md) for detailed information about the component structure and how to add new components.

```
Mori-UI/
├── .github/
│   └── workflows/           # GitHub Actions workflows
├── lib/
│   ├── atoms/              # Atomic building blocks (Button, etc.)
│   ├── molecules/          # Component combinations (to be built)
│   ├── organisms/          # Complex components (to be built)
│   ├── templates/          # Page layouts (to be built)
│   ├── utils/              # Utility functions
│   └── main.ts             # Main export file
├── styles/
│   ├── main.css            # Global styles
│   ├── dark.css            # Dark mode styles
│   └── storybook.css       # Storybook-specific styles
├── .storybook/             # Storybook configuration
├── vite.config.ts          # Vite configuration
├── ATOMIC_DESIGN.md        # Atomic design documentation
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from '@mori/ui';

<Button variant="primary" size="lg">
  Large Primary Button
</Button>
```

**Features:**
- Multiple variants: `primary`, `secondary`, `tertiary`, `success`, `warning`, `error`, `neutral`
- Sizes: `small`, `medium`, `large`
- Loading state support
- Icon support (left, right, or icon-only)
- Disabled state

## Theming

Mori UI uses CSS custom properties for theming. The design system supports both light and dark modes:

### Light Mode Variables

```css
--color-primary-300: #E7DFD1;
--color-primary-500: #5C4A36;
/* ... more colors */
```

### Dark Mode Variables

```css
[data-theme="dark"] {
  --color-primary-300: #4D3E2D;
  --color-primary-500: #D4AFAA;
  /* ... more colors */
}
```

## Documentation

Interactive component documentation is available in [Storybook](https://tanukitown.github.io/Mori-UI/).

## Testing

The library uses [Vitest](https://vitest.dev/) for unit testing and [React Testing Library](https://testing-library.com/react) for component testing.

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test

# Generate coverage report
npm run test:coverage
```

## Code Quality

- **TypeScript** - Full type safety
- **ESLint** - Code linting with modern JavaScript standards
- **Prettier** - Code formatting
- **Pre-commit hooks** - Automatic linting on commit

## Accessibility

Mori UI is committed to accessibility standards:

- ✅ WCAG 2.1 AAA compliance
- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ Color contrast compliance
- ✅ Semantic HTML

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

For detailed contribution guidelines and workflows, please refer to:

- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Full contribution workflow and development guidelines
- **[QUICK_START_DEVELOPMENT.md](./QUICK_START_DEVELOPMENT.md)** - Quick reference guide for developers with templates
- **[COMPONENT_UPDATE_CHECKLIST.md](./COMPONENT_UPDATE_CHECKLIST.md)** - Checklist for component updates and PR submissions

### Quick Development Start

```bash
# Install dependencies
npm install

# Start development Storybook
npm run storybook

# Run tests in watch mode
npm run test

# See QUICK_START_DEVELOPMENT.md for common tasks and templates
```

## License

MIT

## Author

**Tanukitown** - [GitHub](https://github.com/Tanukitown)
