# BDD Playwright Testing Framework

A comprehensive Behavior-Driven Development (BDD) testing framework using Playwright and Cucumber.js for automated web application testing.

## 🚀 Features

- **BDD Testing**: Write tests in natural language using Gherkin syntax
- **Playwright Integration**: Powerful browser automation with Chromium, Firefox, and WebKit support
- **Cucumber.js**: Industry-standard BDD test runner
- **CI/CD Ready**: Automated testing with GitHub Actions on pull requests
- **Cross-Platform**: Runs on Windows, macOS, and Linux
- **Parallel Execution**: Run tests in parallel for faster feedback
- **Rich Reporting**: HTML and JSON test reports with screenshots and videos

## 📋 Prerequisites

- **Node.js**: Version 20.x, 22.x, or ≥24 (required by Cucumber.js)
- **npm**: Latest version recommended
- **Git**: For version control

## 🛠 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mansverma/bdd-playwright.git
   cd bdd-playwright
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npm run install:browsers
   ```

## 🏃‍♂️ Quick Start

### Run All Tests
```bash
npm test
```

### Run Tests in Different Modes
```bash
# Run BDD tests with default configuration
npm run test:bdd

# Run BDD tests with CI configuration (headless mode)
npm run test:bdd:ci

# Run BDD tests in parallel (4 workers)
npm run test:bdd:parallel

# Run direct Playwright tests (if any exist)
npm run test:playwright
```

## 📁 Project Structure

```
bdd-playwright/
├── .github/
│   └── workflows/          # GitHub Actions CI/CD workflows
├── features/               # Feature files and step definitions
│   ├── *.feature          # Gherkin feature files
│   └── step_definitions/   # JavaScript step implementations
│       ├── hooks.js        # Test setup and teardown
│       ├── addCart.steps.js
│       └── search.steps.js
├── test-results/           # Test reports and artifacts
├── tmp/                    # Temporary files for browser artifacts
├── cucumber.js             # Cucumber.js configuration
├── playwright.config.js    # Playwright configuration
└── package.json            # Project dependencies and scripts
```

## 📝 Writing Tests

### Feature Files
Feature files use Gherkin syntax and are located in the `features/` directory:

```gherkin
Feature: SpaceTalk Cart Validation
  As a user visiting SpaceTalk website
  I want to view the shopping cart
  So that I can see the current cart count

  Background:
    Given I am on the SpaceTalk website

  Scenario: Verify empty cart displays zero count
    Given I navigate to "https://spacetalk.co/"
    When I click on the cart link with href "/cart"
    Then I should wait for the count bubble element to appear
    And the count bubble should display "0"
```

### Step Definitions
Step definitions are JavaScript functions that implement the Gherkin steps:

```javascript
const { Given, When, Then } = require('@cucumber/cucumber');

Given('I am on the SpaceTalk website', async function() {
  // Implementation here
});

When('I click on the cart link with href {string}', async function(href) {
  // Implementation here
});
```

## ⚙️ Configuration

### Cucumber Configuration (`cucumber.js`)
- **Default Profile**: Development mode with HTML reports
- **CI Profile**: Optimized for continuous integration with JUnit XML output
- **Parallel Execution**: Configurable worker processes
- **Retry Logic**: Automatic retry for flaky tests

### Playwright Configuration
- **Multi-browser Support**: Chromium, Firefox, WebKit
- **Headless/Headed Mode**: Automatic detection based on CI environment
- **Screenshots**: Captured on test failures
- **Videos**: Recorded for failed tests
- **Test Artifacts**: Stored in `test-results/` directory

## 🔄 CI/CD Integration

### GitHub Actions
Automated testing runs on:
- **Pull Requests**: Tests on Node.js 20.x and 22.x
- **Main Branch**: Tests on Node.js 22.x
- **Artifact Storage**: Reports and screenshots saved for 7-14 days

### Workflow Features
- ✅ Automatic browser installation
- ✅ Parallel test execution
- ✅ Multi-Node.js version testing
- ✅ Test result artifacts
- ✅ Failure screenshots and videos
- ✅ Smart path filtering (ignores documentation changes)

## 📊 Test Reports

### Available Reports
- **Console Output**: Real-time test progress
- **HTML Report**: Interactive report at `test-results/cucumber-report.html`
- **JSON Report**: Machine-readable format at `test-results/cucumber-report.json`
- **JUnit XML**: CI-compatible format (CI profile only)

### Viewing Reports
```bash
# Open HTML report in browser (macOS)
npm run report:open

# Serve reports on local HTTP server
npm run report:serve
```

## 🐛 Debugging

### Local Development
- Tests run in **headed mode** by default for debugging
- Browser DevTools available during test execution
- Step-by-step execution visibility

### CI Environment
- Tests run in **headless mode** automatically
- Screenshots captured on failures
- Video recordings for failed scenarios
- Detailed logs in GitHub Actions

### Environment Variables
```bash
# Force headless mode
HEADLESS=true npm run test:bdd

# Force headed mode in CI
CI=false npm run test:bdd:ci
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/my-feature`
3. **Write tests** for your changes
4. **Run tests**: `npm test`
5. **Commit changes**: `git commit -am 'Add new feature'`
6. **Push to branch**: `git push origin feature/my-feature`
7. **Create Pull Request**

### Common Issues

**Node.js Version Error:**
```bash
# Ensure you're using Node.js 20+
node --version

# Update Node.js if needed
nvm install 22
nvm use 22
```

**Browser Installation Issues:**
```bash
# Reinstall Playwright browsers
npx playwright install --with-deps
```

**Permission Issues (Linux/macOS):**
```bash
# Fix tmp directory permissions
chmod 755 tmp/
```

**Headless Mode Issues:**
```bash
# Force headed mode for debugging
HEADLESS=false npm run test:bdd
```
Happy testing! 🚀
