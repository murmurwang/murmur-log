import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function read(path) {
  return readFile(new URL(path, root), "utf8");
}

test("exports every public page", async () => {
  const pages = [
    "out/index.html",
    "out/posts/work-review-1102/index.html",
  ];

  for (const page of pages) {
    const html = await read(page);
    assert.match(html, /MurMur Log/);
  }
});

test("publishes the work review with discoverable links", async () => {
  const article = await read("out/posts/work-review-1102/index.html");
  assert.match(article, /工作复盘 1102/);
  assert.match(article, /目标就是这样丢掉的。/);
  assert.match(await read("out/index.html"), /href="\/posts\/work-review-1102\/"/);
  assert.match(await read("out/feed.xml"), /https:\/\/murmurlog\.com\/posts\/work-review-1102\//);
});

test("exports the custom domain and feed without platform bindings", async () => {
  assert.equal((await read("out/CNAME")).trim(), "murmurlog.com");
  assert.match(await read("out/feed.xml"), /https:\/\/murmurlog\.com\/feed\.xml/);

  const packageJson = await read("package.json");
  assert.doesNotMatch(packageJson, /openai|chatgpt|vinext|wrangler|cloudflare/i);
});
