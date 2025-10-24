# 🚀 Quick Start Guide for Component Development

## TL;DR - Component Update Workflow

Every time you update a component, update these files in this order:

1. **Component** → `ComponentName.tsx`
2. **Types** → `ComponentName.types.ts`
3. **Styles** → `ComponentName.css`
4. **Tests** → `ComponentName.test.tsx` (RUN: `npm run test`)
5. **Stories** → `ComponentName.stories.tsx`
6. **Accessibility** → `ACCESSIBILITY.md`
7. **Design System** → `lib/main.stories.tsx`
8. **Verify** → `npm run lint` + `npm run storybook`

---

## File Locations

```
Component Location: lib/atoms/ComponentName/
├── ComponentName.tsx ...................... Implementation
├── ComponentName.types.ts ................. Types & interfaces
├── ComponentName.css ...................... Styles
├── ComponentName.test.tsx ................. Tests
├── ComponentName.stories.tsx .............. Storybook stories
├── ACCESSIBILITY.md ...................... Accessibility guide
└── index.ts ............................. Exports

Design System: lib/main.stories.tsx ........ Update this too!
```

---

## Essential Commands

```bash
# Run tests (MUST pass)
npm run test

# Check linting (MUST be clean)
npm run lint

# View Storybook (VERIFY all stories display)
npm run storybook

# Fix lint issues automatically
npm run lint:fix

# Build for production
npm run build
```

---

## When Updating an Existing Component

### 🔴 DON'T FORGET

**Update these files EVERY TIME you change a component:**

```
❌ ❌ ❌ CRITICAL - These must be updated ❌ ❌ ❌

1. ComponentName.test.tsx
   └─ Add tests for new variants/features
   └─ Verify accessibility tests still pass
   
2. ComponentName.stories.tsx
   └─ Add stories for new variants/features
   └─ Update existing stories if behavior changed
   
3. ACCESSIBILITY.md
   └─ Document new accessibility features
   └─ Update compliance information if changed
   
4. lib/main.stories.tsx
   └─ Update design system story to reflect changes
   └─ Add new variants to showcase
```

**Always verify after changes:**
```bash
npm run test          # ✅ All tests passing
npm run lint          # ✅ 0 errors, 0 warnings
npm run storybook     # ✅ All stories display correctly
```

---

## Template for Tests

```typescript
// ComponentName.test.tsx
import { ComponentName } from "./ComponentName";
import { render, screen } from "@testing-library/react";
import { renderWithLightBg, renderWithDarkBg } from "@Utils/testRenders";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";

describe("ComponentName", () => {
  // Render test
  it("renders with default props", () => {
    render(<ComponentName>Label</ComponentName>);
    expect(screen.getByRole("region")).toBeInTheDocument();
  });

  // Variant test
  it("renders with primary variant", () => {
    render(<ComponentName variant="primary">Label</ComponentName>);
    expect(screen.getByText("Label")).toBeInTheDocument();
  });

  // Accessibility test
  it("should not have a11y violations (light mode)", async () => {
    const { container } = renderWithLightBg(
      <ComponentName>Label</ComponentName>
    );
    const results = await axe(container);
    expect(results.violations).toEqual([]);
  });

  it("should not have a11y violations (dark mode)", async () => {
    const { container } = renderWithDarkBg(
      <ComponentName>Label</ComponentName>
    );
    const results = await axe(container);
    expect(results.violations).toEqual([]);
  });
});
```

---

## Template for Storybook Stories

```typescript
// ComponentName.stories.tsx
import { ComponentName } from "./ComponentName";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/ComponentName",
  component: ComponentName,
  tags: ["autodocs"],
  parameters: {
    a11y: {
      config: {
        rules: [{ id: "color-contrast", enabled: true }],
      },
    },
    docs: {
      description: {
        component: "Description of component purpose and features.",
      },
    },
  },
} satisfies Meta<typeof ComponentName>;

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
        story: "The default component variant.",
      },
    },
  },
};

export const Variant2: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Variant",
  },
};

// Add more stories as needed
```

---

## Template for Accessibility Documentation

```markdown
# ComponentName - Accessibility Guidelines

## WCAG Compliance
✅ WCAG 2.1 AAA compliant

## Accessibility Features

### 1. Semantic HTML
- Uses native HTML elements

### 2. Keyboard Navigation
- **Tab**: Move focus
- **Enter/Space**: Activate

### 3. Color Contrast
- All variants: 7:1 contrast ratio (exceeds AAA)

### 4. Screen Reader Support
- Announces as "component-type"
- Includes descriptive labels

## Testing Checklist
- [ ] Tab navigation works
- [ ] Focus indicators visible
- [ ] Color contrast verified
- [ ] Screen reader tested

## Common Issues & Solutions

### Issue: Color meaning only
**Solution:** Always pair colors with text or icons

### Issue: Icon-only without label
**Solution:** Add aria-label for accessibility
```

---

## Template for Design System Story Update

```typescript
// In lib/main.stories.tsx - Add to appropriate section

{/* Component Variants Section */}
<section style={{ marginBottom: "3rem" }}>
  <h2 style={{ marginBottom: "1.5rem", fontSize: "1.5rem" }}>
    Component Variants
  </h2>
  
  <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
    <ComponentName variant="primary">Primary</ComponentName>
    <ComponentName variant="secondary">Secondary</ComponentName>
    {/* Add all variants */}
  </div>
</section>
```

---

## Common Mistakes

| ❌ Mistake | ✅ Solution |
|-----------|-----------|
| Update component, forget tests | Always update tests with component |
| Update component, forget stories | Always add/update stories |
| Add new variant, forget a11y docs | Always document accessibility features |
| Forget to update design system | Always check `lib/main.stories.tsx` |
| Use `any` types | Use proper TypeScript types |
| No accessibility tests | Use `renderWithLightBg` and `renderWithDarkBg` with axe |
| Stories without descriptions | Always add story descriptions |
| Forget dark mode testing | Always test light AND dark modes |

---

## Pre-PR Checklist

Before submitting a PR, run this:

```bash
# 1. Check linting
npm run lint
# Expected: 0 Errors, 0 Warnings

# 2. Run tests
npm run test
# Expected: All tests passing

# 3. View Storybook
npm run storybook
# Expected: All stories render correctly
# ✅ Check: Does design system story show your changes?

# 4. Build check
npm run build-storybook
# Expected: Build succeeds
```

---

## Need Help?

1. **Component Structure** → Read [ATOMIC_DESIGN.md](./ATOMIC_DESIGN.md)
2. **Full Workflow** → Read [CONTRIBUTING.md](./CONTRIBUTING.md)
3. **Accessibility** → Read `lib/atoms/Button/ACCESSIBILITY.md` (reference)
4. **Quick Checklist** → Use [COMPONENT_UPDATE_CHECKLIST.md](./COMPONENT_UPDATE_CHECKLIST.md)
5. **Button Example** → Check `lib/atoms/Button/` (reference implementation)

---

## Key Points to Remember

1. 🧪 **Tests are mandatory** - Every component change needs updated tests
2. 📖 **Stories are mandatory** - Every variant needs a story
3. ♿ **Accessibility is mandatory** - WCAG 2.1 AAA compliance required
4. 🎨 **Design system matters** - Update `lib/main.stories.tsx` with changes
5. 🔍 **Lint must pass** - Run `npm run lint` before PR
6. ✅ **Tests must pass** - Run `npm run test` before PR
7. 📚 **Documentation matters** - Clear docs = better contributors

---

**Remember:** Quality > Speed. Take time to test thoroughly and document clearly. 🍃
