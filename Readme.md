md
# Playwright Automation Practice

Practice tests written with Playwright and Javascript/Typescript.

## What's covered
- Login with valid and invalid credentials
- Dropdowns, checkboxes and radio buttons
- Sorting checks on an e-commerce demo site
- Shared setup with `beforeEach`

## How to run

````bash
npm install
npx playwright test
````

## Useful options

Run with a visible browser:
npx playwright test --headed

Run in one browser only:
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

Run in UI mode (watch tests run and re-run them):
npx playwright test --ui

Debug step by step:
npx playwright test --debug

Run one test at a time (no parallel):
npx playwright test --workers=1

Show results in the terminal as a list:
npx playwright test --reporter=list

## Practice sites
- rahulshettyacademy.com
- saucedemo.com