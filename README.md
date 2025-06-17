# Playwright Issue Reproduction

Playwright cannot click on overlayed buttons on `v1.53.0`

Issue [link](https://github.com/microsoft/playwright/issues/36339)

`tests/example.spec.ts` contains 2 tests:

- If the element is not visible it should be scrolled into the view and clicked - works fine
- If the element is visible, but overlayed is should be scrolled so it is not overlayed and element should be clicked - fails with playwright@1.53.0

Tested with versions:
- 1.53.0-alpha-2025-06-03 - 🟢
- 1.53.0-alpha-2025-06-04 - 🔴
- 1.53.0 - 🔴

## Running

```sh
pnpm install

pnpm run reproduction
```
