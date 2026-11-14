import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { portfolio, portfolioContentNote } from "../data/siteData";
import type { PortfolioCaseStudy } from "../types/site";
import { SectionHeading } from "./DesignSystem";

export function PortfolioCards({ items, featured = false }: { items: readonly PortfolioCaseStudy[]; featured?: boolean }) {
  return (
    <ul className={`portfolio-grid${featured ? " portfolio-grid--featured" : ""}`}>
      {items.map((item) => (
        <li key={item.id}>
          <Link className="portfolio-card" href={`/portofolio/${item.id}/`} aria-label={`Lihat profil ${item.brandName}`}>
            <div className="portfolio-card__identity">
              <h3>{item.brandName}</h3>
              {featured ? null : <p>{item.category}</p>}
            </div>
            <p className="portfolio-card__metric"><strong>{item.metricValue}</strong><span>{item.metricLabel}</span></p>
            <span className="portfolio-card__link"><span className={featured ? "portfolio-card__link-label" : undefined}>Lihat profil</span><ArrowUpRight aria-hidden="true" /></span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function PortfolioSection() {
  return (
    <section id="portofolio" aria-labelledby="portfolio-title" className="section section--wash">
      <div className="site-shell">
        <SectionHeading id="portfolio-title" index="05" label="Bukti pengalaman" title="Karya pilihan" />
        <PortfolioCards items={portfolio.slice(0, 3)} featured />
        <p className="portfolio-note">{portfolioContentNote}</p>
        <Link className="text-link portfolio-all" href="/portofolio/">Lihat semua portofolio<ArrowRight aria-hidden="true" /></Link>
      </div>
    </section>
  );
}
export default PortfolioSection;
