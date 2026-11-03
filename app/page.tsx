import { SiteHeader } from "./components/SiteChrome";
import { SectionItems, sections } from "./components/Sections";

export default function Home() {
  return (
    <main>
      <SiteHeader home />
      <div className="home-stream shell">
        {sections.map((section) => (
          <section className="stream-section" id={section.id} aria-labelledby={`${section.id}-title`} key={section.id}>
            <div className="stream-heading">
              <h2 id={`${section.id}-title`}>{section.title}</h2>
            </div>
            <SectionItems section={section} />
          </section>
        ))}
      </div>
    </main>
  );
}
