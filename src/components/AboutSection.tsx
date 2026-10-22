"use client";

import { ArrowUpRight, BriefcaseBusiness, Check, Compass, MessageCircle } from "lucide-react";
import { useConsultation } from "../context/ConsultationContext";
import { hero, portfolio, profile, sectionCopy } from "../data/siteData";
import { AnggitPortrait } from "./HeroSection";

export interface AboutSectionProps {
  portraitSrc?: string;
}

export function AboutSection({ portraitSrc }: AboutSectionProps) {
  const { openDrawer, setPortfolioRef } = useConsultation();

  return (
    <section id="tentang" aria-labelledby="about-title" className="scroll-mt-24 overflow-x-hidden bg-[#FAF9F6] py-14 text-[#0F172A] sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-3 sm:mb-10">
          <span aria-hidden="true" className="h-px w-8 bg-[#2563EB]" />
          <h2 id="about-title" className="text-2xl font-bold tracking-tight sm:text-3xl">{sectionCopy.about.title}</h2>
        </div>

        <div className="grid min-w-0 gap-4 sm:gap-5 lg:grid-cols-12">
          <article className="min-w-0 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-7 lg:col-span-7">
            <div className="grid items-start gap-6 sm:grid-cols-[160px_minmax(0,1fr)] lg:grid-cols-[180px_minmax(0,1fr)]">
              <div className="mx-auto w-full max-w-[220px] sm:mx-0">
                <AnggitPortrait
                  {...(portraitSrc === undefined ? {} : { src: portraitSrc })}
                  sizes="(max-width: 639px) 220px, (max-width: 1023px) 160px, 180px"
                  className="rounded-2xl"
                />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#2563EB]">{profile.positioning}</p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">{profile.name}</h3>
                <div className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-slate-600">
                  <BriefcaseBusiness aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#2563EB]" />
                  <p><span className="font-semibold text-[#0F172A]">{profile.role}</span><br />{profile.company}</p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{profile.bio}</p>
            <ul aria-label="Keahlian Anggit" className="mt-6 flex flex-wrap gap-2">
              {profile.expertise.map((expertise) => (
                <li key={expertise} className="rounded-full border border-slate-200 bg-[#FAF9F6] px-3 py-1.5 text-xs font-medium text-slate-600">{expertise}</li>
              ))}
            </ul>
          </article>

          <article className="min-w-0 rounded-[2rem] bg-[#0F172A] p-5 text-white sm:p-7 lg:col-span-5">
            <span className="inline-flex size-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-blue-200">
              <Compass aria-hidden="true" className="size-5" />
            </span>
            <h3 className="mt-5 text-xl font-bold tracking-tight sm:text-2xl">{sectionCopy.about.principlesTitle}</h3>
            <ul className="mt-6 space-y-5">
              {profile.workingPrinciples.map((principle) => (
                <li key={principle} className="flex items-start gap-3">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                    <Check aria-hidden="true" className="size-3.5" />
                  </span>
                  <p className="text-sm leading-7 text-slate-200">{principle}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="min-w-0 rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-7 lg:col-span-8">
            <h3 className="text-xl font-bold tracking-tight">{hero.secondaryCtaLabel}</h3>
            <ul aria-label="Pengalaman pengembangan brand F&B" className="mt-5 grid gap-3 sm:grid-cols-3">
              {portfolio.map((caseStudy) => (
                <li key={caseStudy.id} className="min-w-0">
                  <button
                    type="button"
                    onClick={() => setPortfolioRef(caseStudy.brandName)}
                    aria-label={sectionCopy.portfolio.ctaLabel(caseStudy.brandName)}
                    className="flex min-h-[48px] w-full flex-col items-start rounded-2xl border border-slate-200 bg-[#FAF9F6] p-4 text-left transition-colors hover:border-[#2563EB] hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-4 motion-reduce:transition-none"
                  >
                    <span className="flex w-full items-center justify-between gap-2 text-sm font-bold">
                      {caseStudy.brandName}
                      <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 text-[#2563EB]" />
                    </span>
                    <span className="mt-2 text-sm font-semibold leading-relaxed text-[#059669]">{caseStudy.metricHighlight}</span>
                    <span className="mt-2 text-xs leading-relaxed text-slate-500">{caseStudy.category}</span>
                  </button>
                </li>
              ))}
            </ul>
          </article>

          <div className="flex min-w-0 flex-col items-start justify-center rounded-[2rem] border border-blue-100 bg-blue-50 p-5 sm:p-7 lg:col-span-4">
            <p className="text-lg font-bold leading-snug tracking-tight">{sectionCopy.consultation.title}</p>
            <button
              type="button"
              onClick={() => openDrawer()}
              className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-[#059669] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#059669] focus-visible:ring-offset-4 focus-visible:ring-offset-blue-50 motion-reduce:transition-none"
            >
              <MessageCircle aria-hidden="true" className="size-4 shrink-0" />
              <span>{hero.primaryCtaLabel}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
