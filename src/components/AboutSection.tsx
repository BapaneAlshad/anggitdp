"use client";

import { ArrowUpRight, Plus } from "lucide-react";
import { useConsultation } from "../context/ConsultationContext";
import { hero, presentation, profile, sectionCopy } from "../data/siteData";

export function AboutSection() {
  const { openDrawer } = useConsultation();
  return (
    <section id="tentang" aria-labelledby="about-title" className="section about-section about-section--compact">
      <div className="site-shell">
        <div className="about-grid" data-reveal>
          <div>
            <p className="eyebrow"><span>01</span><span className="eyebrow__line" aria-hidden="true" />{sectionCopy.about.title}</p>
            <h2 id="about-title" className="about-title">{presentation.about.title}</h2>
          </div>
          <div>
            <p className="about-bio">{profile.bio}</p>
          </div>
        </div>
        <details className="compact-details about-details">
          <summary>{sectionCopy.about.principlesTitle}<Plus aria-hidden="true" /></summary>
          <ul className="expertise-list" aria-label="Keahlian Anggit">{profile.expertise.map((expertise) => <li key={expertise}>{expertise}</li>)}</ul>
          <ul className="principle-grid">{profile.workingPrinciples.map((principle, index) => <li key={principle}><span>{String(index + 1).padStart(2, "0")}</span><p>{principle}</p></li>)}</ul>
          <div className="about-close"><button type="button" className="text-link" onClick={() => openDrawer()}>{hero.primaryCtaLabel}<ArrowUpRight aria-hidden="true" /></button></div>
        </details>
      </div>
    </section>
  );
}
export default AboutSection;
