const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

// Set up browser and page before each scenario
Before(async function() {
  // Set temporary directory to current working directory
  process.env.TMPDIR = path.join(process.cwd(), 'tmp');
  process.env.TEMP = path.join(process.cwd(), 'tmp');
  fs.mkdirSync(process.env.TMPDIR, { recursive: true });
  
  // Determine if we should run in headless mode
  const isCI = process.env.CI === 'true' || process.env.HEADLESS === 'true';
  
  // Launch browser with appropriate settings for CI/local development
  this.browser = await chromium.launch({ 
    headless: isCI,
    args: [
      '--no-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--disable-background-timer-throttling',
      '--disable-backgrounding-occluded-windows',
      '--disable-renderer-backgrounding'
    ]
  });
  
  // Create browser context
  this.context = await this.browser.newContext();
  
  // Create new page
  this.page = await this.context.newPage();
});

// Clean up after each scenario
After(async function() {
  if (this.page) {
    await this.page.close();
  }
  if (this.context) {
    await this.context.close();
  }
  if (this.browser) {
    await this.browser.close();
  }
});