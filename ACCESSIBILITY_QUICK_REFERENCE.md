# Accessibility Testing - Quick Reference

## 🎯 The Goal
Catch accessibility issues early while developing components and prevent regressions from reaching production.

## 📋 Workflow

### Phase 1: Development (Real-time Feedback)
**Terminal 1:**
```bash
npm run storybook
```
✅ Opens Storybook at `http://localhost:6006`  
✅ Look for **"Accessibility"** or **"a11y"** panel at bottom  
✅ See violations and fixes in real-time  
✅ Update code → panel refreshes automatically  

### Phase 2: Pre-Merge Testing (Before PR)
**Terminal 2 (while Storybook is running):**
```bash
npm run test:storybook
```
✅ Runs Axe on **every** story  
✅ Tests all variants and states  
✅ Reports any violations  
✅ Must pass before opening PR  

### Phase 3: CI/CD Pipeline (After Merge)
```bash
npm run test:storybook:ci
```
✅ Optimized for CI environments  
✅ Uses fewer workers for stability  
✅ Fails build if violations found  

## 🛠️ Common Tasks

### I Just Created a New Component
```
1. Terminal 1: npm run storybook
2. Terminal 2: (wait for Storybook to start)
3. Create stories in ComponentName.stories.tsx
4. Check Accessibility panel for violations
5. Fix any issues
6. Terminal 2: npm run test:storybook (verify all pass)
7. Submit PR
```

### I See a Violation in the Storybook UI
```
1. Read the violation description
2. Find the highlighted DOM element
3. Update your code
4. Panel updates automatically
5. Verify it's fixed
```

### I'm About to Submit a PR
```
1. Terminal 1: npm run storybook (if not running)
2. Terminal 2: npm run test:storybook
3. Wait for all tests to complete
4. Verify "all tests passing" message
5. Create PR
```

### Test:storybook Failed in CI
```
1. Terminal 1: npm run storybook
2. Terminal 2: npm run test:storybook
3. Find which story failed
4. Navigate to that story in Storybook UI
5. Check Accessibility panel
6. Fix the issue
7. Re-run npm run test:storybook
8. Verify passing
9. Push fix
```

## 📚 What Gets Tested

| Category | Examples |
|----------|----------|
| **Color** | Contrast ratio (7:1 for AAA) |
| **HTML** | Semantic elements, proper structure |
| **ARIA** | aria-label, aria-describedby, roles |
| **Forms** | Labels, required attributes |
| **Images** | Alt text presence |
| **Buttons** | Name, proper type |
| **Links** | Descriptive text |
| **Focus** | Visible indicators |

**Axe catches ~57% of WCAG issues automatically**

## ❌ Not Tested by Automation

- Manual keyboard navigation (test yourself)
- Screen reader output (use VoiceOver, NVDA, JAWS)
- Zoom/text enlargement (test manually)
- High contrast mode (test manually)
- Color blindness (manual + tools)
- Complex user workflows

## 🚨 Common Violations & Fixes

### "Color contrast ratio too low"
```css
/* ❌ Bad: 3:1 */
color: #999; background: #f5f5f5;

/* ✅ Good: 7:1 */
color: #000; background: #fff;
```

### "Button name is empty"
```tsx
/* ❌ Bad */
<button><Icon /></button>

/* ✅ Good */
<button aria-label="Close">✕</button>
```

### "Form field has no label"
```tsx
/* ❌ Bad */
<input type="email" />

/* ✅ Good */
<label htmlFor="email">Email</label>
<input id="email" type="email" />
```

### "Heading not allowed as child of button"
```tsx
/* ❌ Bad */
<button><h2>Submit</h2></button>

/* ✅ Good */
<div role="heading" aria-level="2">
  <button>Submit</button>
</div>
```

## 📖 Learn More

- **Detailed Guide**: See `ACCESSIBILITY_TESTING.md`
- **Component Example**: See `lib/atoms/Button/ACCESSIBILITY.md`
- **Setup Details**: See `ACCESSIBILITY_TESTING_SETUP.md`
- **WCAG Standards**: https://www.w3.org/WAI/WCAG21/quickref/
- **Axe Docs**: https://github.com/dequelabs/axe-core

## ✅ Pre-PR Checklist

- [ ] Ran `npm run storybook` (Terminal 1) - checked Accessibility panel
- [ ] Ran `npm run test:storybook` (Terminal 2) - all passing
- [ ] Tested keyboard navigation manually (Tab, Enter, Space)
- [ ] No console errors or warnings
- [ ] Component has accessible name (buttons, form fields, etc.)
- [ ] Color doesn't convey meaning alone
- [ ] All variants have stories
- [ ] ACCESSIBILITY.md updated (if needed)

## 🔧 Debugging

**"Storybook instance is not running" error?**
- Make sure `npm run storybook` is running in Terminal 1
- Run `npm run test:storybook` in Terminal 2

**Test passed locally but fails in CI?**
- Run `npm run test:storybook:ci` locally
- Check for environment differences
- Verify Playwright is installed

**Can't find the violation?**
- Run `npm run storybook` (Terminal 1)
- Navigate to story in UI
- Check Accessibility panel
- Look at highlighted elements

**Same violation on multiple stories?**
- Fix the component source code
- Both tests should pass on next run

## 💡 Pro Tips

1. **Test early and often** - Check Storybook while developing
2. **Create comprehensive stories** - Test all variants and states
3. **Read the violation** - Axe explains how to fix it
4. **Manual testing too** - Automation catches 57%, humans catch the rest
5. **Dark mode counts** - Test both light and dark variants

## 🎓 Remember

**Accessibility is not optional.**

~26% of US adults have at least one disability. Automated testing catches obvious issues, but manual testing (keyboard, screen reader, zoom, contrast) is essential.

- Automated: ~57% of WCAG issues
- + Manual testing: Catch the rest!
- = Truly accessible components

## 📞 Need Help?

1. Check Accessibility panel (best first step)
2. Read the violation description
3. Consult WCAG guidelines
4. Review button component for examples
5. Ask in code review

---

**Key Principle**: Test as you develop, not after.
