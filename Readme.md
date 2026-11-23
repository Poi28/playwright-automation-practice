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
```bash
npx playwright test --headed
```

Run in one browser only:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

Run in UI mode (watch tests run and re-run them):
```bash
npx playwright test --ui
```

Debug step by step:
```bash
npx playwright test --debug
```

Run one test at a time (no parallel):
```bash
npx playwright test --workers=1
```

Show results in the terminal as a list:
```bash
npx playwright test --reporter=list
```

## Combine options

One browser, one test at a time (no parallel):

```bash
npx playwright test --project=chromium --workers=1
```

One file, visible browser, one browser:

```bash
npx playwright test 4CartPractice.spec.js --headed --project=chromium
```

## Practice sites
- rahulshettyacademy.com
- saucedemo.com