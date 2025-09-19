const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const path = require('path');

// Set up browser and page before each scenario
Before(async function() {
  // Set temporary directory to current working directory
  process.env.TMPDIR = path.join(process.cwd(), 'tmp');
  process.env.TEMP = path.join(process.cwd(), 'tmp');
  
  // Launch browser in headed mode (visible Chromium browser)
  this.browser = await chromium.launch({ 
    headless: false,
    args: [
      '--no-sandbox',
      '--disable-dev-shm-usage'
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