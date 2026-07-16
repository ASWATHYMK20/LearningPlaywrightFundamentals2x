# Learning Playwright Fundamentals 2x

A Playwright test automation project demonstrating fundamental concepts and best practices for end-to-end testing.

## Overview

This project uses [Playwright](https://playwright.dev/) to write reliable end-to-end tests for web applications. It serves as a learning resource for Playwright fundamentals including:

- **Browser, Context, Page (BCP) hierarchy** - Understanding the core Playwright architecture
- **Multi-user testing** - Using multiple browser contexts for isolated user sessions
- **Multi-tab testing** - Managing multiple pages within a single context
- **Playwright test runner** - Using the built-in test framework with assertions
- **Test annotations** - Adding descriptions and metadata to tests

## Project Structure

```
├── tests/
│   └── 02_first_tests/
│       ├── 231_First_running_Verify.spec.ts  # First running test with annotations
│       ├── 232_BCP.spec.ts                   # Browser, Context, Page hierarchy
│       ├── 233_BCP_MultipleContext.spec.ts   # Multiple contexts (multi-user testing)
│       ├── 234_BCP_Multiple_Page.spec.ts     # Multiple pages/tabs in a context
│       ├── 235_TEST_I_PW.spec.ts             # Playwright test runner with assertions
│       ├── 236_BCP_TEST_PW.spec.ts           # Two users interacting (multi-user testing)
│       └── 237_BCP_Test_Options.spec.ts      # Browser context options (viewport, locale, geolocation, mobile emulation)
├── playwright.config.ts                      # Playwright configuration
├── package.json                              # Project dependencies
└── .gitignore                                # Git ignore rules
```

## Tech Stack

- **Playwright** - End-to-end testing framework
- **TypeScript** - Type-safe JavaScript
- **Node.js** - Runtime environment

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
git clone https://github.com/ASWATHYMK20/LearningPlaywrightFundamentals2x.git
cd LearningPlaywrightFundamentals2x
npm install
npx playwright install
```

### Running Tests

```bash
# Run all tests
npx playwright test

# Run tests with UI mode
npx playwright test --ui

# Run tests in a specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

# Show test report
npx playwright show-report
```

## Test Configuration

The project is configured in `playwright.config.ts` with:

- **Parallel execution** enabled for faster test runs
- **Retries** on CI environments (2 retries)
- **HTML reporter** for detailed test reports
- **Tracing** enabled on first retry for debugging failures
- **Multi-browser** support (Chromium, Firefox, WebKit)

## License

ISC
