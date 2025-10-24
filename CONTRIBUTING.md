# Contributing to Mori UI

Thank you for contributing to Mori UI! This guide outlines the standards and best practices for developing components following our atomic design methodology.

## Before You Start

1. Review the [Atomic Design Guide](./ATOMIC_DESIGN.md) to understand our component structure
2. Familiarize yourself with [WCAG 2.1 AAA standards](https://www.w3.org/WAI/WCAG21/quickref/)
3. Check existing components for patterns and best practices

## Component Development Workflow

### 📋 Checklist for Every Component Update

When creating a new component or updating an existing one, you **must** complete the following:

#### 1. ✅ Core Component Implementation
- [ ] Component implementation (`ComponentName.tsx`)
- [ ] TypeScript types (`ComponentName.types.ts`)
- [ ] Component styles (`ComponentName.css`)
- [ ] Barrel export (`index.ts`)

#### 2. ✅ Testing (CRITICAL)
- [ ] Unit tests (`ComponentName.test.tsx`) with comprehensive coverage
- [ ] Tests for all variants and states
- [ ] Accessibility tests (light mode, dark mode, hover, focus, active states)
- [ ] Tests for edge cases and error states
- [ ] All tests passing: `npm run test`

**Minimum Test Coverage:**
- 70%+ code coverage for new components
- All accessibility violations checked with axe-core
- Both light and dark mode testing
- Keyboard navigation testing
- Screen reader compatibility

#### 3. ✅ Storybook Stories (CRITICAL)
- [ ] Story file (`ComponentName.stories.tsx`) with multiple stories
- [ ] Default story
- [ ] Stories for each variant/state combination
- [ ] Accessibility documentation stories
- [ ] Interactive examples with explanations
- [ ] All stories include proper metadata and descriptions

**Story Requirements:**
- Minimum 5 stories per component (adjust based on complexity)
- Each story includes `parameters.docs.description`
- Stories grouped logically (variants, sizes, states, combinations)
- Accessibility stories with focus/hover/active states
- Live examples in Storybook showing real usage

#### 4. ✅ Accessibility Documentation (CRITICAL)
- [ ] Create or update `ACCESSIBILITY.md` in component directory
- [ ] Document WCAG compliance level
- [ ] Include accessibility features list
- [ ] Document keyboard navigation
- [ ] Include aria-label and aria-describedby examples
- [ ] Add testing checklist
- [ ] Include common issues and solutions

**Required Sections in ACCESSIBILITY.md:**
- Accessibility Features
- Keyboard Navigation
- Screen Reader Support
- Color Contrast Requirements
- Touch Target Size (if applicable)
- Testing Checklist
- Usage Best Practices
- Common Issues & Solutions

#### 5. ✅ Component-Specific README (For Complex Components)
- [ ] Document props with descriptions and defaults
- [ ] Include usage examples
- [ ] Document variants and their use cases
- [ ] Include any performance considerations
- [ ] Document any limitations or known issues

#### 6. ✅ Design System Story Update
- [ ] Update `lib/main.stories.tsx` to reflect component changes
- [ ] Add component to appropriate section (if new component)
- [ ] Include in "All Variants" showcase (if applicable)
- [ ] Verify design system story still displays correctly
- [ ] Run Storybook and validate visual appearance: `npm run storybook`

#### 7. ✅ Code Quality Checks
- [ ] Linting passes: `npm run lint`
- [ ] No TypeScript errors: `npm run lint` (includes `tsc --noEmit`)
- [ ] All tests pass: `npm run test`
- [ ] No console warnings or errors
- [ ] Code follows project style guide (Prettier + ESLint)

#### 8. ✅ Documentation Updates
- [ ] Update `ATOMIC_DESIGN.md` if adding new component level
- [ ] Update main `README.md` if adding major new component
- [ ] Update this `CONTRIBUTING.md` if workflow changes
- [ ] Update `STRUCTURE_VISUALIZATION.md` with new files

## Component Development Steps

### Step 1: Create Component Files

```bash
# Create component directory
mkdir -p lib/atoms/YourComponent

# Create initial files
touch lib/atoms/YourComponent/YourComponent.tsx
touch lib/atoms/YourComponent/YourComponent.types.ts
touch lib/atoms/YourComponent/YourComponent.css
touch lib/atoms/YourComponent/YourComponent.stories.tsx
touch lib/atoms/YourComponent/YourComponent.test.tsx
touch lib/atoms/YourComponent/ACCESSIBILITY.md
touch lib/atoms/YourComponent/index.ts
```

### Step 2: Implement Component

```tsx
// YourComponent.tsx
import { type YourComponentProps } from "./YourComponent.types";
import clpx from "@Utils/classPrefixer";

export const YourComponent = ({
  variant = "primary",
  ...props
}: YourComponentProps) => {
  return (
    <div className={clpx("your-component-base", `your-component-${variant}`)}>
      {/* Component JSX */}
    </div>
  );
};
```

### Step 3: Define Types

```typescript
// YourComponent.types.ts
import { type ComponentProps } from "react";

export type YourComponentVariant = "primary" | "secondary";

export interface YourComponentProps extends ComponentProps<"div"> {
  /**
   * The variant of the component.
   * @default "primary"
   */
  variant?: YourComponentVariant;
}
```

### Step 4: Add Styles

```css
/* YourComponent.css */
.moriui\:your-component-base {
  /* Base styles */
}

.moriui\:your-component-primary {
  /* Variant styles */
}
```

### Step 5: Write Tests

```typescript
// YourComponent.test.tsx
import { YourComponent } from "./YourComponent";
import { render, screen } from "@testing-library/react";
import { renderWithLightBg, renderWithDarkBg } from "@Utils/testRenders";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";

describe("YourComponent", () => {
  it("renders with default props", () => {
    render(<YourComponent>Label</YourComponent>);
    // Your assertions
  });

  it("should not have accessibility violations (light mode)", async () => {
    const { container } = renderWithLightBg(<YourComponent>Label</YourComponent>);
    const results = await axe(container);
    expect(results.violations).toEqual([]);
  });

  it("should not have accessibility violations (dark mode)", async () => {
    const { container } = renderWithDarkBg(<YourComponent>Label</YourComponent>);
    const results = await axe(container);
    expect(results.violations).toEqual([]);
  });
});
```

### Step 6: Create Storybook Stories

```typescript
// YourComponent.stories.tsx
import { YourComponent } from "./YourComponent";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/YourComponent",
  component: YourComponent,
  tags: ["autodocs"],
  parameters: {
    a11y: {
      config: {
        rules: [
          { id: "color-contrast", enabled: true },
          { id: "button-name", enabled: true },
        ],
      },
    },
    docs: {
      description: {
        component: "Description of your component and its purpose.",
      },
    },
  },
} satisfies Meta<typeof YourComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "primary",
    children: "Component Label",
  },
  parameters: {
    docs: {
      description: {
        story: "The default component with primary variant.",
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Component",
  },
};
```

### Step 7: Document Accessibility

```markdown
# YourComponent - Accessibility Guidelines

## WCAG Compliance

This component meets WCAG 2.1 AAA standards.

## Accessibility Features

### 1. Semantic HTML
- Uses appropriate HTML elements
- Proper ARIA attributes

### 2. Keyboard Navigation
- Tab: Move focus
- Enter/Space: Activate

### 3. Color Contrast
- 7:1 contrast ratio for all variants

## Testing Checklist

- [ ] Tab key navigation works
- [ ] Focus indicators visible
- [ ] Color contrast meets AAA
- [ ] Screen reader announces correctly
```

### Step 8: Update Design System Story

Update `lib/main.stories.tsx`:

```typescript
// Add your component to the appropriate section
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <YourComponent variant="primary">Primary</YourComponent>
      <YourComponent variant="secondary">Secondary</YourComponent>
      {/* Add all variants */}
    </div>
  ),
};
```

### Step 9: Verify Everything Works

```bash
# Check linting
npm run lint

# Run tests
npm run test

# View in Storybook
npm run storybook

# Check Storybook builds
npm run build-storybook
```

## Update Existing Components

When updating an existing component, follow this enhanced workflow:

### ⚠️ CRITICAL: Before Making Changes

1. **Understand Current State**
   - Review existing tests
   - Check Storybook stories
   - Read ACCESSIBILITY.md
   - Check design system story

2. **Identify Impact**
   - What props change?
   - What behavior changes?
   - What visual changes occur?
   - Does accessibility change?

### 📝 Making the Change

1. Update component implementation (`ComponentName.tsx`)
2. Update types if needed (`ComponentName.types.ts`)
3. Update styles if needed (`ComponentName.css`)

### ✅ Update Associated Files (REQUIRED)

After component changes, **ALWAYS** update:

#### Tests (`ComponentName.test.tsx`)
- Update test cases for changed behavior
- Add tests for new props/variants
- Verify accessibility still passes
- Run: `npm run test`

```bash
# Example: If adding a new variant
# Add test:
it("renders with new-variant variant", () => {
  render(<Component variant="new-variant">Label</Component>);
  // assertions
});

# Add accessibility test:
it("should not have a11y violations for new-variant", async () => {
  const { container } = renderWithLightBg(
    <Component variant="new-variant">Label</Component>
  );
  const results = await axe(container);
  expect(results.violations).toEqual([]);
});
```

#### Stories (`ComponentName.stories.tsx`)
- Update story metadata if component purpose changed
- Update existing stories if they're affected
- Add new stories for new variants/features
- Verify all stories render correctly in Storybook
- Run: `npm run storybook`

```typescript
// Example: If adding a new variant
export const NewVariant: Story = {
  args: {
    variant: "new-variant",
    children: "New Variant",
  },
  parameters: {
    docs: {
      description: {
        story: "Description of the new variant and when to use it.",
      },
    },
  },
};
```

#### Accessibility Documentation (`ACCESSIBILITY.md`)
- Update compliance level if changed
- Document new accessibility features
- Update keyboard navigation if changed
- Update color contrast info if colors changed
- Add new testing scenarios if needed

```markdown
## Updated Features

- Added new variant "new-variant" with improved accessibility
- Enhanced keyboard navigation for edge case

## Variants

| Variant | Contrast | Use Case |
|---------|----------|----------|
| primary | 7:1 | Primary action |
| new-variant | 7:1 | New use case |
```

#### Design System Story (`lib/main.stories.tsx`)
- Update component showcase if visual changes
- Add new variant to variant showcase
- Update state examples if behavior changed
- Verify design system story displays correctly

```typescript
// In lib/main.stories.tsx, update relevant sections
// Example: Update AllVariantStates story to include new variant
{[
  "primary",
  "secondary",
  "new-variant", // Add new variant
  // ...
].map(variant => (
  <YourComponent variant={variant as YourComponentVariant}>
    {variant}
  </YourComponent>
))}
```

#### README (if component-specific exists)
- Update prop documentation
- Update usage examples
- Update variant descriptions
- Update any limitations or breaking changes

### 🔍 Final Verification

After updating associated files:

```bash
# 1. Ensure tests pass
npm run test

# Expected: All tests passing ✅

# 2. Ensure no linting errors
npm run lint

# Expected: 0 Errors, 0 Warnings

# 3. View in Storybook
npm run storybook

# Expected: All stories render correctly
# - Component stories show new variants
# - Design system story updated
# - No visual regressions

# 4. Build Storybook
npm run build-storybook

# Expected: Build succeeds with no errors
```

## Pull Request Checklist

Before submitting a PR, ensure:

- [ ] **Tests**: All tests passing (`npm run test`)
- [ ] **Linting**: No errors (`npm run lint`)
- [ ] **Component Tests**: Cover all variants, states, and edge cases
- [ ] **Accessibility Tests**: Light/dark mode, hover/focus/active
- [ ] **Storybook Stories**: All variants documented with descriptions
- [ ] **Accessibility Documentation**: Complete and accurate
- [ ] **Design System Story**: Updated to reflect changes
- [ ] **Type Safety**: No `any` types without justification
- [ ] **Documentation**: README and guides updated if needed
- [ ] **No Console Errors**: Development and Storybook builds clean

## Code Style

- **TypeScript**: Strict mode enabled, no implicit `any`
- **React**: Functional components with hooks
- **CSS**: CSS modules with utility-first approach (Tailwind)
- **Naming**: PascalCase for components, camelCase for props/functions
- **Exports**: Use barrel exports (`index.ts`)

## Testing Standards

- **Coverage**: Minimum 70% for new components
- **Unit Tests**: Test component behavior, not implementation
- **Accessibility**: All tests use `vitest-axe` for a11y validation
- **E2E**: Include user interaction scenarios
- **Modes**: Test both light and dark modes

## Documentation Standards

- **JSDoc**: Document all exported functions and components
- **Storybook**: Include stories for all major states/variants
- **README**: Include usage examples and prop descriptions
- **Accessibility**: Document WCAG compliance and features

## Common Mistakes to Avoid

❌ **Don't:**
- Submit component without tests
- Update component without updating stories
- Change component behavior without updating docs
- Use `any` types in TypeScript
- Forget accessibility tests
- Ignore design system story updates
- Skip ACCESSIBILITY.md updates

✅ **Do:**
- Write tests first (or alongside component)
- Update all associated files
- Document changes thoroughly
- Use proper types
- Include a11y tests in all PRs
- Verify design system story updates
- Complete ACCESSIBILITY.md for each component

## Questions?

- Check [Atomic Design Guide](./ATOMIC_DESIGN.md)
- Review existing components for patterns
- Check [Button component](./lib/atoms/Button/) as reference
- Read [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

Thank you for helping make Mori UI better! 🍃
