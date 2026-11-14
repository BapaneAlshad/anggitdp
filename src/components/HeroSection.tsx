"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Asterisk, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useConsultation } from "../context/ConsultationContext";
import { hero, presentation, profile } from "../data/siteData";

export interface AnggitPortraitProps {
  src?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}
export interface HeroSectionProps { portraitSrc?: string; }

export function AnggitPortrait({
  src = "/images/anggit-prakoso.jpg",
  priority = false,
  sizes = "(max-width: 767px) calc(100vw - 70px), (max-width: 1199px) 360px, 470px",
  className = "",
}: AnggitPortraitProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const canLoadPortrait = src.trim().length > 0 && failedSrc !== src;
  const isPortraitLoaded = canLoadPortrait && loadedSrc === src;

  return (
    <div className={`portrait ${className}`}>
      <div className="portrait-fallback" role="img" aria-label={`Monogram ${profile.monogram}, ${profile.name}`} aria-hidden={isPortraitLoaded}>
        <strong>{profile.monogram}</strong><span>{profile.name}</span><small>{profile.positioning}</small>
      </div>
      {canLoadPortrait && (
        <Image src={src} alt={`Foto ${profile.name}, ${profile.role} di ${profile.company}`} fill priority={priority} sizes={sizes} unoptimized
          aria-hidden={!isPortraitLoaded} onLoad={() => setLoadedSrc(src)} onError={() => setFailedSrc(src)} style={{ opacity: isPortraitLoaded ? 1 : 0 }} />
      )}
    </div>
  );
}

export function HeroSection({ portraitSrc }: HeroSectionProps) {
  const { openDrawer } = useConsultation();
  return (
      <section id="beranda" aria-labelledby="hero-title" className="hero">
        <div className="site-shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" aria-hidden="true" />{hero.badge}</p>
            <h1 id="hero-title" className="hero-title">
              <span>{presentation.hero.titleFirst}</span><span>{presentation.hero.titleSecond}</span><span className="editorial-serif">{presentation.hero.titleAccent}</span>
            </h1>
            <p className="hero-description">{hero.description}</p>
            <div className="hero-actions">
              <button type="button" className="button button--primary" aria-label={hero.primaryCtaLabel} onClick={() => openDrawer()}><MessageCircle aria-hidden="true" /><span className="hero-cta-full">{hero.primaryCtaLabel}</span><span className="hero-cta-short" aria-hidden="true">{presentation.hero.mobileCta}</span><ArrowUpRight aria-hidden="true" /></button>
              <Link className="button button--secondary" href={hero.secondaryCtaHref}>{hero.secondaryCtaLabel}<ArrowDown aria-hidden="true" /></Link>
            </div>
          </div>
          <div className="hero-visual">
            <span className="hero-visual__label"><span className="status-dot" aria-hidden="true" />{presentation.hero.photoLabel}</span>
            <span className="hero-spark" aria-hidden="true"><Asterisk /></span>
            <AnggitPortrait {...(portraitSrc === undefined ? {} : { src: portraitSrc })} priority className="hero-photo" />
            <div className="portrait-caption"><div><strong>{profile.name}</strong><small>{profile.role} · {profile.company}</small></div><ArrowUpRight aria-hidden="true" /></div>
            <div className="hero-metric" aria-label={hero.stats[1]?.label}><strong>{hero.stats[1]?.value.split(" ")[0]}</strong><span>{presentation.hero.metricLabel}<small>{presentation.hero.metricNote}</small></span></div>
          </div>
        </div>
      </section>
  );
}
export default HeroSection;
