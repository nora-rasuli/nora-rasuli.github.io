import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
test("homepage communicates the portfolio story", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "complicated products",
  );
  await expect(page.getByRole("link", { name: "Résumé ↗" })).toHaveAttribute(
    "href",
    "/resume/",
  );
  await expect(
    page.locator(".work-actions").getByRole("link", { name: "Live demo" }),
  ).toHaveCount(6);
  await expect(
    page.getByRole("heading", { name: "Move Canvas", level: 3 }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "StateChorus", level: 3 }),
  ).toBeVisible();
});
test("Move Canvas case study is complete and usable", async ({ page }) => {
  await page.goto("/work/move-canvas/");

  await expect(
    page.getByRole("heading", { name: "Move Canvas", level: 1 }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Open live demo" }),
  ).toHaveAttribute("href", "https://move-canvas.vercel.app");
  await expect(page.getByRole("link", { name: "View GitHub" })).toHaveAttribute(
    "href",
    "https://github.com/nora-rasuli/move-canvas",
  );
  await expect(
    page.getByText(/not medical, injury-prevention, biomechanics/),
  ).toBeVisible();
  await expect(page.getByText(/Save a game to My Space/)).toBeVisible();
  await expect(
    page.getByText(/YouTube videos are visual references only/),
  ).toBeVisible();
  await expect(page.getByText(/Arm hands-free calibration/)).toBeVisible();
  await expect(
    page.getByText(/explicitly enables an encrypted peer-to-peer live view/),
  ).toBeVisible();

  const image = page.getByRole("img", {
    name: "Move Canvas mode selection for Motion Game, Dance Coach, and Tennis Coach",
  });
  await expect(image).toHaveAttribute("width", "1280");
  await expect(image).toHaveAttribute("height", "1111");
  await expect
    .poll(() =>
      image.evaluate((element) => {
        const loadedImage = element as HTMLImageElement;
        return [loadedImage.naturalWidth, loadedImage.naturalHeight];
      }),
    )
    .toEqual([1280, 1111]);

  await expect(
    page.getByRole("link", { name: /Next project StateChorus/ }),
  ).toHaveAttribute("href", "/work/statechorus/");

  const focusedLinks: string[] = [];
  for (let index = 0; index < 20; index += 1) {
    await page.keyboard.press("Tab");
    const href = await page.evaluate(() =>
      document.activeElement?.getAttribute("href"),
    );
    if (href) focusedLinks.push(href);
  }
  expect(focusedLinks).toContain("https://move-canvas.vercel.app");
  expect(focusedLinks).toContain("https://github.com/nora-rasuli/move-canvas");

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth + 1,
  );
  expect(hasHorizontalOverflow).toBe(false);

  const accessibility = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  expect(
    accessibility.violations.filter((violation) =>
      ["serious", "critical"].includes(violation.impact ?? ""),
    ),
  ).toEqual([]);
});
test("work and resume routes are usable", async ({ page }) => {
  await page.goto("/work/statechorus/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "StateChorus",
  );
  await expect(
    page.getByRole("link", { name: "Open live demo" }),
  ).toBeVisible();
  await expect(page.getByText("As an accessibility QA engineer")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "The shortest path to value" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "What I verified" }),
  ).toBeVisible();
  await expect(page.getByText(/42 Vitest checks/)).toBeVisible();
  await expect(
    page.getByText(/24 rendered-browser corpus attempts/),
  ).toBeVisible();
  await expect(page.getByText(/19 Playwright checks/)).toBeVisible();
  await page.goto("/resume/");
  await expect(
    page.getByRole("link", { name: "Download PDF" }),
  ).toHaveAttribute("href", "/Nora-Rasuli-Resume.pdf");
});
test("no serious accessibility violations", async ({ page }) => {
  await page.goto("/");
  const r = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  expect(
    r.violations.filter((v) =>
      ["serious", "critical"].includes(v.impact ?? ""),
    ),
  ).toEqual([]);
});
