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
});
test("work and resume routes are usable", async ({ page }) => {
  await page.goto("/work/knowledge-gap-discovery/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "knowledge roadmap",
  );
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
