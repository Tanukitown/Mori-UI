# Automated Accessibility Testing Guide

This guide explains how to use automated accessibility testing with Storybook to catch and fix accessibility issues early in development.

## Overview

We use a two-pronged approach for accessibility testing:

1. **Storybook Accessibility Addon** - For real-time feedback during development
2. **Storybook Test Runner** - For automated regression testing before merge

Both use **Axe**, which can automatically catch ~57% of WCAG 2.1 issues.

## Development Workflow

### 1. Live Testing with Storybook Addon

While developing components, use the built-in Accessibility addon for instant feedback.

**Start Storybook:**
```bash
npm run storybook
```

This opens Storybook at `http://localhost:6006`

**View Accessibility Panel:**

1. Click on a component story in the left sidebar
2. Look for the **"Accessibility"** tab (or **"a11y"**) at the bottom
3. The panel shows:
   - ✅ Violations (if any)
   - ⚠️ Warnings
   - 💡 Passed checks
   - 📋 Detailed information about each issue

**Fix Issues:**
- Each violation includes a description and how to fix it
- Highlighted DOM nodes show exactly what needs attention
- Re-save your component to see real-time updates

### Example: Fixing a Color Contrast Issue

If you see a violation like "Color contrast ratio is too low":

1. Find the highlighted DOM element in Storybook
2. Update CSS to increase contrast ratio to 7:1 (AAA standard)
3. Save the file
4. The accessibility panel refreshes automatically
5. ✅ Issue is resolved

## Automated Testing

### Before Merge: Run Full Test Suite

Before opening a PR, run accessibility tests on **all** stories:

```bash
npm run test-storybook
```

This:
- Starts Storybook build in the background
- Runs Axe on every story
- Reports any violations
- Fails if issues are found

**Output Example:**
```
✓ Button/Default
✓ Button/Primary Variant
✓ Button/With Icon
✗ Button/Loading (Heading not allowed as a child of button)
```

### CI Integration

For CI/CD pipelines (GitHub Actions, etc.):

```bash
npm run test-storybook:ci
```

This uses fewer workers (`maxWorkers=2`) for better performance in resource-constrained environments.

## How It Works

### Test Runner Configuration

The test-runner is configured in `.storybook/test-runner.js`:

```javascript
async preRender(page) {
  // Injects Axe library into the page
  await injectAxe(page);
}

async postRender(page) {
  // Runs accessibility checks after story renders
  await checkA11y(page, '#root', {
    detailedReport: true,
    detailedReportOptions: {
      html: true,
    },
  });
}
```

**Pre-render:** Injects Axe into the page before rendering  
**Post-render:** Runs checks after the story is fully rendered

### What Gets Tested

✅ **Axe checks for:**
- Color contrast (WCAG AAA: 7:1 ratio)
- Semantic HTML structure
- ARIA attributes
- Button and link names
- Form labels
- Image alt text
- Keyboard navigation
- Focus management
- And 60+ other rules

❌ **Axe cannot check:**
- Manual keyboard navigation (requires human testing)
- Screen reader announcements (requires human testing)
- Complex workflows
- Context-dependent accessibility

## Best Practices

### 1. Test During Development

Don't wait until the end. Run `npm run storybook` and check the accessibility panel as you build.

### 2. Create Stories for All Variants

Include stories for:
- Default state
- All variant combinations
- Disabled state
- Loading state
- Error state
- Dark mode versions

**Example:**
```typescript
export const DarkModeDefault: Story = {
  args: { variant: "primary" },
  parameters: {
    backgrounds: { default: "dark" },
  },
};
```

### 3. Test Edge Cases

- Buttons with very long text
- Form fields with complex labels
- Components with nested interactive elements
- Dark mode vs light mode contrast

### 4. Document Accessibility Features

In your `ACCESSIBILITY.md`:
- Document what makes the component accessible
- List WCAG compliance level (A, AA, or AAA)
- Provide usage examples
- Include testing checklist

### 5. Manual Testing Still Required

Automated tests catch ~57% of issues. Always manually test with:
- Real screen readers (NVDA, JAWS, VoiceOver)
- Keyboard-only navigation
- Browser zoom and text enlargement
- High contrast mode

## Troubleshooting

### Test Fails but No Clear Error

**Problem:** Test runner reports failure but doesn't show the violation

**Solution:**
1. Run `npm run storybook`
2. Navigate to the story in the UI
3. Check the Accessibility panel for details
4. Fix the issue shown there

### False Positives

**Problem:** Axe reports an issue but it's actually fine

**Solution:** You can disable specific rules in `test-runner.js`:

```javascript
await checkA11y(page, '#root', {
  rules: {
    'aria-required-attr': { enabled: false },
  },
});
```

However, we recommend fixing the issue instead of disabling checks.

### Tests Pass Locally but Fail in CI

**Problem:** Different behavior between local and CI environment

**Solution:**
1. Run `npm run test-storybook:ci` locally to match CI environment
2. Check for browser version differences
3. Verify Playwright is properly installed
4. Review CI logs for exact violations

## Common Accessibility Issues

### 1. Color Contrast Too Low

**Error:** "Color contrast ratio is too low"

**Fix:**
```css
/* ❌ Bad: 3:1 ratio */
.button {
  color: #999;
  background: #f5f5f5;
}

/* ✅ Good: 7:1 ratio */
.button {
  color: #000;
  background: #fff;
}
```

### 2. Missing Button Name

**Error:** "Button name is empty"

**Fix:**
```tsx
/* ❌ Bad: No accessible name */
<button><Icon /></button>

/* ✅ Good: Has aria-label */
<button aria-label="Close menu"><Icon /></button>
```

### 3. Heading Not Allowed Here

**Error:** "Heading not allowed as a child of button"

**Fix:**
```tsx
/* ❌ Bad: Heading inside button */
<button><h2>Submit</h2></button>

/* ✅ Good: Use div with appropriate role */
<div role="heading" aria-level="2">
  <button>Submit</button>
</div>
```

### 4. Missing Form Label

**Error:** "Form element without label"

**Fix:**
```tsx
/* ❌ Bad: No label */
<input type="email" placeholder="Enter email" />

/* ✅ Good: Associated label */
<label htmlFor="email">Email:</label>
<input id="email" type="email" />
```

## Resources

- **[Axe Documentation](https://github.com/dequelabs/axe-core)** - All rules and checks
- **[WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)** - Official standards
- **[Storybook A11y Addon](https://storybook.js.org/docs/react/writing-tests/accessibility-testing)** - Setup guide
- **[Button A11y Reference](./lib/atoms/Button/ACCESSIBILITY.md)** - Component example

## Getting Help

1. **Check the Accessibility panel** in Storybook - most helpful
2. **Read the error message** - usually explains the fix
3. **Review existing components** like Button for examples
4. **Consult WCAG guidelines** for complex cases
5. **Ask in a code review** - team can help

## Integration with CI

### GitHub Actions Example

```yaml
name: Accessibility Tests

on: [pull_request]

jobs:
  test-accessibility:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '23'
      - run: npm install
      - run: npm run build-storybook
      - run: npm run test-storybook:ci
```

## Summary

| Task | Command | When |
|------|---------|------|
| Live testing | `npm run storybook` | While developing |
| Pre-merge testing | `npm run test-storybook` | Before PR |
| CI testing | `npm run test-storybook:ci` | In CI pipeline |
| Unit tests | `npm run test` | Throughout development |

Remember: **Accessibility is not a feature—it's a requirement.** Automated testing helps, but manual testing is essential.
