import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

export default defineConfig({
  ...defineBddConfig({
    paths: ['features/**/*.feature'],   // where your .feature files live
    require: ['steps/**/*.js'],         // your step definitions
  })
});