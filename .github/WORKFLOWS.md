# GitHub Workflows

## Storybook Accessibility Tests

**File:** `.github/workflows/storybook-tests.yml`

### Overview
This workflow runs automated accessibility tests on all Storybook stories using the Storybook test runner and axe-playwright. It ensures that all interactive components meet WCAG 2.1 AAA accessibility standards.

### Triggers
- **Push to main or develop branch**
- **Pull requests to main or develop branch**

### What It Does

1. **Setup Environment**
   - Checks out the repository code
   - Sets up Node.js (tests against 18.x and 20.x)
   - Installs dependencies with npm ci

2. **Build Storybook**
   - Generates a static Storybook build

3. **Run Accessibility Tests**
   - Executes `npm run test:storybook:ci`
   - Runs tests with limited workers (2) for CI environments
   - Continues on error to ensure artifacts are uploaded

4. **Upload Artifacts**
   - Saves JUnit XML test results to `test-results/`
   - Saves coverage reports to `coverage/`
   - Retains artifacts for 30 days

5. **Publish Results**
   - Uses `dorny/test-reporter` to display test results in the GitHub Actions UI
   - Shows detailed pass/fail status for each story
   - Links to detailed accessibility violation reports

### Test Output

The workflow generates:

- **JUnit XML Report** (`test-results/junit.xml`)
  - Standard format compatible with most CI/CD tools
  - Includes test names, status, and failure messages

- **HTML Reports**
  - Detailed accessibility violation reports in Storybook format
  - Generated during the test run

### Local Testing

To run tests locally before pushing:

```bash
# Build Storybook
npm run build-storybook

# Run accessibility tests
npm run test:storybook

# Or run with CI settings (parallel workers limited to 2)
npm run test:storybook:ci
```

### Configuration

#### Test Runner Config (`.storybook/test-runner.js`)
- Injects axe-playwright into each story
- Runs accessibility checks on the story root element
- Generates detailed HTML reports for violations
- Outputs JUnit XML for CI integration

#### Preview Config (`.storybook/preview.ts`)
- Enables color-contrast checks at AAA level (7:1 ratio)
- Enables button-name, image-alt, heading-order, and valid-aria-role checks
- Configured for WCAG 2.1 AAA compliance

### Failure Handling

- **Test Failures**: The workflow continues to upload artifacts even if tests fail, ensuring visibility
- **Artifact Upload**: Always uploads results for analysis, whether tests pass or fail
- **Report Publishing**: Shows all results in GitHub Actions UI with links to details

### Viewing Results

1. **In GitHub UI**
   - Go to the pull request or commit
   - Click "Show all checks"
   - View the Storybook Tests check for detailed results

2. **In Artifacts**
   - Go to the workflow run summary
   - Download `storybook-test-results-*.zip` for full reports

### Dependencies

- `@storybook/test-runner`: ^0.23.0
- `axe-playwright`: ^2.2.2
- `jest-junit`: ^16.0.0 (for JUnit XML output)

### Troubleshooting

**Tests pass locally but fail in CI:**
- Check Node.js version compatibility
- Ensure all dependencies are installed: `npm ci`
- Run `npm run build-storybook` before tests

**Accessibility violations:**
- See detailed reports in the GitHub Actions summary
- Download artifact for full HTML reports
- Run locally to debug: `npm run storybook` then `npm run test:storybook`

**Artifacts not uploading:**
- Check workflow permissions allow artifact upload
- Verify `test-results/` directory exists after test run
- Check for disk space issues on runner
