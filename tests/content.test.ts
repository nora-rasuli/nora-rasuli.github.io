import { describe, expect, it } from "vitest";
import { allWork, getWorkBySlug, publicProjects } from "@/lib/content";
describe("portfolio content", () => {
  it("uses unique resolvable slugs", () => {
    const slugs = allWork.map((i) => i.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    slugs.forEach((s) => expect(getWorkBySlug(s)).toBeDefined());
  });
  it("attaches evidence to every story", () => {
    allWork.forEach((i) => expect(i.evidence.length).toBeGreaterThan(0));
  });
  it("publishes only complete personal projects", () => {
    expect(
      publicProjects.every((i) =>
        i.repository.startsWith("https://github.com/"),
      ),
    ).toBe(true);
    expect(publicProjects.every((i) => i.userStory && i.demoPath?.length)).toBe(
      true,
    );
  });
  it("features Move Canvas first with verified public product links", () => {
    expect(publicProjects[0].slug).toBe("move-canvas");
    expect(
      publicProjects[0].links?.find((link) => link.kind === "demo")?.href,
    ).toBe("https://move-canvas.vercel.app");
    expect(publicProjects[0].repository).toBe(
      "https://github.com/nora-rasuli/move-canvas",
    );
    expect(publicProjects[0].image?.alt).toContain("Motion Game");
    expect(publicProjects[0].disclosure).toContain(
      "not medical, injury-prevention, biomechanics, or professional instruction",
    );
    expect(publicProjects[0].demoPath).toContain(
      "Save a game to My Space, publish it intentionally, or discover, like, and collect games from the public library.",
    );
    expect(publicProjects[0].disclosure).toContain(
      "YouTube videos are visual references only",
    );
    expect(publicProjects[0].disclosure).toContain(
      "explicitly enables an encrypted peer-to-peer live view",
    );
    expect(publicProjects[0].skills).toContain("WebRTC");
  });
});
