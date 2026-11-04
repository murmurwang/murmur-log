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
    "out/projects/arcfold/index.html",
    "out/projects/arcfold/introduction/index.html",
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
    assert.match(home, new RegExp(`href="#${id}"`));
  }
  assert.match(home, /href="\/posts\/finding-direction-through-writing\/"/);
  const article = await read("out/posts/finding-direction-through-writing/index.html");
  assert.match(article, /用语音输入写工作复盘有助于回归整体目标/);
  assert.match(article, /我觉得可以开始尝试规律地更新博客当中的工作复盘。/);
  assert.match(await read("out/feed.xml"), /https:\/\/murmurlog\.com\/posts\/finding-direction-through-writing\//);
});


test("section navigation targets home anchors and headings are plain text", async () => {
  const home = await read("out/index.html");
  const order = [...home.matchAll(/<section[^>]+id="([^" ]+)"/g)].map((match) => match[1]);
  assert.deepEqual(order, ["projects", "reviews", "thoughts"]);
  for (const [id, title] of [["projects", "Agent 项目"], ["reviews", "工作复盘"], ["thoughts", "个人思考"]]) {
    const page = await read(`out/${id}/index.html`);
    assert.match(page, new RegExp(`<h1 id="section-title">${title}</h1>`));
    assert.equal(home.split(`href="#${id}"`).length - 1, 1);
    assert.ok(home.includes(`<h2 id="${id}-title">${title}</h2>`));
    assert.ok(!home.includes(`href="/${id}/"`));
    assert.ok(page.includes(`href="/#${id}"`));
    assert.match(page, /aria-current="location"/);
    assert.match(page, /href="\/">← 首页/);
  }
});


test("Arcfold project links publish the complete introduction", async () => {
  const project = await read("out/projects/arcfold/index.html");
  assert.match(project, /<h1 id="project-title">Arcfold<\/h1>/);
  assert.ok(project.includes('href="/projects/arcfold/introduction/"'));
  const article = await read("out/projects/arcfold/introduction/index.html");
  assert.match(article, /共同经历在增加，AI 的理解与工作方式却未必随之改善。/);
  assert.match(article, /获得更准确贯彻自身意图的长期支持。/);
  assert.doesNotMatch(article, /同一题重答变好，不能代替新任务验证。/);
  for (const figure of ["human-loop", "continuous-learning"]) {
    assert.ok(article.includes(`/images/arcfold/${figure}.png`));
    await read(`out/images/arcfold/${figure}.png`);
  }
  for (const path of ["out/index.html", "out/projects/index.html"]) {
    assert.ok((await read(path)).includes('href="/projects/arcfold/"'));
  }
  assert.ok((await read("out/feed.xml")).includes("https://murmurlog.com/projects/arcfold/"));
});
