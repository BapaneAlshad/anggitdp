import { ArrowLeft, Lightbulb, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortfolioConsultationButton } from "../../../components/PortfolioConsultationButton";
import { portfolio, portfolioAdviceNote, portfolioContentNote } from "../../../data/siteData";
import { createPageMetadata } from "../../siteMetadata";

type ProfilePageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return portfolio.map(({ id }) => ({ slug: id }));
}

async function getProfile(params: ProfilePageProps["params"]) {
  const { slug } = await params;
  const item = portfolio.find(({ id }) => id === slug);
  if (!item) notFound();
  return item;
}

export async function generateMetadata({ params }: ProfilePageProps) {
  const item = await getProfile(params);
  return createPageMetadata(`/portofolio/${item.id}/`, `${item.brandName} | Portofolio Anggit Prakoso`, `${item.role} ${item.result}`);
}

export default async function PortfolioProfile({ params }: ProfilePageProps) {
  const item = await getProfile(params);
  return (
    <main id="konten-utama" tabIndex={-1}>
      <section className="section profile-page" aria-labelledby="profile-title">
        <div className="site-shell">
          <Link className="text-link route-back" href="/portofolio/"><ArrowLeft aria-hidden="true" />Semua portofolio</Link>
          <div className="profile-hero">
            <div>
              <p className="eyebrow">{item.category}</p>
              <h1 id="profile-title" className="section-title route-title">{item.brandName}</h1>
              <p className="section-description">{item.role}</p>
              <PortfolioConsultationButton brand={item.brandName} />
            </div>
            <div className="profile-stat">
              <p><Store aria-hidden="true" />Capaian brand</p>
              <p className="portfolio-card__metric"><strong>{item.metricValue}</strong><span>{item.metricLabel}</span></p>
              <p>{item.result}</p>
            </div>
          </div>
          <p className="portfolio-note">{portfolioContentNote}</p>
          {item.photo ? (
            <figure className="profile-photo">
              <Image src={item.photo.src} alt={item.photo.alt} width={item.photo.width} height={item.photo.height} sizes="(max-width: 767px) 100vw, 800px" />
              <figcaption>{item.photo.caption}</figcaption>
            </figure>
          ) : null}
          <section className="profile-advice" aria-labelledby="profile-advice-heading">
            <span className="feature-icon"><Lightbulb aria-hidden="true" /></span>
            <div>
              <h2 id="profile-advice-heading">Saran untuk bisnis serupa</h2>
              <p className="portfolio-note">{portfolioAdviceNote}</p>
              <p className="profile-advice__question">{item.challenge}</p>
              <p>{item.approach}</p>
              <p>{item.insight}</p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
