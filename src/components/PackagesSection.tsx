"use client";

import { ArrowUpRight, Check, Info, Plus } from "lucide-react";
import { useConsultation } from "../context/ConsultationContext";
import { packages, presentation, pricingNote, sectionCopy } from "../data/siteData";
import { SectionHeading } from "./DesignSystem";

export function PackagesSection() {
  const { openDrawer } = useConsultation();
  return (
    <section id="paket" aria-labelledby="paket-heading" aria-describedby="paket-pricing-note" className="section section--paper">
      <div className="site-shell">
        <SectionHeading id="paket-heading" index="03" label={presentation.packages.label} title={sectionCopy.packages.title} description={presentation.packages.description} />
        <div className="pricing-grid">
          {packages.map((pkg) => (
            <article key={pkg.id} aria-labelledby={`${pkg.id}-name`} aria-describedby={`${pkg.id}-subtitle`} className={`pricing-card${pkg.isPopular ? " pricing-card--featured" : ""}`} data-reveal>
              {pkg.badge ? <p className="pricing-card__badge">{pkg.badge}</p> : null}
              <h3 id={`${pkg.id}-name`}>{pkg.name}</h3>
              <p id={`${pkg.id}-price`} className="pricing-card__price">{pkg.priceText}</p>
              <p id={`${pkg.id}-subtitle`} className="pricing-card__subtitle">{pkg.benefit}</p>
              <details className="compact-details pricing-card__deliverables">
                <summary id={`${pkg.id}-deliverables`}>{sectionCopy.packages.deliverablesLabel}<Plus aria-hidden="true" /></summary>
                <p className="pricing-card__audience">{pkg.subtitle}</p>
                <ul className="pricing-card__features" aria-labelledby={`${pkg.id}-name ${pkg.id}-deliverables`}>
                  {pkg.features.map((feature) => <li key={feature}><Check aria-hidden="true" /><span>{feature}</span></li>)}
                </ul>
                {pkg.scopeNote && <p id={`${pkg.id}-scope`} className="pricing-card__scope">{pkg.scopeNote}</p>}
              </details>
              <button type="button" aria-describedby={`${pkg.id}-name ${pkg.id}-price`} onClick={() => openDrawer({ offer: pkg.name })} className={`button button--wide ${pkg.isPopular ? "button--white" : "button--primary"}`}>
                {sectionCopy.packages.ctaLabel}<ArrowUpRight aria-hidden="true" />
              </button>
            </article>
          ))}
        </div>
        <p id="paket-pricing-note" className="pricing-note"><Info aria-hidden="true" /><span>{pricingNote}</span></p>
      </div>
    </section>
  );
}
export default PackagesSection;
