import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { PortfolioCards } from "../../components/PortfolioSection";
import { portfolio, portfolioContentNote } from "../../data/siteData";
import { createPageMetadata } from "../siteMetadata";

const description = "Kenali pengalaman Anggit Prakoso dalam pengembangan brand kuliner dan minuman, beserta capaian jaringan masing-masing brand.";
export const metadata = createPageMetadata("/portofolio/", "Portofolio | Anggit Prakoso", description);

export default function PortfolioIndex() {
  return (
    <main id="konten-utama" tabIndex={-1}>
      <section className="section portfolio-page" aria-labelledby="portfolio-heading">
        <div className="site-shell">
          <Link className="text-link route-back" href="/"><ArrowLeft aria-hidden="true" />Beranda</Link>
          <p className="eyebrow">Pengalaman di bisnis F&amp;B</p>
          <h1 className="section-title route-title" id="portfolio-heading">Portofolio Anggit</h1>
          <p className="section-description">{description}</p>
          <PortfolioCards items={portfolio} />
          <p className="portfolio-note">{portfolioContentNote}</p>
        </div>
      </section>
    </main>
  );
}
