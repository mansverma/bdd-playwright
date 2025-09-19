module.exports = {
  default: {
    require: ["features/step_definitions/*.js"],
    format: [
      "progress",
      "json:test-results/cucumber-report.json",
      "html:test-results/cucumber-report.html"
    ],
    paths: ["features/**/*.feature"],
    // Enable parallel execution
    parallel: 2,
    // Retry failed tests once
    retry: 1,
    // Set timeout for steps (30 seconds)
    timeout: 30000
  },
  // CI-specific configuration
  ci: {
    require: ["features/step_definitions/*.js"],
    format: [
      "progress",
      "json:test-results/cucumber-report.json",
      "junit:test-results/cucumber-junit.xml"
    ],
    paths: ["features/**/*.feature"],
    parallel: 2,
    retry: 0,  // Don't retry in CI to get faster feedback
    timeout: 60000  // Longer timeout for CI environment
  }
};
