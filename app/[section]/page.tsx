import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "../components/SiteChrome";
import { SectionItems, sections } from "../components/Sections";

type Props = { params: Promise<{ section: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return sections.map(({ id }) => ({ section: id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section: id } = await params;
  const section = sections.find((item) => item.id === id);
  if (!section) notFound();
  return { title: `${section.title} · MurMur Log`, alternates: { canonical: `https://murmurlog.com/${id}/` } };
}

export default async function SectionPage({ params }: Props) {
  const { section: id } = await params;
  const section = sections.find((item) => item.id === id);
  if (!section) notFound();
  return (
    <PageShell section={id}>
      <section className="section-page shell" aria-labelledby="section-title">
        <header className="post-header">
          <Link className="breadcrumb" href="/">← 首页</Link>
          <h1 id="section-title">{section.title}</h1>
        </header>
        <SectionItems section={section} />
      </section>
    </PageShell>
  );
}
