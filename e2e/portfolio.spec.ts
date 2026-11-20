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
  ).toHaveCount(5);
  await expect(
    page.getByRole("heading", { name: "StateChorus", level: 3 }),
  ).toBeVisible();
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
