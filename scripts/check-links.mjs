import { readdir, readFile, stat } from "node:fs/promises";
import { join, resolve } from "node:path";
const root = resolve("out"),
  files = [];
async function walk(dir) {
  for (const e of await readdir(dir)) {
    const p = join(dir, e);
    if ((await stat(p)).isDirectory()) await walk(p);
    else if (e.endsWith(".html")) files.push(p);
  }
}
await walk(root);
const failures = [];
for (const file of files) {
  const html = await readFile(file, "utf8");
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (/^(https?:|mailto:|#)/.test(href)) continue;
    const clean = href.split("#")[0].split("?")[0];
    if (!clean) continue;
    const target = clean.startsWith("/")
        ? join(root, clean)
        : resolve(file, "..", clean),
      candidates = [target, join(target, "index.html"), `${target}.html`];
    let exists = false;
    for (const candidate of candidates) {
      try {
        await stat(candidate);
        exists = true;
        break;
      } catch {}
    }
    if (!exists) failures.push(`${file.replace(root, "")}: ${href}`);
  }
}
if (failures.length) {
  console.error(`Broken internal links:\n${failures.join("\n")}`);
  process.exit(1);
}
console.log(`Checked ${files.length} HTML files; no broken internal links.`);
