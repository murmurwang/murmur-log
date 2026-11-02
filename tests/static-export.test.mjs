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
    "out/projects/index.html",
    "out/reviews/index.html",
    "out/thoughts/index.html",
    "out/posts/work-review-1102/index.html",
    "out/posts/finding-direction-through-writing/index.html",
  ];

  for (const page of pages) {
    const html = await read(page);
    assert.match(html, /MurMur Log/);
  }
});

test("publishes the work review with discoverable links", async () => {
  const article = await read("out/posts/work-review-1102/index.html");
  assert.match(article, /研究方法的不断细化让我偏离了最初的研究目标/);
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

test("personal writing is published in its own home module", async () => {
  const home = await read("out/index.html");
  for (const id of ["thoughts", "reviews", "projects"]) {
    assert.match(home, new RegExp(`id="${id}"`));
    assert.match(home, new RegExp(`href="/${id}/"`));
  }
  assert.match(home, /href="\/posts\/finding-direction-through-writing\/"/);
  const article = await read("out/posts/finding-direction-through-writing/index.html");
  assert.match(article, /用语音输入写工作复盘有助于回归整体目标/);
  assert.match(article, /我觉得可以开始尝试规律地更新博客当中的工作复盘。/);
  assert.match(await read("out/feed.xml"), /https:\/\/murmurlog\.com\/posts\/finding-direction-through-writing\//);
});


test("section navigation and headings lead to the same standalone pages", async () => {
  const home = await read("out/index.html");
  const order = [...home.matchAll(/<section[^>]+id="([^" ]+)"/g)].map((match) => match[1]);
  assert.deepEqual(order, ["projects", "reviews", "thoughts"]);
  for (const [id, title] of [["projects", "项目"], ["reviews", "工作复盘"], ["thoughts", "个人思考"]]) {
    const page = await read(`out/${id}/index.html`);
    assert.match(page, new RegExp(`<h1 id="section-title">${title}</h1>`));
    assert.equal(home.split(`href="/${id}/"`).length - 1, 2);
    assert.match(page, /aria-current="page"/);
    assert.match(page, /href="\/">← 首页/);
  }
});
