import { SiteHeader, ProjectIcon } from "./components/SiteChrome";
import { SectionItems, sections } from "./components/Sections";

export default function Home() {
  return (
    <main className="home-page">
      <SiteHeader home />
      <div className="home-stream shell">
        {sections.map((section) => (
          <section className="stream-section" id={section.id} aria-labelledby={`${section.id}-title`} key={section.id}>
            <div className="stream-heading">
              <h2 id={`${section.id}-title`}><ProjectIcon /><span>{section.title}</span></h2>
            </div>
            <div className="folder-files"><SectionItems section={section} /></div>
          </section>
        ))}
      </div>
    </main>
  );
}
