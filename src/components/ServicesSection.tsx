"use client";

import { ArrowUpRight, CalendarDays, Check, Globe, Handshake, Megaphone, Palette, Plus, Search, type LucideIcon } from "lucide-react";
import { useConsultation } from "../context/ConsultationContext";
import { presentation, sectionCopy, services } from "../data/siteData";
import { SectionHeading } from "./DesignSystem";

const serviceIcons: Readonly<Record<string, LucideIcon>> = {
  "bedah-brand-marketing": Search,
  "rapikan-tampilan-brand": Palette,
  "konten-bisnis": CalendarDays,
  "website-landing-page": Globe,
  "iklan-online": Megaphone,
  "pendampingan-marketing": Handshake,
};

export function ServicesSection() {
  const { openDrawer } = useConsultation();
  return (
    <section id="layanan" aria-labelledby="layanan-heading" className="section">
      <div className="site-shell">
        <SectionHeading id="layanan-heading" index="04" label={presentation.services.label} title={sectionCopy.services.title} description={presentation.services.description} />
        <div className="service-grid">
          {services.map((service) => {
            const Icon = serviceIcons[service.id] ?? Search;
            return (
              <article key={service.id} aria-label={service.title} className="service-card service-card--compact">
                <details className="service-details">
                  <summary><span className="feature-icon"><Icon aria-hidden="true" /></span><span>{service.title}</span><Plus aria-hidden="true" className="service-disclosure-icon" /></summary>
                  <p className="service-card__description">{service.description}</p>
                  <ul className="deliverable-list">{service.deliverables.map((deliverable) => <li key={deliverable}><Check aria-hidden="true" /><span>{deliverable}</span></li>)}</ul>
                  <button type="button" className="text-link" aria-label={`${service.ctaLabel}: ${service.title}`} onClick={() => openDrawer({ offer: service.title })}>{service.ctaLabel}<ArrowUpRight aria-hidden="true" /></button>
                </details>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default ServicesSection;
