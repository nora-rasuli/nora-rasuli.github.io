import { describe, expect, it } from "vitest";
import {
  allWork,
  getWorkBySlug,
  professionalWork,
  publicProjects,
} from "@/lib/content";
describe("portfolio content", () => {
  it("uses unique resolvable slugs", () => {
    const slugs = allWork.map((i) => i.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    slugs.forEach((s) => expect(getWorkBySlug(s)).toBeDefined());
  });
  it("attaches evidence to every story", () => {
    allWork.forEach((i) => expect(i.evidence.length).toBeGreaterThan(0));
  });
  it("separates proprietary and public work", () => {
    expect(professionalWork.every((i) => i.confidentialityNote)).toBe(true);
    expect(
      publicProjects.every((i) =>
        i.repository.startsWith("https://github.com/"),
      ),
    ).toBe(true);
  });
});
