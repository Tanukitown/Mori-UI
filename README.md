# 🍃 Tanuki UI

[![codecov](https://codecov.io/gh/Tanukitown/Tanuki-UI/branch/main/graph/badge.svg)](https://codecov.io/gh/Tanukitown/Tanuki-UI)
[![npm version](https://badge.fury.io/js/tanuki-ui.svg)](https://badge.fury.io/js/tanuki-ui)
[![npm downloads](https://img.shields.io/npm/dm/tanuki-ui.svg)](https://www.npmjs.com/package/tanuki-ui)
[![Node.js version](https://img.shields.io/node/v/tanuki-ui.svg)](https://nodejs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?logo=react&logoColor=%2361DAFB)](https://react.dev)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?logo=vite&logoColor=white)](https://vitejs.dev)

A modern, accessible React component library built with TypeScript, Vite, and Tailwind CSS. Tanuki UI provides a curated set of reusable UI components designed for building beautiful and inclusive web applications.

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
npm install tanuki-ui react react-dom
```

### Quick Start

```tsx
import { Button } from 'tanuki-ui';

export function App() {
  return (
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
git clone https://github.com/Tanukitown/Tanuki-UI.git
cd Tanuki-UI

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

```
tanuki-ui/
├── .github/
│   └── workflows/           # GitHub Actions workflows
├── lib/
│   ├── button/             # Button component
│   ├── utils/              # Utility functions
│   └── main.ts             # Main export file
├── styles/
│   ├── main.css            # Global styles
│   ├── dark.css            # Dark mode styles
│   └── storybook.css       # Storybook-specific styles
├── .storybook/             # Storybook configuration
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from 'tanuki-ui';

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

Tanuki UI uses CSS custom properties for theming. The design system supports both light and dark modes:

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

Interactive component documentation is available in [Storybook](https://tanukitown.github.io/Tanuki-UI/).

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

Tanuki UI is committed to accessibility standards:

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

## License

MIT

## Author

**Tanukitown** - [GitHub](https://github.com/Tanukitown)
