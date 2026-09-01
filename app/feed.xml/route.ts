const siteTitle = "MurMur Log";

export async function GET(request: Request) {
  const origin = new URL(request.url).origin;
  const updated = new Date().toISOString();
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${siteTitle}</title>
  <subtitle>Learning, writing, and building a system for human intention to emerge and become real.</subtitle>
  <link href="${origin}/" />
  <link href="${origin}/feed.xml" rel="self" type="application/atom+xml" />
  <id>${origin}/</id>
  <updated>${updated}</updated>
  <author><name>Murphy Wang</name></author>
</feed>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
