import { readFile, readdir, writeFile } from "node:fs/promises";
import { resolve, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { parse, parseFragment, serialize } from "parse5";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../out");
const attr = (node, name) => node.attrs?.find((item) => item.name === name)?.value;

async function optimize(parent) {
  const children = [];
  for (const node of parent.childNodes ?? []) {
    if (node.tagName === "script") {
      if (attr(node, "type") === "application/ld+json") {
        children.push(node);
        continue;
      }
      const src = attr(node, "src");
      const text = node.childNodes?.map((child) => child.value ?? "").join("") ?? "";
      if (!src?.startsWith("/_next/") && !text.startsWith("(self.__next_f=") && !text.startsWith("self.__next_f.push(")) {
        throw new Error("Unexpected application script: review static publishing before removing it.");
      }
      continue;
    }
    if (node.tagName === "link") {
      const rel = attr(node, "rel");
      if (rel === "modulepreload" || (rel === "preload" && attr(node, "as") === "script")) continue;
      if (rel === "stylesheet") {
        const href = attr(node, "href");
        if (!href?.startsWith("/_next/")) throw new Error(`Unexpected stylesheet: ${href}`);
        const path = resolve(root, `.${href}`);
        if (relative(root, path).startsWith("..")) throw new Error("Stylesheet outside export");
        const css = await readFile(path, "utf8");
        if (/<\/style/i.test(css)) throw new Error("Unsafe inline stylesheet content");
        const style = parseFragment(`<style>${css}</style>`).childNodes[0];
        style.parentNode = parent;
        children.push(style);
        continue;
      }
    }
    await optimize(node);
    children.push(node);
  }
  parent.childNodes = children;
}

async function visit(directory) {
  let count = 0;
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) count += await visit(path);
    else if (entry.name.endsWith(".html")) {
      const document = parse(await readFile(path, "utf8"));
      await optimize(document);
      await writeFile(path, serialize(document));
      count++;
    }
  }
  return count;
}

console.log(`Published ${await visit(root)} HTML pages with inline styles and no framework scripts.`);
