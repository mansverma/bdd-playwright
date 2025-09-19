const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

// Set default timeout to 60 seconds
setDefaultTimeout(60000);

// Background step
Given('I am on the SpaceTalk website', async function () {
  await this.page.goto('https://spacetalk.co/', { waitUntil: 'load', timeout: 60000 });
  // Wait a bit more for dynamic content to load
  await this.page.waitForTimeout(2000);
});

// Given steps
Given('I navigate to {string}', async function (url) {
  await this.page.goto(url, { waitUntil: 'load', timeout: 60000 });
  // Wait a bit more for dynamic content to load
  await this.page.waitForTimeout(2000);
});

// When steps
When('I click on the cart link with href {string}', async function (href) {
  await this.page.click(`a[href="${href}"]`);
});

When('I click on the element with selector {string}', async function (selector) {
  await this.page.click(selector);
});

// Then steps
Then('I should wait for the count bubble element to appear', async function () {
  await this.page.waitForSelector('.count-bubble.count-bubble--lg', { 
    state: 'visible',
    timeout: 10000
  });
});

Then('the count bubble should display {string}', async function (expectedValue) {
  const countBubble = this.page.locator('.count-bubble.count-bubble--lg');
  await expect(countBubble).toBeVisible();
  await expect(countBubble).toContainText(expectedValue);
});

Then('the element with class {string} should be visible', async function (className) {
  // Convert space-separated class names to CSS selector format
  const cssSelector = `.${className.split(' ').join('.')}`;
  const element = this.page.locator(cssSelector);
  await expect(element).toBeVisible();
});

Then('the count bubble value should be {string}', async function (expectedValue) {
  const countBubble = this.page.locator('.count-bubble.count-bubble--lg');
  await expect(countBubble).toHaveText(expectedValue);
});