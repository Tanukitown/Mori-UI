# Component Update Checklist

Use this checklist every time you create or update a component. Copy and paste it into your PR description!

## 🎯 Component Implementation

- [ ] Component file created/updated (`ComponentName.tsx`)
- [ ] TypeScript types defined (`ComponentName.types.ts`)
- [ ] Styles created/updated (`ComponentName.css`)
- [ ] Barrel export file created/updated (`index.ts`)
- [ ] No `any` types without justification
- [ ] No console errors or warnings

## 🧪 Testing (CRITICAL)

- [ ] All tests passing: `npm run test` ✅
- [ ] Tests for all variants created/updated
- [ ] Tests for all states (default, hover, focus, active, disabled, loading)
- [ ] Edge case tests added
- [ ] Accessibility tests included (axe-core)
- [ ] Light mode accessibility tests passing
- [ ] Dark mode accessibility tests passing
- [ ] Keyboard navigation tests included
- [ ] Component coverage ≥ 70%

**Test Command:**
```bash
npm run test
# Expected: All tests passing
```

## 📖 Storybook Stories (CRITICAL)

- [ ] Story file created/updated (`ComponentName.stories.tsx`)
- [ ] Default story with proper args
- [ ] Story for each variant
- [ ] Story for each size (if applicable)
- [ ] State stories (hover, focus, active, disabled, loading)
- [ ] Combination stories (variant + size + state)
- [ ] All stories have description in `parameters.docs.description.story`
- [ ] Component meta description included
- [ ] Accessibility stories documented
- [ ] Stories render correctly in Storybook

**Storybook Command:**
```bash
npm run storybook
# Expected: All stories display correctly
```

## ♿ Accessibility Documentation (CRITICAL)

- [ ] ACCESSIBILITY.md file created/updated
- [ ] WCAG compliance level documented
- [ ] Accessibility features listed
- [ ] Keyboard navigation documented
- [ ] Color contrast requirements included
- [ ] Touch target size documented (if applicable)
- [ ] Screen reader support documented
- [ ] aria-label examples included
- [ ] aria-describedby examples included
- [ ] Testing checklist provided
- [ ] Common issues and solutions documented
- [ ] Usage best practices included

**Required Sections:**
- [ ] Accessibility Features
- [ ] Keyboard Navigation
- [ ] Color Contrast
- [ ] Testing Checklist
- [ ] Usage Best Practices
- [ ] Common Issues & Solutions

## 🎨 Design System Story Updates (CRITICAL)

- [ ] `lib/main.stories.tsx` reviewed
- [ ] Component added to appropriate section (if new)
- [ ] Variant showcase updated (if needed)
- [ ] All variants display in design system story
- [ ] Story reflects current component state
- [ ] Design system story renders without errors

**Check:**
```bash
npm run storybook
# Navigate to "Overview/Design System"
# Verify your component displays correctly
```

## 📋 Component-Specific README (If Applicable)

- [ ] Props documented with descriptions
- [ ] Default values shown
- [ ] Usage examples provided
- [ ] Variants explained with use cases
- [ ] Any limitations or known issues noted

## 🔍 Code Quality

- [ ] Linting passes: `npm run lint` ✅
- [ ] No TypeScript errors
- [ ] No Prettier formatting issues
- [ ] No ESLint violations
- [ ] Code follows project style guide

**Lint Command:**
```bash
npm run lint
# Expected: 0 Errors, 0 Warnings
```

## 📚 Documentation Updates (As Needed)

- [ ] `ATOMIC_DESIGN.md` updated (if changing structure)
- [ ] Main `README.md` updated (if major new component)
- [ ] `STRUCTURE_VISUALIZATION.md` updated (if new files)
- [ ] `CONTRIBUTING.md` updated (if workflow changes)

## 🚀 Final Verification

- [ ] `npm run test` - All tests passing ✅
- [ ] `npm run lint` - 0 errors, 0 warnings ✅
- [ ] `npm run storybook` - All stories display correctly ✅
- [ ] No console errors in development
- [ ] No console errors in Storybook
- [ ] Build succeeds: `npm run build`
- [ ] Storybook builds: `npm run build-storybook`

**Full Verification:**
```bash
npm run lint
npm run test
npm run storybook
npm run build-storybook
# Expected: All pass with no errors
```

## 📝 Pull Request Description

Include this information in your PR:

```
## Description
[Brief description of changes]

## Type of Change
- [ ] New component
- [ ] Component update
- [ ] Bug fix
- [ ] Documentation update

## Associated Files Updated
- [x] Tests (ComponentName.test.tsx)
- [x] Stories (ComponentName.stories.tsx)
- [x] Accessibility docs (ACCESSIBILITY.md)
- [x] Design system story (lib/main.stories.tsx)
- [x] Types (ComponentName.types.ts)
- [ ] README (if applicable)

## Testing Performed
- [x] All 143+ tests passing
- [x] Linting clean (0 errors, 0 warnings)
- [x] Storybook stories verified
- [x] Accessibility tests passing (light/dark mode)
- [x] Keyboard navigation tested

## Checklist
- [x] Tests written/updated
- [x] Stories written/updated
- [x] Accessibility documentation complete
- [x] Design system story updated
- [x] No breaking changes
```

## 🚨 Critical Requirements

**NEVER submit a PR without:**

1. ✅ **Tests Updated** - All component tests passing
2. ✅ **Stories Updated** - All Storybook stories render correctly
3. ✅ **Accessibility Docs** - ACCESSIBILITY.md is current
4. ✅ **Design System** - lib/main.stories.tsx reflects changes
5. ✅ **Linting Clean** - 0 errors, 0 warnings
6. ✅ **All Tests Passing** - npm run test succeeds

---

**Remember:** Every component change requires updates to:
- Tests
- Storybook stories
- Accessibility documentation
- Design system story

This ensures consistency, quality, and accessibility across the library. 🍃
