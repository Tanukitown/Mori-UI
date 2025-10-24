# Component Structure - Atomic Design Methodology

This project follows the **Atomic Design** methodology by Brad Frost. Learn more at https://atomicdesign.bradfrost.com/chapter-2/

## Atomic Design Levels

### 🧬 Atoms (`/lib/atoms/`)

The basic building blocks of your component library. Atoms are the simplest components and cannot be broken down further without losing their meaning.

**Examples:**
- Button
- Input
- Label
- Icon
- Badge

**Structure:**
```
lib/atoms/
├── Button/
│   ├── Button.tsx
│   ├── Button.types.ts
│   ├── Button.css
│   ├── Button.stories.tsx
│   ├── Button.test.tsx
│   ├── ACCESSIBILITY.md
│   └── index.ts
├── index.ts
└── ...more atoms
```

**Current Atoms:**
- ✅ `Button` - Fully accessible, WCAG 2.1 AAA compliant with 7 variants and 3 sizes

---

### 🧬🧬 Molecules (`/lib/molecules/`)

Groups of atoms bonded together forming relatively simple functional units. Molecules are groups of atoms that function together as a unit.

**Examples:**
- Button Group (multiple buttons)
- Card Header (heading + icon + button)
- Search Input (input + button)
- Form Field (label + input + error message)

**Structure:**
```
lib/molecules/
├── ButtonGroup/
│   ├── ButtonGroup.tsx
│   ├── ButtonGroup.types.ts
│   ├── ButtonGroup.css
│   ├── ButtonGroup.stories.tsx
│   ├── ButtonGroup.test.tsx
│   └── index.ts
├── index.ts
└── ...more molecules
```

**Current Molecules:**
- *None yet - to be built*

---

### 🧬🧬🧬 Organisms (`/lib/organisms/`)

Complex UI components made up of groups of molecules or atoms. Organisms are relatively complex sections of an interface composed of groups of molecules or atoms combined together.

**Examples:**
- Navigation Bar
- Card (with header, content, footer)
- Form
- Modal
- Sidebar

**Structure:**
```
lib/organisms/
├── Navigation/
│   ├── Navigation.tsx
│   ├── Navigation.types.ts
│   ├── Navigation.css
│   ├── Navigation.stories.tsx
│   ├── Navigation.test.tsx
│   └── index.ts
├── index.ts
└── ...more organisms
```

**Current Organisms:**
- *None yet - to be built*

---

### 📄 Templates (`/lib/templates/`)

Page-level component that defines page layouts and the overall structure of pages. Templates are page-level objects that place components into a layout and demonstrate the design system in action.

**Examples:**
- BlogPost Template
- ProductPage Template
- DashboardLayout Template

**Structure:**
```
lib/templates/
├── BlogPost/
│   ├── BlogPost.tsx
│   ├── BlogPost.types.ts
│   ├── BlogPost.css
│   ├── BlogPost.stories.tsx
│   ├── BlogPost.test.tsx
│   └── index.ts
├── index.ts
└── ...more templates
```

**Current Templates:**
- *None yet - to be built*

---

## Project Exports

The main export file (`lib/main.ts`) exposes all components from each atomic design level:

```typescript
// Atoms (building blocks)
export * from "./atoms";
// Molecules (groups of atoms)
export * from "./molecules";
// Organisms (groups of molecules)
export * from "./organisms";
// Templates (page layouts)
export * from "./templates";
```

**Usage:**
```typescript
// Import atoms
import { Button } from "@mori/ui";

// Future: Import molecules
// import { ButtonGroup } from "@mori/ui";

// Future: Import organisms
// import { Navigation } from "@mori/ui";

// Future: Import templates
// import { BlogPost } from "@mori/ui";
```

---

## Component File Structure

Each component follows a consistent file structure:

```
ComponentName/
├── ComponentName.tsx           # React component implementation
├── ComponentName.types.ts      # TypeScript types and interfaces
├── ComponentName.css           # Styles (CSS or CSS-in-JS)
├── ComponentName.stories.tsx   # Storybook stories for documentation
├── ComponentName.test.tsx      # Vitest unit tests
├── index.ts                    # Barrel export
└── [ACCESSIBILITY.md]          # Optional accessibility documentation
```

---

## Adding New Components

### Step 1: Determine the Level

Decide which atomic level your component belongs to:
- **Atom**: Simple, self-contained, cannot be broken down
- **Molecule**: Combination of atoms with a specific purpose
- **Organism**: Complex combination of molecules/atoms
- **Template**: Page layout container

### Step 2: Create the Directory

```bash
mkdir -p lib/atoms/NewComponent
# or
mkdir -p lib/molecules/NewComponent
# or
mkdir -p lib/organisms/NewComponent
# or
mkdir -p lib/templates/NewComponent
```

### Step 3: Create Component Files

**NewComponent.tsx** - The component implementation
```tsx
import { type NewComponentProps } from "./NewComponent.types";
import styles from "./NewComponent.css";

export const NewComponent = ({ ...props }: NewComponentProps) => {
  return <div className={styles.container}>{/* Component JSX */}</div>;
};
```

**NewComponent.types.ts** - Type definitions
```typescript
import { type ComponentProps } from "react";

export interface NewComponentProps extends ComponentProps<"div"> {
  // Your props here
}
```

**NewComponent.css** - Styles
```css
.container {
  /* Your styles */
}
```

**NewComponent.stories.tsx** - Storybook stories
```tsx
import { NewComponent } from "./NewComponent";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/NewComponent", // Adjust level as needed
  component: NewComponent,
  tags: ["autodocs"],
} satisfies Meta<typeof NewComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
```

**NewComponent.test.tsx** - Tests
```tsx
import { NewComponent } from "./NewComponent";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("NewComponent", () => {
  it("renders", () => {
    render(<NewComponent />);
    // Your assertions
  });
});
```

**index.ts** - Barrel export
```typescript
export { NewComponent } from "./NewComponent";
export type { NewComponentProps } from "./NewComponent.types";
```

### Step 4: Update Parent Index

Add export to the level's index file:

`lib/atoms/index.ts` (or appropriate level):
```typescript
// Atoms - Individual building blocks
export * from "./Button";
export * from "./NewComponent"; // Add this
```

### Step 5: Test & Document

Run tests and lint:
```bash
npm run test
npm run lint
```

Add accessibility documentation if needed in `ACCESSIBILITY.md`.

---

## Benefits of Atomic Design

1. **Modularity** - Components are self-contained and reusable
2. **Scalability** - Easy to grow the component library systematically
3. **Consistency** - Atoms ensure design consistency across molecules and organisms
4. **Maintainability** - Clear structure makes updates and refactoring easier
5. **Testing** - Smaller components are easier to test thoroughly
6. **Documentation** - Natural structure for Storybook documentation
7. **Collaboration** - Designers and developers speak the same language

---

## Current Component Inventory

### ✅ Atoms (3)
- **Button** - Versatile button with 7 variants, 3 sizes, icons, loading states
  - Features: WCAG 2.1 AAA compliant, 7:1 contrast ratio, keyboard accessible
  - Tests: 80 comprehensive tests including accessibility
  - Stories: 20+ stories covering all states and combinations

### 🔄 Molecules (0)
- *To be built*

### 🔄 Organisms (0)
- *To be built*

### 🔄 Templates (0)
- *To be built*

---

## Testing

All components include comprehensive testing:

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

Current test coverage:
- ✅ 143 tests passing
- ✅ Atoms: 80 Button tests
- ✅ Utilities: 24 testRenders + 39 classPrefixer tests

---

## Storybook

View component documentation and stories:

```bash
npm run storybook
```

Stories are organized by atomic design level:
- **Atoms/Button** - All button variants, states, and combinations
- **Atoms/[NewComponent]** - Future atoms
- **Molecules/[Name]** - Future molecules
- **Organisms/[Name]** - Future organisms
- **Templates/[Name]** - Future templates

---

## References

- [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/)
- [WCAG 2.1 Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [React Component Patterns](https://react-patterns.com/)
- [Storybook Best Practices](https://storybook.js.org/docs/react/api/csf)

---

## Contributing

When adding new components:
1. Follow the atomic design methodology
2. Include comprehensive tests and accessibility checks
3. Document in Storybook with multiple stories
4. Add type definitions for all props
5. Include ACCESSIBILITY.md for components with accessibility considerations
6. Update this README with new components

Remember: **Start with atoms, build up to molecules, combine into organisms, and structure with templates.**
