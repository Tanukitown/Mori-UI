# Running Accessibility Tests - Setup Guide

## The Correct Workflow

### Step 1: Start Storybook (Terminal 1)
```bash
npm run storybook
```
This starts Storybook on `http://localhost:6006`

### Step 2: Run Tests (Terminal 2)
```bash
npm run test:storybook
```
This runs the accessibility tests against the running Storybook instance.

## Why Both Terminals?

The test runner needs:
1. **Storybook running** - to render the stories
2. **Test runner** - to check each story for accessibility issues

Think of it like:
- Storybook = the application server
- Test runner = the browser testing Storybook

## Quick Start

### Terminal 1: Start Storybook
```bash
npm run storybook
```
Wait for the message: `Storybook started on http://localhost:6006`

### Terminal 2: Run Tests (in parallel)
```bash
npm run test:storybook
```

The test runner will:
1. ✅ Connect to running Storybook
2. ✅ Visit each story
3. ✅ Inject Axe library
4. ✅ Check for accessibility violations
5. ✅ Report results

## CI/CD Usage

In CI pipelines, you can use `npm run build-storybook` first, then test:

```bash
npm run build-storybook
npm run test:storybook --url http://localhost:3000
```

Or use the optimized CI command:
```bash
npm run test:storybook:ci
```

## Troubleshooting

### "Storybook instance is not running"
**Solution:** Make sure Storybook is running in another terminal
```bash
npm run storybook
```

### "Cannot connect to localhost:6006"
**Solution:** Check if port 6006 is in use
```bash
npm run storybook -- -p 6007  # Use different port
npm run test:storybook --url http://127.0.0.1:6007
```

### Tests timeout
**Solution:** Make sure Storybook has finished loading before running tests

## Commands Reference

| Command | Purpose | Requires Storybook |
|---------|---------|-------------------|
| `npm run storybook` | Start Storybook | No |
| `npm run test:storybook` | Run a11y tests | Yes |
| `npm run test:storybook:ci` | CI-optimized testing | Yes (or pre-built) |
| `npm run build-storybook` | Build static Storybook | No |

## Best Practice Workflow

```
Development:
1. Terminal 1: npm run storybook
2. Terminal 2: npm run test:storybook
3. Work on components
4. Tests run and show violations
5. Fix issues in real-time

Before PR:
1. Run npm run test:storybook
2. Verify all tests pass
3. Submit PR

CI/CD:
1. Build Storybook
2. Run tests
3. Fail if violations found
```

---

**Key Point:** Storybook must be running for the test runner to work!
