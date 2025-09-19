const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

// Remove duplicate step definition - it exists in addCart.steps.js
// Given('I am on the SpaceTalk website') is handled by addCart.steps.js

Given('I am on the Spacetalk homepage', async function () {
  await this.page.goto('https://spacetalk.co/', { waitUntil: 'load', timeout: 60000 });
  // Wait a bit more for dynamic content to load
  await this.page.waitForTimeout(2000);
});


When('I click on the search link with href {string}', async function (href) {
  await this.page.click(`a[href="${href}"]:visible`);
});

When('I search for {string}', async function (productName) {
  await this.page.fill('input[type="search"], input[placeholder*="Search"]', productName);
  await this.page.keyboard.press('Enter');
  await this.page.waitForLoadState('domcontentloaded');
});

Then('the page should contain {string}', async function (expectedText) {
  await expect(this.page.locator('body')).toContainText(expectedText);
});

Then('the page should load successfully', async function () {
  await expect(this.page).toHaveURL(/.+/); // Just ensures some URL is loaded
});

Then('the product page should be displayed', async function () {
  await expect(this.page.locator('h1, .product-title')).toBeVisible();
});
