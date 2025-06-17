import { test, expect } from "@playwright/test";

test.describe("Playwright", () => {
  test("should scroll button into view", async ({ page }) => {
    await page.goto("http://localhost:3000");

    const button = page.getByRole("button", {
      name: "Can't click this button",
    });

    await expect(page.getByText("0")).toBeVisible();

    await button.click();

    await expect(page.getByText("1")).toBeVisible();
  });

  test("should scroll overlayed button and click it", async ({ page }) => {
    await page.goto("http://localhost:3000");

    const button = page.getByRole("button", {
      name: "Can't click this button",
    });

    const buttonScrollTop = await button.evaluate(
      (el: HTMLElement) => el.offsetTop
    );

    console.log(buttonScrollTop);

    await page.locator("css=#container").evaluate((el, buttonScrollTop) => {
      el.scrollTo({
        top: buttonScrollTop,
        behavior: "instant",
      });
    }, buttonScrollTop);

    await button.click();

    await expect(page.getByText("1")).toBeVisible();
  });
});
