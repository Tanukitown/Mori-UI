/**
 * Test Runner Configuration for Accessibility Testing
 *
 * This configuration uses axe-playwright to run automated accessibility tests
 * on all Storybook stories. It captures accessibility violations and generates
 * detailed reports.
 *
 * Documentation: https://storybook.js.org/docs/react/writing-tests/accessibility-testing
 */

import { injectAxe, checkA11y } from "axe-playwright";

export default {
  /**
   * preVisit hook: Injects Axe library into the page before visiting
   * This allows axe to scan the DOM for accessibility violations
   */
  async preVisit(page) {
    await injectAxe(page);
  },

  /**
   * postVisit hook: Runs accessibility checks after story is visited
   * - Checks starting from the story's root element (#root)
   * - Generates detailed reports with HTML output
   * - Throws error if violations are found, failing the test
   */
  async postVisit(page) {
    await checkA11y(page, "#storybook-root", {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  },

  /**
   * Jest configuration for test reporting
   * - Configures reporters for JUnit XML output
   * - Output path: test-results/junit.xml
   */
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "test-results",
        outputName: "junit.xml",
        classNameTemplate: "{classname}",
        titleTemplate: "{title}",
        ancestorSeparator: " › ",
        usePathAsClassName: "true",
      },
    ],
  ],
};
