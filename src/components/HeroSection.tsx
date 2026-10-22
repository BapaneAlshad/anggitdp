"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Check, MessageCircle, TrendingUp } from "lucide-react";
import { useState, type MouseEvent } from "react";
import { useConsultation } from "../context/ConsultationContext";
import { hero, profile } from "../data/siteData";

export interface AnggitPortraitProps {
  src?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

export interface HeroSectionProps {
  portraitSrc?: string;
}

export function AnggitPortrait({
  src = "/images/anggit-prakoso.webp",
  priority = false,
  sizes = "(max-width: 639px) calc(100vw - 48px), (max-width: 1023px) 400px, 440px",
  className = "",
}: AnggitPortraitProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const canLoadPortrait = src.trim().length > 0 && failedSrc !== src;
  const isPortraitLoaded = canLoadPortrait && loadedSrc === src;

  return (
    <div className={`relative isolate aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-[#0F172A] [container-type:inline-size] ${className}`}>
      <div
        role="img"
        aria-label={`Monogram ${profile.monogram}, ${profile.name}`}
        aria-hidden={isPortraitLoaded}
        className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_#2563EB_0%,_#172554_38%,_#0F172A_78%)] p-6 text-white"
      >
        <div aria-hidden="true" className="absolute -right-24 -top-24 size-80 rounded-full border border-white/10" />
        <div aria-hidden="true" className="absolute -bottom-32 -left-20 size-96 rounded-full border border-white/10" />
        <span className="relative text-[clamp(3rem,36cqw,8.5rem)] font-extrabold leading-none tracking-[-0.08em]">
          {profile.monogram}
        </span>
        <span className="relative mt-5 text-center text-[clamp(0.875rem,4.5cqw,1.125rem)] font-semibold tracking-tight">{profile.name}</span>
        <span className="relative mt-2 max-w-64 text-center text-[clamp(0.625rem,3cqw,0.75rem)] leading-relaxed text-blue-100">
          {profile.positioning}
        </span>
      </div>

      {canLoadPortrait && (
        <Image
          src={src}
          alt={`Foto ${profile.name}, ${profile.role} di ${profile.company}`}
          fill
          priority={priority}
          sizes={sizes}
          unoptimized
          aria-hidden={!isPortraitLoaded}
          onLoad={() => setLoadedSrc(src)}
          onError={() => setFailedSrc(src)}
          className={`object-cover object-top transition-opacity duration-300 motion-reduce:transition-none ${isPortraitLoaded ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </div>
  );
}

export function HeroSection({ portraitSrc }: HeroSectionProps) {
  const { openDrawer } = useConsultation();

  function scrollToExperience(event: MouseEvent<HTMLAnchorElement>): void {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const target = document.getElementById(hero.secondaryCtaHref.slice(1));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", hero.secondaryCtaHref);
  }

  return (
    <section id="beranda" aria-labelledby="hero-title" className="scroll-mt-24 overflow-x-hidden bg-[#FAF9F6] text-[#0F172A]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-14 pt-10 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:px-8 lg:py-20">
        <div className="min-w-0">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-2 text-[11px] font-semibold leading-relaxed text-[#2563EB] sm:px-4 sm:text-xs">
            <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-[#2563EB]" />
            <span className="min-w-0 break-words">{hero.badge}</span>
          </div>

          <h1 id="hero-title" className="mt-6 max-w-3xl text-[2.25rem] font-extrabold leading-[1.14] tracking-[-0.045em] sm:text-5xl lg:text-[3.4rem] xl:text-[3.75rem]">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{hero.description}</p>

          <div className="mt-8 flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={() => openDrawer()}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl bg-[#059669] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#059669] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAF9F6] motion-reduce:transition-none sm:text-base"
            >
              <MessageCircle aria-hidden="true" className="size-5 shrink-0" />
              <span>{hero.primaryCtaLabel}</span>
              <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
            </button>
            <a
              href={hero.secondaryCtaHref}
              onClick={scrollToExperience}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold transition-colors hover:border-[#2563EB] hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAF9F6] motion-reduce:transition-none sm:text-base"
            >
              {hero.secondaryCtaLabel}
              <ArrowDown aria-hidden="true" className="size-4 shrink-0" />
            </a>
          </div>

          <ul aria-label="Pengalaman brand F&B" className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-slate-500 sm:text-sm">
            {profile.brands.map((brand) => (
              <li key={brand} className="inline-flex items-center gap-1.5">
                <Check aria-hidden="true" className="size-3.5 text-[#059669]" />
                {brand}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full min-w-0 max-w-[440px]">
          <div aria-hidden="true" className="absolute inset-x-5 top-6 aspect-[4/5] rotate-3 rounded-[2rem] border border-blue-200 bg-blue-50" />
          <div className="relative px-2 sm:px-4">
            <AnggitPortrait {...(portraitSrc === undefined ? {} : { src: portraitSrc })} priority />
          </div>

          <ul aria-label="Statistik pengalaman Anggit" className="relative -mt-12 grid gap-3 px-1 sm:-mt-14 sm:grid-cols-2">
            {hero.stats.map((stat, index) => {
              const Icon = index === 0 ? BriefcaseBusiness : index === 1 ? TrendingUp : Check;

              return (
                <li
                  key={stat.id}
                  className={`flex min-w-0 items-start gap-3 rounded-2xl border p-4 shadow-[0_8px_30px_-16px_rgba(15,23,42,0.28)] ${index === 0 ? "border-slate-200 bg-white sm:col-span-2" : index === 1 ? "border-emerald-100 bg-emerald-50" : "border-slate-200 bg-white"}`}
                >
                  <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${index === 1 ? "bg-[#059669] text-white" : "bg-blue-50 text-[#2563EB]"}`}>
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className={`break-words font-bold leading-snug tracking-tight ${index === 1 ? "text-lg text-emerald-800" : "text-sm text-[#0F172A]"}`}>{stat.value}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">{stat.label}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
